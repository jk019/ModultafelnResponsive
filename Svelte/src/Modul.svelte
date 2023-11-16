<script>
  export let name;
  export let shortname;
  export let is_elective; // Boolean
  export let badge;
  export let color;
  export let description;
  export let url;
  export let wahlmodule;

  // Generate a unique ID for the modal
  let modalId = `modal-${name.replace(/[\s.]+/g, "-")}`;
  let modalId2 = `modal-${name.replace(/[\s.]+/g, "-")}-2`;
</script>

<div class="card flex-fill" id="ModulCard">
  <div class="card-body" id="ModulCardBody">
    {#if !is_elective}
      <a id="Modulname" data-toggle="modal" data-target={`#${modalId}`}
        >{name}
      </a>
    {:else}
      <div class="row">
        <a id="Modulname" data-toggle="modal" data-target={`#${modalId2}`}
          >{name}
        </a>
      </div>
    {/if}
    <!-- Jeweils eine eigene row erstellt, damit die Elemente untereinander sind -->
  </div>
  <div class="card-footer" id="ModulCardFooter">
    <span class="badge" id="ModulCardBadge" style="--badgeBG: {color}"
      >{badge} ECTS</span
    >
  </div>
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
          <span class="badge col-auto w-auto" style="--badgeBG: {color}"
            >{badge} ECTS</span
          >
        </div>
        <div class="modulShortnameRow row">
          <div class="col-auto"><b>Modulkürzel: </b></div>
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
            <span class="badge col-auto w-auto" style="--badgeBG: {color}"
              >{badge} ECTS</span
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
              <span class="badge col-auto w-auto" style="--badgeBG: {color}"
                >{badge} ECTS</span
              >
            </div>
            <div class="modulShortnameRow row">
              <div class="col-auto"><b>Modulkürzel: </b></div>
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
  #ModulCardFooter {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    padding: 0px 0px 2px 0px;
    border: 0px;
  }

  #ModulCardBadge {
    margin-top: auto;
    display: inline-block;
    align-self: center;
    font-size: 10px;
  }

  #Modulname {
    font-weight: bold;
    font-size: 10px;
    color: #000000;
    hyphens: auto; /* Silbentrennung für Modulnamen aktiviert --> in index.html "lang" von "en" auf "de" gesetzt */
    line-height: 1.1;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* .Modulgruppe {
    color: var(--groupcolor);
    font-weight: 700;
    margin-bottom: 5px;
  } */

  #ModulCardBody {
    padding: 5px; /* Innenabstand für die Module */
    border: 1px solid #ccc; /* Rahmen um die Module */
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 0px;
  }

  .badge {
    padding: 3px;
  }

  #ModulCard {
    margin-top: 10px;
  }

  /* ----- Modal ----- */

  .modal-body {
    height: 60vh;
    overflow-y: auto;
  }

  .modulShortnameRow {
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

  #wahlpflichtmodulLink {
    font-size: medium;
    color: #000000;
  }

  @media (min-width: 700px) {
    #ModulCard {
      height: 65px;
    }
    #Modulname {
      font-size: 8px;
    }
    #ModulCardBadge {
      font-size: 8px;
    }
  }

  @media (min-width: 815px) {
    #ModulCard {
      height: 65px;
    }
    #Modulname {
      font-size: 8px;
    }
  }

  @media (min-width: 867px) {
    #ModulCard {
      height: 50px;
    }
    #Modulname {
      font-size: 7px;
    }
    #ModulCardBadge {
      font-size: 7px;
    }
  }

  @media (min-width: 1105px) {
    #ModulCard {
      height: 50px;
    }
  }

  /* @media (min-width: 1250px) {
    #ModulCard {
      height: 50px;
    }
  } */

  @media (min-width: 1600px) {
    #ModulCard {
      height: 75px;
    }
  }

  @media (min-width: 1700px) {
    #ModulCard {
      height: 65px;
    }
  }

  @media (min-width: 1840px) {
    #ModulCard {
      height: 75px;
    }
  }
</style>
