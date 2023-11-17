<script>
  import Modul from "./Modul.svelte";
  import Semester from "./Semester.svelte";

  let all_oldmerge = [
    {
      number: "1",
      semesterModules: [
        {
          group: "Informatik",
          color: "#1e7cb8",
          modules: [
            {
              name: "Software Engineering 1",
              is_elective: false,
              description: "description SE1",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            {
              name: "Wahlmodul mit Funktionalität",
              shortname: "short",
              is_elective: true,
              description: "other description",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Wissenschaftliches Schreiben",
              is_elective: false,
              description: "other description",
              credits: 6,
            },
            {
              name: "Accounting",
              is_elective: false,
              description: "other description",
              credits: 6,
            },
            {
              name: "GPI",
              is_elective: false,
              description: "other description",
              credits: 6,
              url: "https://abc.com/",
            },
            {
              name: "Accounting",
              is_elective: false,
              description: "other description",
              credits: 6,
            },
            {
              name: "Accounting",
              is_elective: false,
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            {
              name: "Mathematik",
              description: "other description",
              credits: 6,
            },
            { name: "VWL 1", description: "other description", credits: 6 },
            {
              name: "English C1*",
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [
            {
              name: "Mathematik",
              description: "other description",
              credits: 6,
            },
            { name: "VWL 1", description: "other description", credits: 6 },
            {
              name: "English C1*",
              description: "other description",
              credits: 6,
            },
          ],
        },
      ],
    },
    {
      number: "2",
      semesterModules: [
        {
          group: "Informatik",
          color: "#1e7cb8",
          modules: [
            {
              name: "Requirements Engineering",
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            {
              name: "Prozessmodellierung",
              description: "other description",
              credits: 6,
            },
            {
              name: "Strategisches Management",
              description: "other description",
              credits: 6,
            },
            { name: "Marketing", description: "other description", credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            {
              name: "Wahlpflichtmodul",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [],
        },
      ],
    },
    {
      number: "3",
      semesterModules: [
        {
          group: "Informatik",
          color: "#1e7cb8",
          modules: [
            {
              name: "Requirements Engineering",
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Wirtschaft",
          color: "#6799ca",
          modules: [
            {
              name: "Prozessmodellierung",
              description: "other description",
              credits: 6,
            },
            {
              name: "Strategisches Management",
              description: "other description",
              credits: 6,
            },
            { name: "Marketing", description: "other description", credits: 6 },
          ],
        },
        {
          group: "Sonstige",
          color: "#9db9dd",
          modules: [
            {
              name: "Wahlpflichtmodul",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
            {
              name: "Business Intelligence",
              description: "other description",
              credits: 6,
            },
          ],
        },
        {
          group: "Andere MG",
          color: "#cfdbef",
          modules: [
            {
              name: "English C1*",
              description: "other description",
              credits: 6,
            },
            {
              name: "English C1*",
              description: "other description",
              credits: 6,
            },
            {
              name: "English C1*",
              description: "other description",
              credits: 4,
            },
          ],
        },
      ],
    },
  ];

  let all_old = [
    {
      number: "1",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wp.fma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Wiss. Methoden der Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WMWI.XX",
              description: "Pretty bad",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WMWI.XX.pdf",
            },
            {
              name: "Einführung BWL",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: false,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
            {
              name: "Einführung Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WIN.XX.pdf",
            },
            {
              name: "Financial and Management Accounting",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: false,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cde8e2",
          modules: [
            {
              name: "Business English 1",
              shortname: "w.BA.XX.2BusE1.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
            },
            {
              name: "Business English 1",
              shortname: "w.BA.XX.2BusE1.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
            },
          ],
        },
      ],
    },
    {
      number: "2",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Einführung BWL",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: false,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
            {
              name: "Wiss. Methoden der Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WMWI.XX",
              description: "Pretty bad",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WMWI.XX.pdf",
            },
            {
              name: "Einführung Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cde8e2",
          modules: [
            {
              name: "Business English 1",
              shortname: "w.BA.XX.2BusE1.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
            },
          ],
        },
      ],
    },
    {
      number: "3",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Einführung BWL",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: false,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
            {
              name: "Wiss. Methoden der Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WMWI.XX",
              description: "Pretty bad",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WMWI.XX.pdf",
            },
            {
              name: "Einführung Wirtschaftsinformatik",
              shortname: "w.BA.XX.2WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cde8e2",
          modules: [
            {
              name: "Business English 1",
              shortname: "w.BA.XX.2BusE1.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
            },
          ],
        },
      ],
    },
  ];

  let all = [
    {
      number: "1",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wp.fma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Einführung BWL",
              shortname: "w.BA.XX.2BWL-WIN.XX",
              is_elective: false,
              description: "Not so nice",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Einführung W. Informatik Studium",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
            {
              name: "Mathematik 1",
              shortname: "w.BA.XX.2Mathe1-WIN.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mathe1-WIN.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#67c0b5",
          modules: [
            {
              name: "Business English 1",
              shortname: "w.BA.XX.2BusE1.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BusE1.XX.pdf",
            },
          ],
        },
      ],
    },
    {
      number: "2",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [],
        },
        {
          group: "Half Baked",
          color: "#67c0b5",
          modules: [],
        },
      ],
    },
    {
      number: "3",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [],
        },
        {
          group: "Half Baked",
          color: "#67c0b5",
          modules: [],
        },
      ],
    },
    {
      number: "4",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#67c0b5",
          modules: [],
        },
      ],
    },
    {
      number: "5",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#67c0b5",
          modules: [],
        },
      ],
    },
    {
      number: "6",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Wahlpflicht-Modul 1",
              shortname: "shortname_WPM1",
              is_elective: true,
              description: "Not so nice",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
              wahlmodule: [
                {
                  name: "Wahlmodul a",
                  shortname: "wpfma",
                  description: "description a",
                  url: "https://www.zhaw.ch/de/studium/waehrend-des-studiums/verpflegung/",
                },
                {
                  name: "Wahlmodul b",
                  shortname: "wpfmb",
                  description: "description b",
                  url: "https://ethz.ch/de.html",
                },
              ],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "BA Thesis",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 15,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [],
        },
        {
          group: "Half Baked",
          color: "#67c0b5",
          modules: [
            {
              name: "Software Engineering",
              shortname: "w.BA.XX.2SWEng.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SWEng.XX.pdf",
            },
          ],
        },
      ],
    },
  ];

  function calculateTotalCredits(semester) {
    let totalCredits = 0;
    semester.semesterModules.forEach((group) => {
      group.modules.forEach((module) => {
        totalCredits += module.credits;
      });
    });
    return totalCredits;
  }

  // <------------------------------- Logik für die Berechnung der maximalen Anzahl an Modulen pro Gruppe ------------------------------------------------->

  // Initialisiere ein leeres Objekt, um die Anzahl der Module pro Gruppe zu speichern
  let moduleCountPerGroup = {};
  // Jetzt hast du ein Objekt mit Arrays, die die Anzahl der Module pro Gruppe für jedes Semester enthalten
  let maxModuleCountPerGroup = {};

  // Iteriere über alle Semester
  all.forEach((semester) => {
    // Iteriere über die Modulgruppen im aktuellen Semester
    semester.semesterModules.forEach((group) => {
      // Wenn die Gruppe noch nicht im Objekt ist, füge sie hinzu und setze die Anzahl auf 0
      if (!moduleCountPerGroup[group.group]) {
        moduleCountPerGroup[group.group] = [];
      }

      // Füge die Anzahl der Module in der aktuellen Gruppe zum Array hinzu
      moduleCountPerGroup[group.group].push(group.modules.length);
    });
  });

  // Iteriere über das Objekt und finde die höchste Anzahl von Modulen pro Gruppe

  for (let group in moduleCountPerGroup) {
    maxModuleCountPerGroup[group] = Math.max(...moduleCountPerGroup[group]);
  }

  // Gib die höchste Anzahl pro Gruppe aus
  console.log(maxModuleCountPerGroup);

  function getMaxModuleCount(groupName) {
    console.log(maxModuleCountPerGroup[groupName]);
    return maxModuleCountPerGroup[groupName] || 1; // Fallback auf 1, wenn die Gruppe nicht vorhanden ist
  }

  /* function calculateWidth(maxModuleCount) {
    return `calc(100% / ${maxModuleCount})`;
  } */
