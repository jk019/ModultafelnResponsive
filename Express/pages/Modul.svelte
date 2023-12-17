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
      <a id="Modulname" data-bs-toggle="modal" data-bs-target={`#${modalId}`}
        >{name}
      </a>
      <p class="modulCardECTS">{badge} ECTS-Credits</p>
    {:else}
      <div class="row">
        <a id="Modulname" data-bs-toggle="modal" data-bs-target={`#${modalId2}`}
          >{name}
        </a>
        <p class="modulCardECTS">{badge} ECTS-Credits</p>
      </div>
    {/if}
    <!-- Jeweils eine eigene row erstellt, damit die Elemente untereinander sind -->
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
    <div class="modal-content" style="border: 10px solid {color};">
      <div style="text-align: right;">
        <button
          type="button"
          class="btn custom-close m-1"
          aria-label="Close"
          data-bs-dismiss="modal"
          ><i
            class="bi bi-x-circle-fill"
            style="font-size: 2rem; color: {color};"
          ></i></button
        >
      </div>
      <div class="modal-body">
        <div class="title">
          <h3 class="modal-title col-auto" id="exampleModalLongTitle">
            {name}
          </h3>
        </div>
        <div>
          <p>/<span class="tab"></span>ECTS-Credits: {badge}</p>
          <p>/<span class="tab"></span>{shortname}</p>
          <p>
            /<span class="tab"></span><a href={url} method="get" target="_blank"
              >Details zu diesem Modul</a
            >
          </p>
        </div>

        {#if description && description.trim() !== ""}
          {description}
        {:else}
          <h5>Keine Modulbeschreibung vorhanden.</h5>
        {/if}
      </div>
    </div>
  </div>
</div>

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
      <div class="modal-content" style="border: 10px solid {color};">
        <div style="text-align: right;">
          <button
            type="button"
            class="btn m-1"
            aria-label="Close"
            data-bs-dismiss="modal"
            ><i
              class="bi bi-x-circle-fill"
              style="font-size: 2rem; color: {color};"
            ></i></button
          >
        </div>
        <div class="modal-body">
          <div class="title">
            <h3 class="modal-title col-auto" id="exampleModalLongTitle">
              {name}
            </h3>
          </div>
          <div>
            <p>/<span class="tab"></span>ECTS-Credits: {badge}</p>
          </div>
          <p>/<span class="tab"></span>Verfügbare Module:</p>
          <ul>
            {#each wahlmodule as modul}
              <li>
                <a
                  id="wahlpflichtmodulLink"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  data-bs-target={`#${modul.shortname.replace(/\./g, "-")}`}
                  >{modul.name}
                </a>
              </li>
            {/each}
          </ul>
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
        <div class="modal-content" style="border: 10px solid {color};">
          <div class="row">
            <div class="col" style="text-align: left;">
              <button
                type="button"
                class="btn m-1"
                data-bs-target={`#${modalId2}`}
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                style="color: {color}"
                ><i
                  class="bi bi-arrow-left-circle-fill"
                  style="font-size: 2rem; color: {color};"
                ></i></button
              >
            </div>
            <div class="col" style="text-align: right;">
              <button
                type="button"
                class="btn m-1"
                aria-label="Close"
                data-bs-dismiss="modal"
                ><i
                  class="bi bi-x-circle-fill"
                  style="font-size: 2rem; color: {color};"
                ></i></button
              >
            </div>
          </div>
          <div class="modal-body">
            <div class="title">
              <h3 class="modal-title col-auto" id="exampleModalLongTitle">
                {modul.name}
              </h3>
            </div>
            <div>
              <p>/<span class="tab"></span>ECTS-Credits: {badge}</p>
              <p>/<span class="tab"></span>{modul.shortname}</p>
              <p>
                /<span class="tab"></span><a
                  href={modul.url}
                  method="get"
                  target="_blank">Details zu diesem Modul</a
                >
              </p>
            </div>

            {#if modul.description && modul.description.trim() !== ""}
              {modul.description}
            {:else}
              <h5>Keine Modulbeschreibung vorhanden.</h5>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
{/if}

<style>
  #Modulname {
    font-weight: bold;
    font-size: 10px;
    color: #000000;
    hyphens: auto; /* Silbentrennung für Modulnamen aktiviert --> in index.html "lang" von "en" auf "de" gesetzt */
    line-height: 1.1;
    padding: 0px !important;
  }

  #ModulCardBody {
    padding: 8px; /* Innenabstand für die Module */
    text-align: left;
    display: flex;
    flex-direction: column;
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

  #wahlpflichtmodulLink {
    font-size: medium;
    color: #000000;
  }

  #exampleModalLongTitle {
    padding-left: 0px;
  }

  /* ----- Modal ----- */

  .modal-body {
    height: 60vh;
    overflow-y: auto;
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
      font-size: 15px;
    }
    .modulCardECTS {
      font-size: 14px;
    }
  }

  .tab {
    display: inline-block;
    margin-left: 40px;
  }
  .title {
    padding-bottom: 15px;
  }
</style>
