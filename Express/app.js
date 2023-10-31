// Imports
const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const PORT = process.env.PORT || 8080;
const xlsx = require("xlsx");
const fs = require("fs");
const svelteViewEngine = require("svelte-view-engine");

//const {add} = require("nodemon/lib/rules");

const TEMP_DIR = "public/tmp/";

let dir = "./pages";
let type = "html";

// Provides static resources for the frontend & file upload
app.use(
  express.static("public"),
  fileUpload({
    useTempFiles: true,
    tempFileDir: TEMP_DIR,
  })
);

app.engine(
  type,
  svelteViewEngine({
    template: "./template.html", // see Root template below
    dir,
    type,
    init: true,
    watch: true,
    liveReload: true,
    svelte: {
      // rollup-plugin-svelte config
    },
  })
);

app.set("view engine", type);
app.set("views", dir);

app.post("/upload", function (req, res) {
  let excelFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  excelFile = req.files.excelFile;
  //uploadPath = __dirname + '/tmp/' + Date.now() + "_" + excelFile.name;
  uploadPath = TEMP_DIR + Date.now() + "_" + excelFile.name;

  // move the file to temp path
  excelFile.mv(uploadPath, async function (err) {
    if (err) return res.status(500).send(err);

    // TODO: change logic to be truly variable
    const workbook = xlsx.readFile(uploadPath); // parse excel file
    const sheetNames = workbook.SheetNames;

    const settings = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
    const modules = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[1]]);
    const wahlmodule = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[2]]);

    modules.map((module) => {
      module.FarbeModulkaestchen = settings.find(
        (settings) => settings.Modulgruppe == module.Modulgruppe
      ).FarbeModulkaestchen;
      module.Hintergrundfarbe = settings.find(
        (settings) => settings.Modulgruppe == module.Modulgruppe
      ).Hintergrundfarbe;
      module.Schriftfarbe = settings.find(
        (settings) => settings.Modulgruppe == module.Modulgruppe
      ).Schriftfarbe;
    });

    let semesterArray = [];
    let addedSemesters = [];
    modules.forEach((module) => {
      let currentSemesterNumber = module.Semester.split(".")[0];
      if (!addedSemesters.includes(currentSemesterNumber)) {
        semesterArray.push(
          modules.filter(
            (module) => module.Semester == currentSemesterNumber + ". Semester"
          )
        );
        addedSemesters.push(currentSemesterNumber);
      }
    });

    let usedModulegroups = [];
    //let counter
    modules.forEach((module) => {
      if (
        usedModulegroups.find((modul) => modul.name == module.Modulgruppe) ==
        undefined
      ) {
        let FarbeModulkaestchen = settings.find(
          (settings) => settings.Modulgruppe == module.Modulgruppe
        ).FarbeModulkaestchen;
        let Hintergrundfarbe = settings.find(
          (settings) => settings.Modulgruppe == module.Modulgruppe
        ).Hintergrundfarbe;
        let Schriftfarbe = settings.find(
          (settings) => settings.Modulgruppe == module.Modulgruppe
        ).Schriftfarbe;
        let Reihenfolge = settings.find(
          (settings) => settings.Modulgruppe == module.Modulgruppe
        ).Reihenfolge;

        usedModulegroups.push({
          name: module.Modulgruppe,
          count: 1,
          FarbeModulkaestchen: FarbeModulkaestchen,
          Hintergrundfarbe: Hintergrundfarbe,
          Schriftfarbe: Schriftfarbe,
          Reihenfolge: Reihenfolge,
        });
      }
    });

    // Counting amount of Modules within a ModuleGroup and pushes to usedModulegroups Array
    usedModulegroups.forEach((modulgruppe) => {
      semesterArray.forEach((semester) => {
        let counter = 0;
        semester.forEach((module) => {
          if (module.Modulgruppe == modulgruppe.name) {
            counter++;
          }
        });
        if (counter > modulgruppe.count) {
          modulgruppe.count = counter;
        }
      });
    });

    //const returnFile = __dirname + '/tmp/' + Date.now() + "_" + 'Modultafel.html'
    const returnFile = TEMP_DIR + Date.now() + "_" + "Modultafel.html";
    res.render(
      "App",
      /* {
        usedModulegroups: usedModulegroups,
        semesterArray: semesterArray,
        wahlmodule: wahlmodule,
        settings: settings[0],
      }, */
      (err, html) => {
        fs.writeFile(returnFile, html, () => {
          res.download(returnFile);
        });
      }
    );
  });
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
