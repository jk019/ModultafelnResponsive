<script>
  export let totalCredits;
  export let semesterNumber;
</script>

<div class="card">
  <!-- display: inline-block, damit die card auf den content getrimmt werden -->
  <div class="card-body">
    <div class="row">
      <div id="text">Semester {semesterNumber}</div>
    </div>
    <span class="badgeTotal">{totalCredits} ECTS</span>
  </div>
</div>

<style>
  #text {
    font-weight: 700;
    color: #0064a6;
  }

  .card {
    display: inline-block;
    margin-bottom: 10px;
  }
</style>
