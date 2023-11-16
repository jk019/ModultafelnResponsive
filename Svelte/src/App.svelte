<script>
  import Modul from "./Modul.svelte";
  import Semester from "./Semester.svelte";
  import Wahlmodul from "./Wahlmodul.svelte";

  let all_oldmerge = [
    {
      number: "1",
      semesterModules: [
        {
          group: "Informatik",
          color: "#1e7cb8",
          modules: [
            {
              name: "Software Engineering 1",
              is_elective: false,
              description: "description SE1",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            {
              name: "Wahlmodul mit Funktionalität",
              shortname: "short",
              is_elective: true,
              description: "other description",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Wissenschaftliches Schreiben",
              is_elective: false,
              description: "other description",
              credits: 6,
            },
            {
              name: "Accounting",
              is_elective: false,
              description: "other description",
              credits: 6,
            },
            {
              name: "GPI",
              is_elective: false,
              description: "other description",
              credits: 6,
              url: "https://abc.com/",
            },
            {
              name: "Accounting",
              is_elective: false,
              description: "other description",
              credits: 6,
            },
            {
              name: "Accounting",
              is_elective: false,
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            {
              name: "Mathematik",
              description: "other description",
              credits: 6,
            },
            { name: "VWL 1", description: "other description", credits: 6 },
            {
              name: "English C1*",
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [
            {
              name: "Mathematik",
              description: "other description",
              credits: 6,
            },
            { name: "VWL 1", description: "other description", credits: 6 },
            {
              name: "English C1*",
              description: "other description",
              credits: 6,
            },
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
          modules: [
            {
              name: "Requirements Engineering",
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            {
              name: "Prozessmodellierung",
              description: "other description",
              credits: 6,
            },
            {
              name: "Strategisches Management",
              description: "other description",
              credits: 6,
            },
            { name: "Marketing", description: "other description", credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            {
              name: "Wahlpflichtmodul",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
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
          modules: [
            {
              name: "Requirements Engineering",
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            {
              name: "Prozessmodellierung",
              description: "other description",
              credits: 6,
            },
            {
              name: "Strategisches Management",
              description: "other description",
              credits: 6,
            },
            { name: "Marketing", description: "other description", credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            {
              name: "Wahlpflichtmodul",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [
            {
              name: "English C1*",
              description: "other description",
              credits: 6,
            },
            {
              name: "English C1*",
              description: "other description",
              credits: 6,
            },
            {
              name: "English C1*",
              description: "other description",
              credits: 4,
            },
          ],
        },
      ],
    },
  ];

  let all = [
    {
      number: "1",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wp.fma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Wiss. Methoden der Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WMWI.XX",
              description: "Pretty bad",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WMWI.XX.pdf",
            },
            {
              name: "Einführung BWL",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: false,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
            {
              name: "Einführung Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WIN.XX.pdf",
            },
            {
              name: "Financial and Management Accounting",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: false,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cde8e2",
          modules: [
            {
              name: "Business English 1",
              shortname: "w.BA.XX.2BusE1.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
            },
            {
              name: "Business English 1",
              shortname: "w.BA.XX.2BusE1.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
            },
          ],
        },
      ],
    },
    {
      number: "2",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Einführung BWL",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: false,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
            {
              name: "Wiss. Methoden der Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WMWI.XX",
              description: "Pretty bad",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WMWI.XX.pdf",
            },
            {
              name: "Einführung Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cde8e2",
          modules: [
            {
              name: "Business English 1",
              shortname: "w.BA.XX.2BusE1.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
            },
          ],
        },
      ],
    },
    {
      number: "3",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Einführung BWL",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: false,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
            {
              name: "Wiss. Methoden der Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WMWI.XX",
              description: "Pretty bad",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WMWI.XX.pdf",
            },
            {
              name: "Einführung Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cde8e2",
          modules: [
            {
              name: "Business English 1",
              shortname: "w.BA.XX.2BusE1.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
            },
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
</script>

<div class="row test">
  <div class="col">
    <h1 class="mainTitle">
      Modultafel Bachelorstudiengang Wirtschaftsinformatik
    </h1>
    <h4 class="mb-3 secondTitle">
      Business Information Systems, Vollzeit, ab Herbstsemester 2021
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

<!-- -------- Start Modultafel -------- -->

<div class="custom-container">
  {#each all as semester}
    <div class="row">
      <!-- col-md-auto statt col-sm-auto, damit die Semester nicht so breit sind-->
      <div class="col-md-auto">
        <Semester
          semesterNumber={semester.number}
          totalCredits={calculateTotalCredits(semester)}
        />
      </div>

      {#each semester.semesterModules as group}
        <div class="col-sm" style="--groupBG: {group.color}70">
          <!--70 stands for the opacity of the background color-->
          <div class="row">
            {#each group.modules as module}
              <div id="CustomizedByTimo">
                <!-- if Elective, then other logic-->
                <!-- {#if module.is_elective}
                  <Wahlmodul
                    color={group.color}
                    name={module.name}
                    gruppe={group.group}
                    badge={module.credits}
                    description="jetzt ist es ein Wahlmodul"
                    url={module.url}
                    wahlmodule = {module.wahlmodule}
                  />
                {:else} -->
                <Modul
                  color={group.color}
                  name={module.name}
                  shortname={module.shortname}
                  is_elective={module.is_elective}
                  gruppe={group.group}
                  badge={module.credits}
                  description={module.description}
                  url={module.url}
                  wahlmodule={module.wahlmodule}
                />
                <!-- {/if} -->
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

  #CustomizedByTimo {
    display: flex;
    justify-content: center;
    width: calc(100% / var(--module-columns));
  }

  :root {
    --module-columns: 1;
  }

  /* Media Query: Ändert die Anzahl der Spalten für unterschiedliche Bildschirmbreiten */

  @media (max-width: 767px) {
    .col-md-auto {
      padding-right: 0px !important;
    }
  }

  @media (min-width: 700px) {
    :root {
      --module-columns: 2;
    }
  }

  @media (min-width: 1105px) {
    :root {
      --module-columns: 3;
    }
  }

  @media (min-width: 1840px) {
    :root {
      --module-columns: 4;
    }
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
