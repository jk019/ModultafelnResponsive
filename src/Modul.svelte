
<script>
    export let name;
    export let gruppe;
    export let badge;
</script>

<div class="card" >
 <!-- <img src="images/image.png" class="card-img-top" width="300" alt="" /> -->
  <div class="card-body" id="ModulBody">
    <p class="Modulgruppe">{gruppe}</p>
    <p class="Modulname" id="Modulname">{name}</p>
    <span class="badge">{badge} ECTS</span>
  </div>
</div>

<style>
  #Modulname{
    font-weight: 200;
  }

  #ModulBody {
    padding: 20px; /* Innenabstand für die Module */
    border: 1px solid #ccc; /* Rahmen um die Module */
    text-align: center;
  }
</style>
