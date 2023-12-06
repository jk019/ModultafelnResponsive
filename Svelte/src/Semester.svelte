<script>
  export let totalCredits;
  export let semesterNumber;
</script>

<div class="card" id="SemesterCard">
  <div class="card-body" id="SemesterCardBody">
    <p class="SemesterName">Semester {semesterNumber}</p>
    <p class="SemesterName" id="semesterBadgeTotal">{totalCredits} ECTS-Credits</p>
  </div>
</div>

<style>
  .card-body {
    display: flex;
    align-items: left!important;
  }

  .SemesterName {
    font-weight: 700;
    font-size: 14px;
    color: white;
    text-align: left!important;
    margin-bottom: 0px!important;
  }

  #SemesterCard {
    margin-top: 5px!important;
    margin-bottom: 0px!important;
    background: #0064a6;
  }

  #SemesterCardBody {
    padding: 5px; /* Innenabstand für die Module */
    text-align: left!important;
    display: flex;
    flex-direction: column;
    justify-content: left;
    border: 0px;
  }

  #semesterBadgeTotal {
    font-weight: 500;
    font-size: 13px;
  }

  /* ----- Media Queries ----- */

  @media (min-width: 0px) {
    #SemesterCard {
      height: 63px;
    }
    .SemesterName {
      font-size: 14px;
    }
    #semesterBadgeTotal {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    #SemesterCard {
      height: 65px;
    }
    .SemesterName {
      font-size: 14px;
    }
    #semesterBadgeTotal {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) {
    #SemesterCard {
      height: 80px;
    }
    .SemesterName {
      font-size: 11px;
    }
    #semesterBadgeTotal {
      font-size: 11px;
    }
  }
</style>
