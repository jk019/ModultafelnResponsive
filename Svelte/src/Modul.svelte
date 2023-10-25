<script>
  export let name;
  export let gruppe;
  export let badge;
  export let color;
</script>

<div class="card">
  <!-- <img src="images/image.png" class="card-img-top" width="300" alt="" /> -->
  <div class="card-body d-flex flex-column" id="ModulBody">
    <div class="row">
      <p style="--groupcolor: {color}" class="Modulgruppe">{gruppe}</p>
    </div>
    <div class="row">
      <a
        class="Modulname"
        id="Modulname"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        >{name}
      </a>
    </div>
    <!-- Jeweils eine eigene row erstellt, damit die Elemente untereinander sind -->
    <span class="badge mt-auto" style="--badgeBG: {color}">{badge} ECTS</span>
  </div>
</div>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModalCenter"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <div class="col">
          <h5 class="modal-title" id="exampleModalLongTitle">{name}</h5>
        </div>
        <div class="col">
          <span class="badge test" style="--badgeBG: {color}">{badge} ECTS</span>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim
        tortor at. Nec ultrices dui sapien eget mi proin sed. Lacus vel facilisis
        volutpat est velit egestas dui. Tristique senectus et netus et malesuada
        fames. Egestas sed sed risus pretium quam vulputate. Semper feugiat nibh
        sed pulvinar proin gravida hendrerit lectus a. Eros donec ac odio tempor
        orci dapibus ultrices in iaculis. Ut sem viverra aliquet eget sit amet tellus
        cras adipiscing. Hendrerit gravida rutrum quisque non. Ut lectus arcu bibendum
        at varius vel pharetra vel. Elit duis tristique sollicitudin nibh. Vulputate
        ut pharetra sit amet aliquam id diam maecenas. Nibh nisl condimentum id venenatis
        a condimentum vitae sapien pellentesque. Integer eget aliquet nibh praesent
        tristique magna sit amet purus. Ultrices vitae auctor eu augue ut lectus
        arcu bibendum at. Vulputate dignissim suspendisse in est. Amet porttitor
        eget dolor morbi non. Dui ut ornare lectus sit amet est placerat in. In pellentesque
        massa placerat duis ultricies lacus sed turpis. Sagittis orci a scelerisque
        purus semper eget duis at tellus. Parturient montes nascetur ridiculus mus
        mauris vitae ultricies leo. Odio aenean sed adipiscing diam donec adipiscing.
        Vel turpis nunc eget lorem dolor sed. Arcu cursus euismod quis viverra nibh
        cras pulvinar. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Pretium
        nibh ipsum consequat nisl vel pretium. Quisque sagittis purus sit amet volutpat
        consequat mauris nunc congue. Enim nunc faucibus a pellentesque sit amet.
        Eget arcu dictum varius duis at consectetur lorem donec. Aliquam faucibus
        purus in massa tempor nec feugiat. Eu lobortis elementum nibh tellus molestie
        nunc non blandit. Non quam lacus suspendisse faucibus interdum. Enim nunc
        faucibus a pellentesque sit amet porttitor eget. Mattis rhoncus urna neque
        viverra justo nec ultrices.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Download PDF</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal"
          >Close</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  #Modulname {
    font-weight: 200;
    color: black;

    /* display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch; */

    padding-bottom: 10px;
  }

  .Modulgruppe {
    color: var(--groupcolor);
    font-weight: 800;
  }

  #ModulBody {
    padding: 20px; /* Innenabstand für die Module */
    border: 1px solid #ccc; /* Rahmen um die Module */
    text-align: center;
  }

  .badge {
    padding: 5px;
  }

  .card {
    min-height: 163.75px;
    /* min-width: 185px; */
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
