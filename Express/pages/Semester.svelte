<script>
  export let totalCredits;
  export let semesterNumber;
</script>

<div class="card" id="SemesterCard">
  <div class="card-body" id="SemesterCardBody">
    <div class="row mb-1">
      <div id="SemesterName">Semester {semesterNumber}</div>
    </div>
    <span id="semesterBadgeTotal">{totalCredits} ECTS</span>
  </div>
</div>

<style>
  #SemesterName {
    font-weight: 700;
    font-size: 14px;
    color: #0064a6;
  }

  #SemesterCard {
    margin-bottom: 10px;
    margin-top: 10px;
    align-items: center;
  }

  #SemesterCardBody {
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    justify-content: center;
  }

  /* #semesterBadgeTotal {
    margin-top: auto;
  } */

  @media (min-width: 0px) {
    #SemesterCard {
      height: 65px;
    }
    #SemesterName {
      font-size: 14px;
    }
    #semesterBadgeTotal {
      font-size: 11px;
    }
  }

  @media (min-width: 768px) {
    #SemesterCard {
      height: 65px;
    }
    #SemesterName {
      font-size: 8px;
    }
    #semesterBadgeTotal {
      font-size: 8px;
    }
  }

  @media (min-width: 815px) {
    #SemesterCard {
      height: 65px;
    }
    #SemesterName {
      font-size: 10px;
    }
    #semesterBadgeTotal {
      font-size: 8px;
    }
  }

  @media (min-width: 867px) {
    #SemesterCard {
      height: 50px;
    }
    #SemesterName {
      font-size: 8px;
    }
    #semesterBadgeTotal {
      font-size: 7px;
    }
  }

  @media (min-width: 1600px) {
    #SemesterCard {
      height: 75px;
    }
    #SemesterName {
      font-size: 13px;
    }
    #semesterBadgeTotal {
      font-size: 11px;
    }
  }
</style>
