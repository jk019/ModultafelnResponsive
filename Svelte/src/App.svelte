<script>
  import Modul from "./Modul.svelte";
  import Semester from "./Semester.svelte";

  let all = [
    {
      number: "1",
      semesterModules: [
        {
          group: "Informatik",
          color: "#002c57",
          modules: [{ name: "Software Engineering 1", credits: 6 }],
        },
        {
          group: "Wirtschaft",
          color: "#009bac",
          modules: [
            { name: "Einführung BWL", credits: 6 },
            { name: "Wissenschaftliches Schreiben", credits: 6 },
            { name: "Accounting", credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#67c0b5",
          modules: [
            { name: "Mathematik", credits: 6 },
            { name: "VWL 1", credits: 6 },
            { name: "English C1", credits: 6 },
          ],
        },
      ],
    },
    {
      number: "2",
      semesterModules: [
        {
          group: "Informatik",
          color: "#002c57",
          modules: [{ name: "Requirements Engineering", credits: 6 }],
        },
        {
          group: "Wirtschaft",
          color: "#009bac",
          modules: [
            { name: "Prozessmodellierung", credits: 6 },
            { name: "Strategisches Management", credits: 6 },
            { name: "Marketing", credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#67c0b5",
          modules: [
            { name: "Wahlpflichtmodul", credits: 6 },
            { name: "Business Intelligence", credits: 6 },
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

<div class="row">
  <div class="col">
    <h1 class="mainTitle">
      Modultafel Bachelorstudiengang Wirtschaftsinformatik
    </h1>
  </div>
  <div class="col-3" id="zhawSML">
    <img src="images/logoSML.jpg" alt="Logo SML" width="60%" />
  </div>
</div>

<h4 class="InfoText">
  Klicken Sie auf die farbigen Kästchen um die Modulbeschreibungen anzusehen.
</h4>
<h4 class="InfoTextRot">Das ist ein Warntext</h4>

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
        <div class="col-md" style="--groupBG: {group.color}80">
          <!--80 stands for the opacity of the background color-->
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

<style>
  /* Füge CSS-Stile für die Module hinzu */
  .module {
    padding: 20px; /* Innenabstand für die Module */
    border: 1px solid #ccc; /* Rahmen um die Module */
    text-align: center;
  }

  #zhawSML {
    align-items: left;
  }
</style>