</script>

<div class="navbar" style="background-color: #0064a6;" id="zhawSmlLogoBanner">
  <img
    id="zhawSmlLogoBannerContent"
    src="images/zhaw_sml_byline_white.png"
    alt="Logo SML"
  />
</div>

<div class="row" id="headerRow">
  <div class="col-auto" id="headerColumn">
    <h1 class="mainTitle">
      Modultafel Bachelorstudiengang Wirtschaftsinformatik
    </h1>
    <h4 class="mb-3 secondTitle">
      Business Information Systems, Vollzeit, ab Herbstsemester 2021
    </h4>
  </div>
  <img
    class="col-auto"
    id="zhawSmlLogo"
    src="images/logoSML.jpg"
    alt="Logo SML"
  />
</div>

<h4 class="InfoText">
  Klicken Sie auf die farbigen Kästchen um die Modulbeschreibungen anzusehen.
</h4>
<h4 class="InfoTextRot mb-4">Das ist ein Warntext</h4>

<!-- -------- Start Modultafel -------- -->

<div class="custom-container">
  {#each all as semester}
    <div class="row">
      <div class="col-md-auto">
        <Semester
          semesterNumber={semester.number}
          totalCredits={calculateTotalCredits(semester)}
        />
      </div>

      {#each semester.semesterModules as group}
        <!-- <div class="col-{getMaxModuleCount(group.group)} test" style="--groupBG: {group.color}70"> -->
        <div class="col-sm" style="--groupBG: {group.color}50">
          <!--70 stands for the opacity of the background color-->
          <div class="row">
            {#each group.modules as module}
              <div id="CustomizedByTimo">
                <Modul
                  color={group.color}
                  name={module.name}
                  shortname={module.shortname}
                  is_elective={module.is_elective}
                  gruppe={group.group}
                  badge={module.credits}
                  description={module.description}
                  url={module.url}
                  wahlmodule={module.wahlmodule}
                />
              </div>

              <!-- {#if typeof getMaxModuleCount(group.group) !== "undefined"}
                  <div class=" col-md-{Math.ceil(12 / getMaxModuleCount(group.group))}">
                    <Modul
                      color={group.color}
                      name={module.name}
                      shortname={module.shortname}
                      is_elective={module.is_elective}
                      gruppe={group.group}
                      badge={module.credits}
                      description={module.description}
                      url={module.url}
                      wahlmodule={module.wahlmodule}
                    />
                  </div>
                {/if} -->
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<div class="row mt-3 ml-2">
  <p>* = Dieses Modul wird in englischer Sprache durchgeführt.</p>
</div>
<div class="row ml-2">
  <p>
    Drucktipps: Stellen Sie in der Druckansicht sicher, dass die Option
    "Querformat" aktiviert ist und die Seitenränder in den Seiteneigenschaften
    auf 0 gesetzt sind.
  </p>
</div>

<style>
  #CustomizedByTimo {
    display: flex;
    justify-content: center;
    width: calc(100% / var(--module-columns));

    padding-left: 5px;
    padding-right: 5px;
  }

  #headerRow {
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;
  }

  #zhawSmlLogoBanner {
    display: flex;
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
  }

  #zhawSmlLogoBannerContent {
    height: 75px;
  }

  /* Media Query: Ändert die Anzahl der Spalten für unterschiedliche Bildschirmbreiten */

  :root {
    --module-columns: 1;
  }

  @media (max-width: 767px) {
    .col-md-auto {
      padding-right: 0px !important;
    }
  }

  @media (min-width: 700px) {
    :root {
      --module-columns: 2;
    }
  }

  @media (min-width: 873px) {
    :root {
      --module-columns: 3;
    }
  }

  @media (min-width: 1300px) {
    :root {
      --module-columns: 4;
    }
  }

  /* ---- Media Queries ModulCard ---- */

  @media (min-width: 1600px) {
    #CustomizedByTimo {
      padding-left: 10px;
    }
  }

  /* ------- TEST (change font-size by different screen size ) ------- */

  @media (max-width: 768px) {
    #headerRow {
      justify-content: center;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    #headerColumn,
    .InfoText,
    .InfoTextRot {
      text-align: center;
    }
  }

  @media (min-width: 0px) {
    .mainTitle {
      color: #000000;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  @media (min-width: 0px) {
    .secondTitle {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  @media (min-width: 0px) {
    .InfoText,
    .InfoTextRot {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  @media (min-width: 1000px) {
    .mainTitle {
      color: #000000;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  @media (min-width: 1000px) {
    .secondTitle {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  @media (min-width: 1000px) {
    .InfoText,
    .InfoTextRot {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  @media (min-width: 1600px) {
    .mainTitle {
      color: #000000;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  @media (min-width: 1600px) {
    .secondTitle {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  @media (min-width: 1600px) {
    .InfoText,
    .InfoTextRot {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 0px;
    }
  }

  /* Media Queries ZHAW Logo */

  @media (max-width: 767px) {
    #zhawSmlLogo {
      display: none;
    }
  }

  @media (min-width: 768px) {
    #zhawSmlLogoBanner {
      display: none;
    }
  }

  @media (min-width: 0px) {
    #zhawSmlLogo {
      max-height: 50px;
    }
  }

  @media (min-width: 780px) {
    #zhawSmlLogo {
      max-height: 55px;
    }
  }

  @media (min-width: 900px) {
    #zhawSmlLogo {
      max-height: 63px;
    }
  }
</style>
