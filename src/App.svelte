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
          modules: [
            { name: "Software Engineering 1", credits: 6 },
          ],
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
          modules: [
            { name: "Requirements Engineering", credits: 6 },
          ],
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
            { name: "Business intelligence", credits: 6 },
          ],
        },
      ],
    },
  ];
</script>

<div class="row">
  <div class="col">
    <h1 class="mainTitle">Modultafel Bachelorstudiengang Wirtschaftsinformatik</h1>
  </div>
  <div class="col-3" id="zhawSML">
    <img src="images/logoSML.jpg" alt="Logo SML" width="60%">
  </div>
</div>

<h4 class="InfoText">Klicken Sie auf die farbigen Kästchen um die Modulbeschreibungen anzusehen.</h4>
<h4 class="InfoTextRot">Das ist ein Warntext</h4>


<div class="custom-container">
  {#each all as semester}
    <div class="row">
      <div class="col-sm">
        <br>
        <Semester semesterNumber={semester.number} totalCredits=20/>
      </div>

      {#each semester.semesterModules as group}
      <div class="col-sm" style="--groupBG: {group.color}80"> <!--80 stands for the opacity of the background color-->
        <div class="row">
        {#each group.modules as module}
        <div class="col-sm-6">
          <br>
          <Modul
            color= "{group.color}";
            name={module.name}
            gruppe={group.group}
            badge={module.credits}
          /><br></div>
        {/each}
      </div></div>

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

  #zhawSML{
    align-items: left;
  }
</style>
