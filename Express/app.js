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

    // Create a map for easy access to settings by Modulgruppe.
    const settingsMap = new Map(settings.map((s) => [s.Modulgruppe, s]));

    modules.forEach((module) => {
      // Access the settings for the module's Modulgruppe directly from the map.
      const setting = settingsMap.get(module.Modulgruppe);
      module.FarbeModulkaestchen = setting.FarbeModulkaestchen;
      module.Hintergrundfarbe = setting.Hintergrundfarbe;
      module.Schriftfarbe = setting.Schriftfarbe;
    });

    // Create a map to track semesters and modules.
    const semesterMap = new Map();
    modules.forEach((module) => {
      const currentSemester = module.Semester;
      if (!semesterMap.has(currentSemester)) {
        semesterMap.set(currentSemester, []);
      }
      semesterMap.get(currentSemester).push(module);
    });

    // Now convert the semesterMap to an array, if needed
    let semesterArray = Array.from(semesterMap.values());

    // Create a map for usedModulegroups to ensure uniqueness and ease of update.
    let usedModulegroupsMap = new Map();
    modules.forEach((module) => {
      const groupName = module.Modulgruppe;
      if (!usedModulegroupsMap.has(groupName)) {
        const setting = settingsMap.get(groupName);
        usedModulegroupsMap.set(groupName, {
          name: groupName,
          count: 0,
          FarbeModulkaestchen: setting.FarbeModulkaestchen,
          Hintergrundfarbe: setting.Hintergrundfarbe,
          Schriftfarbe: setting.Schriftfarbe,
          Reihenfolge: setting.Reihenfolge,
        });
      }
    });

    // Count the modules in each module group within each semester.
    semesterMap.forEach((modulesInSemester) => {
      modulesInSemester.forEach((module) => {
        const modulgruppe = usedModulegroupsMap.get(module.Modulgruppe);
        modulgruppe.count++;
      });
    });

    // Now convert the usedModulegroupsMap to an array
    let usedModulegroups = Array.from(usedModulegroupsMap.values());

    function transformModulesForSemester(
      modulesInSemester,
      usedModulegroupsMap
    ) {
      // We will first group modules by their Modulgruppe.
      const groupsMap = new Map();
      modulesInSemester.forEach((module) => {
        if (!groupsMap.has(module.Modulgruppe)) {
          groupsMap.set(module.Modulgruppe, {
            group: module.Modulgruppe,
            color: usedModulegroupsMap.get(module.Modulgruppe).Hintergrundfarbe,
            modules: [],
          });
        }
        groupsMap.get(module.Modulgruppe).modules.push({
          name: module.Modulbezeichnung,
          shortname: module.Modulkuerzel,
          description: module.Modulbeschreibung,
          credits: module.ECTS,
          url: module.Link,
        });
      });

      // Now convert the map to the array format required by the frontend.
      return Array.from(groupsMap.values());
    }

    // Finally, we will map over the semesters to structure the whole array.
    let all = Array.from(semesterMap.keys())
      .sort()
      .map((semesterNumber) => {
        const modulesInSemester = semesterMap.get(semesterNumber);
        const semesterModules = transformModulesForSemester(
          modulesInSemester,
          usedModulegroupsMap
        );
        return {
          number: semesterNumber.split(".")[0], // Assuming the semester number is always the first part before a dot.
          semesterModules: semesterModules,
        };
      });

    console.log(all);

    //const returnFile = __dirname + '/tmp/' + Date.now() + "_" + 'Modultafel.html'
    const returnFile = TEMP_DIR + Date.now() + "_" + "Modultafel.html";
    res.render(
      "App",
      {
        all: all,
        // wahlmodule: wahlmodule,
        // settings: settings[0],
      },
      (err, html) => {
        if (err) {
          return res
            .status(500)
            .send(err.message || "Error rendering the view");
        }
        console.log(html); // Add this line
        fs.writeFile(returnFile, html, (err) => {
          if (err) {
            return res.status(500).send(err.message || "Error writing to file");
          }
          res.download(returnFile);
        });
      }
    );
  });
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
