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
      font-size: 9px;
    }
    #semesterBadgeTotal {
      font-size: 9px;
    }
  }

  @media (min-width: 867px) {
    #SemesterCard {
      height: 70px;
    }
    .SemesterName {
      font-size: 9.5px;
    }
    #semesterBadgeTotal {
      font-size: 9.5px;
    }
  }

  @media (min-width: 1000px) {
    #SemesterCard {
      height: 75px;
    }
    .SemesterName {
      font-size: 10px;
    }
    #semesterBadgeTotal {
      font-size: 10px;
    }
  }

  @media (min-width: 1103px) {
    #SemesterCard {
      height: 70px;
    }
  }

  @media (min-width: 1600px) {
    #SemesterCard {
      height: 50px;
    }
    .SemesterName {
      font-size: 13px;
    }
    #semesterBadgeTotal {
      font-size: 13px;
    }
  }

  @media (min-width: 1700px) {
    #SemesterCard {
      height: 65px;
    }
  }

  @media (min-width: 1840px) {
    #SemesterCard {
      height: 75px;
    }
  }
</style>
