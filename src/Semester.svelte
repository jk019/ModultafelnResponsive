<script>
    export let totalCredits;
    export let semesterNumber;
</script>

<div class="card">
  <div class="card-body" >
    <div id="text">Semester {semesterNumber}</div>
    <span class="badgeTotal">{totalCredits} ECTS</span>
  </div>
</div>

<style>
    #text{
        font-weight: 700;
        color: #0064A6;
    }
</style>