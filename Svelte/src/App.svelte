<script>
  import Modul from "./Modul.svelte";
  import Semester from "./Semester.svelte";

  /* let all = [
    {
      number: "1",
      semesterModules: [
        {
          group: "Informatik",
          color: "#1e7cb8",
          modules: [{ name: "Software Engineering 1", description: "description SE1", credits: 6 ,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf"}],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            {
              name: "Einführung BWL",
              shortname: "short",
              is_elective: true,
              description: "other description",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                { name: "Wahlmodul xy", description: "other description", url: "https://......." },
                { name: "Wahlmodul xy", description: "other description", url: "https://......." },
              ],
            },
            { name: "Wissenschaftliches Schreiben", description: "other description",credits: 6 },
            { name: "Accounting", description: "other description",credits: 6 },
            { name: "GPI", description: "other description", credits: 6, url:"https://abc.com/" },
            { name: "Accounting", description: "other description",credits: 6 },
            { name: "Accounting", description: "other description",credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            { name: "Mathematik", description: "other description",credits: 6 },
            { name: "VWL 1", description: "other description",credits: 6 },
            { name: "English C1*", description: "other description",credits: 6 },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [
            { name: "Mathematik", description: "other description",credits: 6 },
            { name: "VWL 1", description: "other description",credits: 6 },
            { name: "English C1*", description: "other description",credits: 6 },
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
          modules: [],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            { name: "Prozessmodellierung", description: "other description",credits: 6 },
            { name: "Strategisches Management", description: "other description",credits: 6 },
            { name: "Marketing", description: "other description",credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            { name: "Wahlpflichtmodul", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
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
          modules: [{ name: "Requirements Engineering", description: "other description",credits: 6 }],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            { name: "Prozessmodellierung", description: "other description",credits: 6 },
            { name: "Strategisches Management", description: "other description",credits: 6 },
            { name: "Marketing", description: "other description",credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            { name: "Wahlpflichtmodul", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
            { name: "Business Intelligence", description: "other description",credits: 6 },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [
            { name: "English C1*", description: "other description",credits: 6 },
            { name: "English C1*", description: "other description",credits: 6 },
            { name: "English C1*", description: "other description",credits: 4 },
          ],
        },
      ],
    },
  ]; */

  let all = [
    {
      number: "1",
      semesterModules: [
        {
          group: "San Juan",
          color: "#8f95b3",
          modules: [
            {
              name: "Einführung BWL",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul xy",
                  description: "other description",
                  url: "https://.......",
                },
                {
                  name: "Wahlmodul xy",
                  description: "other description",
                  url: "https://.......",
                },
              ],
            },
            {
              name: "Wissenschaftliche Methoden der Wirtschaftsinformatik",
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
          color: "#9db9dd",
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
          color: "#a3d7e0",
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
      number: "2",
      semesterModules: [
        {
          group: "San Juan",
          color: "#8f95b3",
          modules: [
            {
              name: "Financial and Management Accounting",
              shortname: "w.BA.XX.2FinAcc-WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2FinAcc-WIN.XX.pdf",
            },
            {
              name: "Kommunikation",
              shortname: "w.BA.XX.2Komm-WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Komm-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Requirements Engineering",
              shortname: "w.BA.XX.2REng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2REng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#a3d7e0",
          modules: [
            {
              name: "Mathematik 2",
              shortname: "w.BA.XX.2Mathe2-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe2-WIN.XX.pdf",
            },
            {
              name: "VWL",
              shortname: "w.BA.XX.2VWL-WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2VWL-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cde8e2",
          modules: [
            {
              name: "Business English 2",
              shortname: "w.BA.XX.2BusE2.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE2.XX.pdf",
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
          color: "#8f95b3",
          modules: [
            {
              name: "Wahlpflichtmodul 1",
              credits: 3,
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Wahlpflichtmodul 2",
              credits: 3,
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#a3d7e0",
          modules: [],
        },
        {
          group: "Half Baked",
          color: "#cde8e2",
          modules: [],
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
                  shortname={module.shortname}
                  gruppe={group.group}
                  badge={module.credits}
                  description={module.description}
                  url={module.url}
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
