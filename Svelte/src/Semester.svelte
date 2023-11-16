<script>
  export let totalCredits;
  export let semesterNumber;
</script>

<div class="card" id="semesterCard">
  <div class="card-body" id="semesterCardBody">
    <div class="row mb-1">
      <div id="semesterName">Semester {semesterNumber}</div>
    </div>
    <span id="semesterBadgeTotal">{totalCredits} ECTS</span>
  </div>
</div>

<style>
  #semesterName {
    font-weight: 700;
    font-size: 14px;
    color: #0064a6;
  }

  #semesterCard {
    margin-bottom: 10px;
    margin-top: 10px;
    align-items: center;
  }

  #semesterCardBody {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
</style>
