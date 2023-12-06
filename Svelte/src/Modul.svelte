<script>
  export let name;
  export let shortname;
  export let is_elective; // Boolean
  export let badge;
  export let color;
  export let description;
  export let url;
  export let wahlmodule;

  function sanitizeName(name) {
    return name
      .replace(/[*&\s]+/g, "-") // Replace *, &, and spaces with -
      .replace(/[\s.]+/g, "-"); // Replace spaces and periods with -
    // Add more replacements as needed
  }

  // Generate unique IDs for the modals
  let modalId = `modal-${sanitizeName(name)}`;
  let modalId2 = `modal-${sanitizeName(name)}-2`;
</script>

<div class="card flex-fill" id="ModulCard" style="--moduleBG: {color}">
  <div class="card-body" id="ModulCardBody">
    {#if !is_elective}
      <a id="Modulname" data-toggle="modal" data-target={`#${modalId}`}
        >{name}
      </a>
      <p class="modulCardECTS">{badge} ECTS-Credits</p>
    {:else}
      <div class="row">
        <a id="Modulname" data-toggle="modal" data-target={`#${modalId2}`}
          >{name}
        </a>
        <p class="modulCardECTS">{badge} ECTS-Credits</p>
      </div>
    {/if}
    <!-- Jeweils eine eigene row erstellt, damit die Elemente untereinander sind -->
  </div>
  <!-- <div class="card-footer" id="ModulCardFooter" style="--moduleBG: {color}">
    {badge} ECTS
  </div> -->
</div>

<!-- Modal -->
<div
  class="modal fade"
  id={modalId}
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <div class="row modalHeaderRow justify-content-between">
          <h5 class="modal-title col-auto" id="exampleModalLongTitle">
            {name}
          </h5>
          <span
            class="badge col-auto w-auto badgeModal"
            style="--badgeBG: {color}">{badge} ECTS</span
          >
        </div>
        <div class="modalShortnameRow row">
          <div class="col-auto modulkuerzelCol"><b>Modulkürzel: </b></div>
          <div class="col-auto Shortname text-right">
            {shortname}
          </div>
        </div>
      </div>

      <div class="modal-body">
        <h5>Beschreibung des Moduls:</h5>
        {description}
      </div>
      <div class="modal-footer">
        <form action={url} method="get" target="_blank">
          <button type="submit" class="btn btn-primary"
            >Download Modulbeschreibung</button
          >
        </form>
        <button type="button" class="btn btn-secondary" data-dismiss="modal"
          >Schliessen</button
        >
      </div>
    </div>
  </div>
</div>

<!--  MODAL - if is_elective -->

{#if is_elective}
  <div
    class="modal fade"
    id={modalId2}
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="row justify-content-between modalHeaderRow">
            <h5 class="modal-title col-auto" id="exampleModalLongTitle">
              {name}
            </h5>
            <span
              class="badge col-auto w-auto badgeModal"
              style="--badgeBG: {color}">{badge} ECTS</span
            >
          </div>
        </div>
        <div class="modal-body">
          <h5>Verfügbare Module:</h5>
          <ul>
            {#each wahlmodule as modul}
              <li>
                <a
                  id="wahlpflichtmodulLink"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target={`#${modul.shortname.replace(/\./g, "-")}`}
                  >{modul.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Schliessen</button
          >
        </div>
      </div>
    </div>
  </div>

  <!--Modal in the Modal-->

  {#each wahlmodule as modul}
    <div
      class="modal fade"
      id={modul.shortname.replace(/\./g, "-")}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="row modalHeaderRow">
              <h5 class="modal-title col-auto" id="exampleModalLongTitle">
                {modul.name}
              </h5>
              <span
                class="badge col-auto w-auto badgeModal"
                style="--badgeBG: {color}">{badge} ECTS</span
              >
            </div>
            <div class="modalShortnameRow row">
              <div class="col-auto modulkuerzelCol"><b>Modulkürzel: </b></div>
              <div class="col-auto Shortname text-right">
                {modul.shortname}
              </div>
            </div>
          </div>
          <div class="modal-body">
            <h5>Beschreibung des Moduls:</h5>
            {modul.description}
          </div>
          <div class="modal-footer">
            <form action={modul.url} method="get" target="_blank">
              <button type="submit" class="btn btn-primary"
                >Download Modulbeschreibung</button
              >
            </form>
            <button
              data-target={`#${modalId2}`}
              data-toggle="modal"
              data-dismiss="modal"
              class="btn btn-secondary"
              >Zurück
            </button>
          </div>
        </div>
      </div>
    </div>
  {/each}
{/if}

<style>
  /* #ModulCardFooter {
    display: flex;
    justify-content: center;
    padding: 0px 0px 2px 0px;
    border: 0px;
    background: var(--moduleBG);
  } */

  /* #ModulCardBadge {
    margin-top: auto;
    display: inline-block;
    align-self: center;
    font-size: 10px;
  } */

  #Modulname {
    font-weight: bold;
    font-size: 10px;
    color: #000000;
    hyphens: auto; /* Silbentrennung für Modulnamen aktiviert --> in index.html "lang" von "en" auf "de" gesetzt */
    line-height: 1.1;
    padding: 0px !important;

    /* display: flex;
    justify-content: center;
    align-items: center; */
  }

  #ModulCardBody {
    padding: 5px; /* Innenabstand für die Module */
    text-align: left;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    border: 0px;
  }

  #ModulCard {
    margin-top: 5px;
    background: var(--moduleBG);
  }

  .modulCardECTS {
    font-size: 13px;
    padding: 0px !important;
  }

  .badgeModal {
    padding: 5px !important;
  }

  .badge {
    padding: 3px;
  }

  #wahlpflichtmodulLink {
    font-size: medium;
    color: #000000;
  }

  #exampleModalLongTitle {
    padding-left: 0px;
  }

  .modulkuerzelCol {
    padding-left: 0px !important;
  }

  /* ----- Modal ----- */

  .modal-body {
    height: 60vh;
    overflow-y: auto;
  }

  .modalShortnameRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    width: 100%;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    align-items: center;
    flex-wrap: wrap;
  }

  .modalHeaderRow {
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .Shortname {
    padding-right: 0px;
  }

  /* ----- Media Queries ----- */

  @media (min-width: 0px) {
    #ModulCard {
      height: 80px;
    }
    #Modulname {
      font-size: 14px;
    }
    .modulCardECTS {
      font-size: 13px;
    }
  }

  @media (min-width: 768px) {
    #ModulCard {
      height: 80px;
    }
    #Modulname {
      font-size: 14px;
    }
    .modulCardECTS {
      font-size: 13px;
    }
  }

  @media (min-width: 992px) {
    #ModulCard {
      height: 80px;
    }
    #Modulname {
      font-size: 13px;
    }
    .modulCardECTS {
      font-size: 12px;
    }
  }
</style>
