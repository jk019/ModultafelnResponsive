<script>
  export let totalCredits;
  export let semesterNumber;
</script>

<div class="card">
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
    font-size: 15px;
    color: #0064a6;
  }

  .card {
    margin-bottom: 10px;
    margin-top: 20px;
    align-items: center;
  }
</style>
