







<!-- ---- Wird nicht mehr gebraucht :) ---- -->


















<script>
  import Modul from "./Modul.svelte";

  export let name;
  export let gruppe;
  export let badge;
  export let color;
  export let wahlmodule;

  // Generate a unique ID for the modal
  let modalId = `modal-${name.replace(/\s+/g, "-")}`;
</script>

<div class="card">
  <!-- <img src="images/image.png" class="card-img-top" width="300" alt="" /> -->
  <div class="card-body" id="ModulCardBody">
    <div class="row">
      <a
        class="Modulname"
        id="Modulname"
        data-toggle="modal"
        data-target={`#${modalId}`}
        >{name}
      </a>
    </div>
    <!-- Jeweils eine eigene row erstellt, damit die Elemente untereinander sind -->
    <span class="badge" id="ModulCardBadge" style="--badgeBG: {color}">{badge} ECTS</span>
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
        <div class="row justify-content-between modalHeaderRow">
          <h5 class="modal-title col-auto" id="exampleModalLongTitle">{name}</h5>
          <span class="badge col-auto w-auto" style="--badgeBG: {color}">{badge} ECTS</span>
        </div>
      </div>
      <div class="modal-body">
        <h5>Verfügbare Module:</h5>
        {#each wahlmodule as modul}
          <div class="col">
            <button type="button" class="btn btn-light">{modul.name}</button>
            <a
              class="Modulname"
              id="Modulname"
              data-toggle="modal"
              data-target={`#${modul.shortname}`}
              >{modul.name}
            </a>
          </div>

          <!--Modal in the Modal-->
          <div
            class="modal fade"
            id={modul.shortname}
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="col-6 p-0">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      {modul.name}
                    </h5>
                  </div>
                  <div class="col">
                    <span class="badge" style="--badgeBG: {color}"
                      >{badge} ECTS</span
                    >
                  </div>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
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
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal">zurück</button
                  >
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"
          >Schliessen</button
        >
      </div>
    </div>
  </div>
</div>

<style>
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
    padding-bottom: 2px;
    hyphens: auto; /* Silbentrennung für Modulnamen aktiviert --> in index.html "lang" von "en" auf "de" gesetzt */
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
  }

  .badge {
    padding: 5px;
  }

  .card {
    min-height: 70px;
    max-width: 115px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .modal-body {
    height: 60vh;
    overflow-y: auto;
  }
  
  /* ----- Modal ----- */

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
    width: 100%;
  }
</style>
