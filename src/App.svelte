<script>
  import Modul from "./Modul.svelte";
  import Semester from "./Semester.svelte";

  let all = [
    {
      number: "1",
      semesterModules: [
        {
          group: "Informatik",
          modules: [
            { name: "gtre", credits: 6 },
          ],
        },
        {
          group: "Wirtschaft",
          modules: [
            { name: "geref", credits: 6 },
            { name: "defs", credits: 6 },
            { name: "hrth", credits: 6 },
          ],
        },
        {
          group: "STEM",
          modules: [
            { name: "dfds", credits: 6 },
            { name: "abikuc", credits: 6 },
            { name: "adsfdsbc", credits: 6 },
          ],
        },
      ],
    },
    {
      number: "2",
      semesterModules: [
        {
          group: "Informatik",
          modules: [
            { name: "gtre", credits: 6 },
          ],
        },
        {
          group: "Wirtschaft",
          modules: [
            { name: "geref", credits: 6 },
            { name: "defs", credits: 6 },
            { name: "hrth", credits: 6 },
          ],
        },
        {
          group: "STEM",
          modules: [
            { name: "dfds", credits: 6 },
            { name: "adsfdsbc", credits: 6 },
          ],
        },
      ],
    },
  ];
</script>


<h1>Modultafel Bachelorstudiengang Wirtschaftsinformatik</h1>

<h4 class="InfoText">Info Text</h4>
<h4 class="InfoTextRot">Info Text</h4>

<div class="container">
  {#each all as semester}
    <div class="row">
      <div class="col-sm">
        <Semester semesterNumber={semester.number} />
      </div>

      {#each semester.semesterModules as group}
      <div class="col-sm">
        <div class="row">
        {#each group.modules as module}
        <div class="col-sm-6">
          <Modul
            name={module.name}
            gruppe={group.group}
            badge={module.credits}
          /></div>
        {/each}
      </div></div>

      {/each}
    </div>
    <br>
  {/each}
</div>

<br /><br /><br /><br /><br /><br /><br /><br />
<div class="container">
  <div class="row">
    <div class="col-sm">
      <Semester semesterNumber="1" totalCredits="27" />
    </div>

    <div class="col-sm">
      <div class="row">
        <div class="col-sm">
          <Modul name="Modul 1" gruppe="Modulgruppe 1" badge="3" />
        </div>
        <div class="col-sm">
          <Modul name="Modul 2" gruppe="Modulgruppe 1" badge="6" />
        </div>
      </div>
    </div>

    <div class="col-sm">
      <div class="row">
        <div class="col-sm">
          <Modul name="Modul 3" gruppe="Modulgruppe 2" badge="3" />
        </div>
        <div class="col-sm">
          <Modul name="Modul 4" gruppe="Modulgruppe 2" badge="3" />
        </div>
      </div>
    </div>

    <div class="col-sm">
      <div class="row">
        <div class="col-sm">
          <Modul name="Modul 5" gruppe="Modulgruppe 3" badge="6" />
        </div>
        <div class="col-sm">
          <Modul name="Modul 6" gruppe="Modulgruppe 3" badge="6" />
        </div>
      </div>
    </div>
  </div>

  <!--Abstand zwischen Reihen-->
  <p />

  <div class="row">
    <div class="col-sm">
      <Semester semesterNumber="2" totalCredits="12" />
    </div>

    <div class="col-sm">
      <div class="row">
        <div class="col-sm" />
      </div>
    </div>

    <div class="col-sm">
      <div class="row">
        <div class="col-sm">
          <Modul name="Modul 3" gruppe="Modulgruppe 2" badge="6" />
        </div>
        <div class="col-sm">
          <Modul name="Modul 4" gruppe="Modulgruppe 2" badge="6" />
        </div>
      </div>
    </div>

    <div class="col-sm">
      <div class="row">
        <div class="col-sm" />
      </div>
    </div>
  </div>
</div>


<style>
  /* Füge CSS-Stile für die Module hinzu */
  .module {
    padding: 20px; /* Innenabstand für die Module */
    border: 1px solid #ccc; /* Rahmen um die Module */
    text-align: center;
  }
</style>
