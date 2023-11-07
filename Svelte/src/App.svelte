<script>
  import Modul from "./Modul.svelte";
  import Semester from "./Semester.svelte";

  let vorlage = {
    usedModulegroups: [
      {
        name: "San Juan",
        count: 3,
        FarbeModulkaestchen: "#334771",
        Hintergrundfarbe: "#8f95b3",
        Schriftfarbe: "#FFFFFF",
        Reihenfolge: 1,
      },
      {
        name: "Eastern Blue",
        count: 1,
        FarbeModulkaestchen: "#1e7cb8",
        Hintergrundfarbe: "#9db9dd",
        Schriftfarbe: "#000000",
        Reihenfolge: 2,
      },
    ],
    semesterArray: [
      [
        {
          Semester: "1. Semester",
          Modulgruppe: "San Juan",
          Modulkuerzel: "w.BA.XX.2BWL-WIN.XX",
          Modulbezeichnung: "Einführung BWL",
          ECTS: 6,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
          FarbeModulkaestchen: "#334771",
          Hintergrundfarbe: "#8f95b3",
          Schriftfarbe: "#FFFFFF",
        },
        {
          Semester: "1. Semester",
          Modulgruppe: "San Juan",
          Modulkuerzel: "w.BA.XX.2WMWI.XX",
          Modulbezeichnung:
            "Wissenschaftliche Methoden der Wirtschaftsinformatik",
          ECTS: 6,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WMWI.XX.pdf",
          FarbeModulkaestchen: "#334771",
          Hintergrundfarbe: "#8f95b3",
          Schriftfarbe: "#FFFFFF",
        },
        {
          Semester: "1. Semester",
          Modulgruppe: "San Juan",
          Modulkuerzel: "w.BA.XX.2WIN.XX",
          Modulbezeichnung: "Einführung Wirtschaftsinformatik",
          ECTS: 6,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WIN.XX.pdf",
          FarbeModulkaestchen: "#334771",
          Hintergrundfarbe: "#8f95b3",
          Schriftfarbe: "#FFFFFF",
        },
        {
          Semester: "1. Semester",
          Modulgruppe: "Eastern Blue",
          Modulkuerzel: "w.BA.XX.2SWEng.XX",
          Modulbezeichnung: "Software Engineering",
          ECTS: 6,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
          FarbeModulkaestchen: "#1e7cb8",
          Hintergrundfarbe: "#9db9dd",
          Schriftfarbe: "#000000",
        },
        {
          Semester: "1. Semester",
          Modulgruppe: "Pacific Blue",
          Modulkuerzel: "w.BA.XX.2Mathe1-WIN.XX",
          Modulbezeichnung: "Mathematik 1",
          ECTS: 3,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
          FarbeModulkaestchen: "#00aebe",
          Hintergrundfarbe: "#a3d7e0",
          Schriftfarbe: "#000000",
        },
        {
          Semester: "1. Semester",
          Modulgruppe: "Half Baked",
          Modulkuerzel: "w.BA.XX.2BusE1.XX",
          Modulbezeichnung: "Business English 1",
          ECTS: 3,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
          FarbeModulkaestchen: "#90cec5",
          Hintergrundfarbe: "#cde8e2",
          Schriftfarbe: "#000000",
        },
      ],
      [
        {
          Semester: "2. Semester",
          Modulgruppe: "San Juan",
          Modulkuerzel: "w.BA.XX.2FinAcc-WIN.XX",
          Modulbezeichnung: "Financial and Management Accounting",
          ECTS: 6,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2FinAcc-WIN.XX.pdf",
          FarbeModulkaestchen: "#334771",
          Hintergrundfarbe: "#8f95b3",
          Schriftfarbe: "#FFFFFF",
        },
        {
          Semester: "2. Semester",
          Modulgruppe: "San Juan",
          Modulkuerzel: "w.BA.XX.2Komm-WIN.XX",
          Modulbezeichnung: "Kommunikation",
          ECTS: 6,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Komm-WIN.XX.pdf",
          FarbeModulkaestchen: "#334771",
          Hintergrundfarbe: "#8f95b3",
          Schriftfarbe: "#FFFFFF",
        },
        {
          Semester: "2. Semester",
          Modulgruppe: "Eastern Blue",
          Modulkuerzel: "w.BA.XX.2REng.XX",
          Modulbezeichnung: "Requirements Engineering",
          ECTS: 6,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2REng.XX.pdf",
          FarbeModulkaestchen: "#1e7cb8",
          Hintergrundfarbe: "#9db9dd",
          Schriftfarbe: "#000000",
        },
        {
          Semester: "2. Semester",
          Modulgruppe: "Pacific Blue",
          Modulkuerzel: "w.BA.XX.2Mathe2-WIN.XX",
          Modulbezeichnung: "Mathematik 2",
          ECTS: 3,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe2-WIN.XX.pdf",
          FarbeModulkaestchen: "#00aebe",
          Hintergrundfarbe: "#a3d7e0",
          Schriftfarbe: "#000000",
        },
        {
          Semester: "2. Semester",
          Modulgruppe: "Pacific Blue",
          Modulkuerzel: "w.BA.XX.2VWL-WIN.XX",
          Modulbezeichnung: "VWL",
          ECTS: 6,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2VWL-WIN.XX.pdf",
          FarbeModulkaestchen: "#00aebe",
          Hintergrundfarbe: "#a3d7e0",
          Schriftfarbe: "#000000",
        },
        {
          Semester: "2. Semester",
          Modulgruppe: "Half Baked",
          Modulkuerzel: "w.BA.XX.2BusE2.XX",
          Modulbezeichnung: "Business English 2",
          ECTS: 3,
          Link: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE2.XX.pdf",
          FarbeModulkaestchen: "#90cec5",
          Hintergrundfarbe: "#cde8e2",
          Schriftfarbe: "#000000",
        },
      ],
      [
        {
          Semester: "3. Semester",
          Modulgruppe: "San Juan",
          Modulbezeichnung: "Wahlpflichtmodul 1",
          ECTS: 3,
          Wahlpflichtmodul:
            "Crisis Management: Action Planning & Directing\r\nData Protection and Governance\r\nDigital Transformation in Financial Services\r\nDigitalization and Law\r\nHC-Marketing und Competence Management\r\nM&A Integrationsmanagement\r\nMachine Learning: Eine anwendungsorientierte Einführung\r\nPython-Grundlagen & Anwendung in Data Science",
          FarbeModulkaestchen: "#334771",
          Hintergrundfarbe: "#8f95b3",
          Schriftfarbe: "#FFFFFF",
        },
        {
          Semester: "3. Semester",
          Modulgruppe: "Eastern Blue",
          Modulbezeichnung: "Wahlpflichtmodul 2",
          ECTS: 3,
          Wahlpflichtmodul:
            "Data Protection and Governance\r\r\nM&A Integrationsmanagement\r\r\nHC-Marketing und Competence Management",
          FarbeModulkaestchen: "#1e7cb8",
          Hintergrundfarbe: "#9db9dd",
          Schriftfarbe: "#000000",
        },
      ],
    ],
    wahlmodule: [
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung: "Crisis Management: Action Planning & Directing",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung: "Data Protection and Governance",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung: "Digital Transformation in Financial Services",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung: "Digitalization and Law",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung: "HC-Marketing und Competence Management",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung: "M&A Integrationsmanagement",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung:
          "Machine Learning: Eine anwendungsorientierte Einführung",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung: "Python-Grundlagen & Anwendung in Data Science",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung: "Sportmarketing",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
      {
        Modulkürzel: "w.BA.XX.2DigLaw.XX",
        Modulbezeichnung: "Zertifizierung Projektmanagement",
        "Link zur Modulbeschreibung":
          "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
      },
    ],
  };

  let all = [
    {
      number: "1",
      semesterModules: [
        {
          group: "Informatik",
          color: "#1e7cb8",
          modules: [{ name: "Software Engineering 1", credits: 6 }],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            { name: "Einführung BWL", credits: 6 },
            { name: "Wissenschaftliches Schreiben", credits: 6 },
            { name: "Accounting", credits: 6 },
            { name: "Accounting", credits: 6 },
            { name: "Accounting", credits: 6 },
            { name: "Accounting", credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            { name: "Mathematik", credits: 6 },
            { name: "VWL 1", credits: 6 },
            { name: "English C1*", credits: 6 },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [
            { name: "Mathematik", credits: 6 },
            { name: "VWL 1", credits: 6 },
            { name: "English C1*", credits: 6 },
          ],
        },
      ],
    },
    {
      number: "2",
      semesterModules: [
        {
          group: "Informatik",
          color: "#1e7cb8",
          modules: [{ name: "Requirements Engineering", credits: 6 }],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            { name: "Prozessmodellierung", credits: 6 },
            { name: "Strategisches Management", credits: 6 },
            { name: "Marketing", credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            { name: "Wahlpflichtmodul", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [],
        },
      ],
    },
    {
      number: "3",
      semesterModules: [
        {
          group: "Informatik",
          color: "#1e7cb8",
          modules: [{ name: "Requirements Engineering", credits: 6 }],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            { name: "Prozessmodellierung", credits: 6 },
            { name: "Strategisches Management", credits: 6 },
            { name: "Marketing", credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            { name: "Wahlpflichtmodul", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [
            { name: "English C1*", credits: 6 },
            { name: "English C1*", credits: 6 },
            { name: "English C1*", credits: 6 },
          ],
        },
      ],
    },
  ];

  function calculateTotalCredits(semester) {
    let totalCredits = 0;
    semester.semesterModules.forEach((group) => {
      group.modules.forEach((module) => {
        totalCredits += module.credits;
      });
    });
    return totalCredits;
  }
  let Modulgruppen = [];
</script>

<div class="row test">
  <div class="col">
    <h1 class="mainTitle">
      Modultafel Bachelorstudiengang Wirtschaftsinformatik
    </h1>
    <h4 class="mb-3 secondTitle">
      Business Infromation Systems, Vollzeit, ab Herbstsemster 2021
    </h4>
  </div>
  <div class="col-2" id="zhawSML">
    <img src="images/logoSML.jpg" alt="Logo SML" width="100%" />
  </div>
</div>

<h4 class="InfoText">
  Klicken Sie auf die farbigen Kästchen um die Modulbeschreibungen anzusehen.
</h4>
<h4 class="InfoTextRot mb-4">Das ist ein Warntext</h4>

<div class="custom-container">
  {#each all as semester}
    <div class="row">
      <!-- col-md-auto statt col-sm / auto, damit die Semester nicht so breit sind-->
      <div class="col-md-auto">
        <Semester
          semesterNumber={semester.number}
          totalCredits={calculateTotalCredits(semester)}
        />
      </div>

      {#each semester.semesterModules as group}
        <!-- col-md statt col-sm -->
        <div class="col-md" style="--groupBG: {group.color}70">
          <!--70 stands for the opacity of the background color-->
          <div class="row">
            {#each group.modules as module}
              <!-- col-xl-6 statt col-sm-6 -->
              <div class="col-xl-6">
                <Modul
                  color={group.color}
                  name={module.name}
                  gruppe={group.group}
                  badge={module.credits}
                />
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<div class="row mt-3 ml-2">
  <p>* = Dieses Modul wird in englischer Sprache durchgeführt.</p>
</div>
<div class="row ml-2">
  <p>
    Drucktipps: Stellen Sie in der Druckansicht sicher, dass die Option
    "Querformat" aktiviert ist und die Seitenränder in den Seiteneigenschaften
    auf 0 gesetzt sind.
  </p>
</div>

<style>
  #zhawSML {
    display: flex;
    justify-content: end;
  }

  .test {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  /* ------- TEST (change font-size by different screen size ) ------- */

  @media (min-width: 0px) {
    .mainTitle {
      color: #000000;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  @media (min-width: 575px) {
    .mainTitle {
      color: #000000;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 0px;
    }
  }
</style>
