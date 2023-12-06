<script>
  import Modul from "./Modul.svelte";
  import Semester from "./Semester.svelte";

  let all = [
    {
      number: "1",
      semesterModules: [
        {
          group: "San Juan",
          color: "#1e7cb8",
          modules: [
            {
              name: "Einführung BWL",
              shortname: "w.BA.XX.3BWL-WIN.XX",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3BWL-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Wissenschaftliches Schreiben",
              shortname: "w.BA.XX.3WS-WIN.XX",
              description:
                "In diesem Modul geht es darum, die Studierenden an das wissenschaftlichen Arbeiten\r\n(Grundlagen) heranzuführen und sie gleichzeitig in das wissenschaftliche Schreiben\r\neinzuführen. Zudem werden mündliche Kommunikationsfähigkeiten trainiert, im\r\nSpeziellen die Auftrittskompetenz.",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3WS-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Einführung in das Wirtschaftsinformatik-Studium",
              shortname: "w.BA.XX.3WINS-WIN.XX",
              description:
                "Das Modul Einführung in das Wirtschaftsinformatik-Studium beschäftigt sich mit Lern-\r\nund Arbeitstechniken für das erfolgreiche Wirtschaftsinformatik-Studium. Neben\r\nfachlichen Kompetenzen in diesen Bereichen, werden zusätzlich überfachliche\r\nKompetenzen (Methoden-, Sozial- und Selbstkompetenz) gefördert (z.B. erfolgreich im\r\nEinzelsetting und in kleinen Gruppen arbeiten). Dazu werden Grundlagen und ein\r\nganzheitliches Verständnis zentraler Wirtschaftsinformatik-Gesamtzusammenhänge\r\nvermittelt und von den Studierenden erarbeitet. Die Leistungsüberprüfung erfolgt anhand\r\nverschiedener Leistungsnachweise.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3WINS-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Software Engineering 1",
              shortname: "w.BA.XX.2SWEng.XX",
              description:
                "In diesem Modul werden die Grundlagen des systematischen und objektorientierten\r\nProgrammierens vermittelt. Die Studierenden werden in der algorithmischen und der\r\nobjektorientierten Denkweise geschult und lernen den Umgang mit Prozess-, Text-,\r\nAudio-, Bild- und Zeitreihendaten. Zum erworbenen Wissen und zur erlernten Denkart\r\nkommt die Fähigkeit zur konkreten Anwendung hinzu. Das Hauptziel ist das Erlernen\r\nvon prozeduralem und objektorientiertem Programmieren sowie der Modellierung von\r\nSoftware. Die Vorlesung vermittelt Aspekte des Software Engineering, welche sowohl für\r\nBusiness Information Systems wie auch für Data-Science relevant sind.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3SE1-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Wirtschaftsrecht",
              shortname: "w.BA.XX.3WR-WIN.XX",
              description:
                "Die Studierenden erhalten Einblick in die rechtlichen Grundlagen des Wirtschaftsrechts\r\nmit Bezug zur IT-Branche. Mit ausgewählten Rechtsthemen, die im Informatikkontext an\r\nder Tagesordnung sind, wie z.B. IT-Projektverträge, Garantie, Haftung, Lizenzen,\r\nSoftwareschutz, Datenschutz, Compliance, Gesellschaftsgründung u.a. Details im\r\nSemesterprogramm. Mittels praxisorientierten Checklisten, Templates, Übungen und\r\nFallbearbeitungen lernen die Studierenden Projektvorhaben, Risiken und Probleme auch\r\nrechtlich einzuordnen. Sie sind gestützt darauf fähig, praxisorientierte Fälle methodisch\r\nkorrekt zu lösen sowie mithilfe von Checklisten Verträge zu erstellen und/oder auf ihre\r\nVollständigkeit zu überprüfen. Sie kennen die wichtigsten Prinzipien der betreffenden\r\nRechtsgebiete und können aus einem unbekannten oder neuen Gesetz Anforderungen\r\nfür die Praxis ableiten.",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3WR-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Mathematik",
              shortname: "w.BA.XX.3Mathe-WIN.XX",
              description:
                "Die Studierenden kennen, verstehen und beherrschen das grundlegende mathematische\r\nInstrumentarium der Analysis und linearen Algebra in den Themengebieten Funktionen,\r\nDifferentiation und Integration, Matrizenrechnung und Kombinatorik. Sie können dieses\r\nInstrumentarium zur Beschreibung und Analyse informationstechnischer und\r\nökonomischer Fragestellungen anwenden.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3Mathe-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cfdbef",
          modules: [
            {
              name: "English C1",
              shortname: "w.BA.XX.3EC1-WIN.XX",
              description:
                "Students are able to read and understand a wide variety of texts which are related to\r\nBusiness English topics and to their Business Information Technology degree subjects.\r\nThrough collaborative speaking tasks and active participation in discussions and\r\nbrainstorming sessions, students can exchange information and express their opinions\r\nfluently and convincingly, using vocabulary, phrases, and grammatical structures at the\r\nC1 level of the Common European Framework of References for Languages. Students\r\nare able to use information gathered from texts to produce written and oral work. They\r\ncan write business reports and proposals, using layout and language appropriate to the\r\ntask.",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.3EC1-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
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
              name: "Financial & Management Accounting",
              shortname: "w.BA.XX.3FMA-WIN.XX",
              description:
                "Die Studierenden verstehen die Techniken des externen Rechnungswesens und sind in\r\nder Lage, die Finanzdaten im betriebswirtschaftlichen Gesamtkontext zu beurteilen. Sie\r\nsetzen sich mit den vielfältigen Fragen der Verbuchung sowie Analyse der Daten\r\nauseinander und verstehen die zugrunde liegenden Rechnungslegungsnormen. Sie\r\nkennen verschiedene Kostenrechnungssysteme (Voll- und Teilkostenrechnung) und sind\r\nin der Lage, eine Kosten- und Leistungsrechnung für Unternehmen aus\r\nunterschiedlichen Branchen und eine interne Erfolgsrechnung zu erstellen und zu\r\ninterpretieren. Sie erwerben die Fähigkeit, interne Steuerungsinstrumente zielführend\r\neinzusetzen und damit einen wesentlichen Beitrag für die Entscheidungsgrundlage der\r\nverantwortlichen Stellen zu liefern. Die Studierenden kennen die verschiedenen\r\nMethoden zur Investitionsrechnung und erwerben die Fähigkeit, mit Hilfe der\r\nKapitalwertmethode Investitionsentscheidungen zu treffen.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3FMA-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "IT-Security",
              shortname: "w.BA.XX.3ITS-WIN.XX",
              description:
                "Dieser Kurs vermittelt das notwendige Grundlagenwissen zu Themen der Informations-\r\nund Cybersicherheit. Dazu gehört initial auch eine fundierte Einführung in\r\nComputernetze. Beginnend mit der Kommunikation in Switched-Ethernet-Netzen und\r\nden verschiedenen Protokollen und Schichten (TCP/IP) schauen wir uns auch\r\ngrundlegende Dienste und Architekturen im Internet an. Ausgestattet mit diesen\r\nGrundlagen bauen wir gemeinsam ein Verständnis von realen Bedrohungen und\r\nVerwundbarkeiten moderner IT-Infrastrukturen auf, lernen diese zu bewerten und\r\ngeeignete Schutzkonzepte zu evaluieren. Neben Konzepten zum Schutz, wird auch\r\nnotwendiges Wissen über die Erkennung von Vorfällen und das Aufarbeiten bereits\r\nerfolgter Angriffe vermittelt. Parallel zu den Vorlesungen findet praktischer\r\nÜbungsbetrieb statt in welchem alle Themen dann praktisch angewendet werden. Dabei\r\narbeiten wir vor allem mit virtualisierten/simulierten Umgebungen.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3ITS-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Betriebliche Standard-Software",
              shortname: "w.BA.XX.3BSS-WIN.XX",
              description:
                "Definition und Beschreibung von betrieblicher Standardsoftware (ERP, SCM, CRM),\r\nEvaluation und Bewertung von Enterprisesoftware, Grundlagen von ERP-Systemen,\r\nEinführung von ERP-Systemen, Technik und Anpassung (Customizing) von ERP-\r\nSystemen. Entwicklung von ERP-Systemen von intraorganisatorischen zu\r\ninterorganisatorischen und branchenspezifischen Lösungen. Aufnahme und\r\nBeschreibung von betrieblichen Prozessen und Architekturen. Einfluss von\r\nEntwicklungen im Cloud-Computing, den analytischen Systemen und dem IoT auf\r\nbetriebliche Standardsoftware",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3BSS-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Requirements Engineering",
              shortname: "w.BA.XX.3RE-WIN.XX",
              description:
                "Die Studierenden kennen und verstehen den Prozess der Anforderungserhebung bzw.\r\nder Anforderungskonsolidierung. Sie sind in der Lage, die darin enthaltenen Tätigkeiten\r\nzu planen, organisieren, anleiten und selbst auszuführen. Insbesondere kennen die\r\nStudierenden unterschiedliche Methoden und Techniken der Anforderungserhebung,\r\nunterschiedliche Formen der Anforderungsbeschreibung und –Dokumentation sowie\r\nunterschiedliche Qualitätskriterien und Arten der Anforderungsprüfung. Sie kennen\r\nMethoden und Werkzeuge zur Erhebung, Beschreibung, Bewertung und Prüfung von\r\nAnforderungen und können diese für die Entwicklung von Software und Systemen\r\nzielorientiert einsetzen.Das Wissen ist relevant für die Berufsfelder Business Analyse,\r\nRequirements Engineering und IT-Projektmanagement. Der Kurs deckt einige der Inhalte\r\ndes Certified Professional for Requirements Engineering (IREB Foundation Level) ab.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3RE-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Statistik",
              shortname: "w.BA.XX.3Stat-WIN.XX",
              description:
                "Die Studierenden verstehen die grundlegenden Methoden der deskriptiven und\r\ninduktiven Statistik zur Aufarbeitung und Analyse statistischer Daten und wenden die\r\nMethoden in der Praxis an.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3Stat-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
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
          color: "#cfdbef",
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
              name: "Prozess-Modellierung",
              shortname: "w.BA.XX.3PMo-WIN.XX",
              description:
                "Geschäftsprozesse gehören zu den wichtigsten betrieblichen Vermögensgegenständen.\r\nDie wachsenden Herausforderungen der Globalisierung, Integration, Standardisierung,\r\nInnovation, Agilität und operative Effizienz einerseits und die neuen Möglichkeiten der\r\nDigitalisierung andererseits haben dazu geführt, Prozesse nicht nur zu verbessern,\r\nsondern auch gänzlich neuartige Prozesse zu gestalten. Dieses Modul vermittelt\r\npraktisches Know-how zu Modellen, Werkzeugen, Techniken, Ansätzen und Methoden\r\nund wendet dieses Know-how praktisch für Verbesserung bzw. Neugestaltung von\r\nProzessen an.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3PMo-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "IT Project Management",
              shortname: "w.BA.XX.3ITPM-WIN.XX",
              description:
                "Die Studierenden haben einen Überblick über gängige IT-Projektmanagement-\r\nStandards und Software-Entwicklungs-Vorgehensmodelle. Die Studierenden verfügen\r\nüber detaillierte Kenntnisse des Projektmanagement-Standards des Project\r\nManagement Institute (PMI). Sie können diese im Rahmen eines eigenen Projekts\r\nkorrekt und zweckmässig anwenden.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3ITPM-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Data Management",
              shortname: "w.BA.XX.3DM-WIN.XX",
              description:
                "In this module, students learn how to manage data using various data models,\r\ntechnologies, and methods to harness data. We draw on example cases of prototyping\r\ninformation systems and gaining insights from data to motivate the application of the\r\ntechnologies.As a result, students will understand the significance of data management.\r\nThey become familiar with different data models and forms of data representation and\r\nare able to describe data using these models and forms of representation. They know\r\ndifferent data management technologies and use cases which they can use to render\r\ndata valuable. Based on all this knowledge, they will be able to create data-centric\r\napplication prototypes and make data available for data science tasks.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.3DM-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Prototyping",
              shortname: "w.BA.XX.3Pt-WIN.XX",
              description:
                "Prototyping wird in der Softwareentwicklung eingesetzt, um bereits in frühen\r\nProjektphasen Ideen rasch umzusetzen und experimentell zu prüfen, ob ein Produkt\r\nbenutzbar und nützlich ist. Dadurch können zusätzliche Anforderungen und mögliche\r\nProbleme frühzeitig erkannt werden, was das Risiko einer Fehlentwicklung reduziert. In\r\ndiesem Modul lernen Sie Vorgehensmodelle, Technologien und Werkzeuge kennen, mit\r\ndenen Sie agil und menschzentriert interaktive Anwendungen gestalten, implementieren\r\nund experimentell prüfen können. Zum Beispiel können Mock-Ups in unterschiedlichen\r\nReifegraden eingesetzt werden, um das User Interface auszuarbeiten. Doch auch die\r\nAnwendungslogik und die zugrundeliegenden Daten müssen bei der Erstellung von\r\nPrototypen berücksichtigt werden. Zu diesem Zweck lernen Sie, wie Sie mit\r\nWebtechnologien (HTML, CSS, JavaScript) prototypisch interaktive Webapplikationen\r\nerstellen, mit denen Sie Konzepte und Ideen in Usability Tests evaluieren können.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3Pt-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Data Analytics",
              shortname: "w.BA.XX.3DA-WIN.XX",
              description:
                'This module provides students with the foundations and basic concepts of data analytics.\r\nStudents learn to create e2e data analytics workflows and perform their own practice-\r\noriented data analytics projects. They become familiar with the necessary tools and\r\nprogramming languages for data analytics. The module builds on the content of the\r\n"Statistik" module and provides the basis for the modules "KI-Anwendungen" and\r\n"Business Intelligence".',
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.3DA-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
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
          color: "#cfdbef",
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
              name: "Strategisches Management",
              shortname: "w.BA.XX.3SM-WIN.XX",
              description:
                "Die Studierenden verfügen über generalistisches wie auch spezifisches Wissen im\r\nBereich strategisches Management und sind befähigt, die gängigen Instrumente,\r\nMethoden und Modelle des strategischen Managements in der betrieblichen Praxis\r\nanzuwenden. Sie können strategisch relevante (Unternehmens-)Informationen\r\nzusammenstellen, bewerten und interpretieren. Und die Studierenden erwerben die\r\nFähigkeit, Strategieprojekte selbständig zu bearbeiten.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3SM-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Wissenschaftliche Methoden",
              shortname: "w.BA.XX.3WM-WIN.XX",
              description:
                "Das Modul Wissenschaftliche Methoden der Wirtschaftsinformatik hat zum Ziel,\r\nüberfachliche Kompetenzen zu fördern. Dabei entwickeln die Studierenden ihre\r\nSelbstkompetenz im Bereich des eigenverantwortlichen und selbstgesteuerten Handelns\r\nweiter und setzen geeignete Lern- und Arbeitsstrategien ein. Einerseits wird konsequent\r\nBezug zu den Fachkompetenzen in der Wirtschaftsinformatik genommen und anderseits\r\nwird die interdisziplinäre, wissenschaftliche Wissensbasis berücksichtigt, um die\r\nStudierenden für das lebenslange Lernen zu sensibilisieren. Die Studierenden werden in\r\ndas wissenschaftliche Arbeiten eingeführt. Bei der Weiterentwicklung ihrer\r\nProblemlösekompetenzen erwerben Sie grundlegende Fähigkeiten zur Analyse von\r\nProblemen der Wirtschaftsinformatik und lösen diese mit Hilfe geeigneter Instrumente.\r\nDie Studierenden sind in der Lage, zielgerichtet zu kommunizieren und Informationen zu\r\nvermitteln.",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3WM-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Business-IT Strategy",
              shortname: "w.BA.XX.3BITS-WIN.XX",
              description:
                "Die Studierende sollen erste vertiefte Kenntnisse und Fähigkeiten erwerben, die sie\r\nbefähigen, in der Praxis strategische Problemstellungen der Informationstechnologie und\r\n-dienstleistungen selbständig zu lösen. Das angestrebte Qualifikationsprofil umfasst\r\ninnerbetriebliche Digitalisierungsaufgaben der IT- Abteilung sowohl IT-orientierte\r\nDienstleistungen und Beratungstätigkeiten aus strategischer Sicht zu beurteilen und\r\nentwicklen zu können.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3BITS-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Software Engineering 2",
              shortname: "w.BA.XX.3SE2-WIN.XX",
              description:
                "In diesem Modul geht es darum, das Gelernte aus den Modulen Software Engineering 1,\r\nRequirements Engineering, Data Management, IT-Security, IT Project Management und\r\nPrototyping zu kombinieren und damit vollständige Web-Applikationen zu realisieren. Die\r\nStudierenden verwenden dabei verschiedene professionelle Werkzeuge für Coding,\r\nVersionsverwaltung, Issue-Tracking, Testautomatisierung, Deployment und\r\nCodeanalyse und erlernen Grundlagen zu Betrieb und Evaluation von Web-\r\nApplikationen. Zudem werden Methoden für die systematische Innovationsentwicklung\r\nvermittelt und im Rahmen einer Projektarbeit erprobt. Dazu realisieren die Studierenden\r\nzu einer Projektidee eine Anwendung von A bis Z, vom Requirements Engineering bis\r\nzum Testen und Evaluieren der Applikation.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3SE2-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "AI Applications",
              shortname: "w.BA.XX.3KIA-WIN.XX",
              description:
                "This module consists of three blocks: 1) Creating a machine learning model for numeric\r\ndata and integrating it with an application, 2) Generating transformer models and fine-\r\ntuning data sets using NLP for text data, and 3) model training for image classification\r\nand detection in motion pictures. The performance assessment is an oral exam, where\r\nthe students present their own project and answer questions related to all three blocks.",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Moduledescription_w.BA.XX.3KIA-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Wahlpflichtmodul 1",
              credits: 3,
              is_elective: true,
              wahlmodule: [
                {
                  name: "Business in Emerging Markets",
                  shortname: "w.BA.XX.2BusEM.XX",
                  description:
                    "The largest emerging economies in the world - with particular attention given to China\r\nand India - are analyzed in terms of their economic growth, companies, policies, and\r\nculture. The module aims to provide students with an initial insight into these two large\r\neconomies and their markets and enable them to do business there. In case studies,\r\nguest lecturers will introduce Swiss financial and industrial companies operating in China\r\nand India. In particular, current geopolitical and economic changes and their impact on\r\ncross-border business will be addressed.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2BusEM.XX.pdf",
                },
                {
                  name: "Business Value of Blockchain",
                  shortname: "w.BA.XX.2BVB.XX",
                  description:
                    "The Bitcoin price surge has led to extreme hype surrounding blockchain technology.\r\nHowever, blockchain technology is much more than just a technological framework for\r\nBitcoin. It enables new applications in finance, art, community management, and in the\r\nMetaverse. This module enables students to explore the technical and economic\r\nfoundations of blockchains. In the first part, students will gain a thorough understanding\r\nof the technology, the economics of blockchains, and the thriving Swiss blockchain\r\necosystem. In the second part, students will explore in depth issues such as NFTs,\r\nDAOs, DeFi and many others. In this module, students work in interdisciplinary teams to\r\nstudy different blockchain application fields.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2BVB.XX.pdf",
                },
                {
                  name: "Compliance",
                  shortname: "w.BA.XX.2CMP.XX",
                  description:
                    "Interventionen von Behörden, Straf- und Bussgelder, Entzug von Genehmigungen,\r\nAuflagen und Bedingungen, Schadenersatzklagen und Reputationsverluste verstärken\r\nden Druck auf Unternehmen, massgeschneiderte Compliance-Systeme zu\r\nimplementieren. Erfasst werden nicht mehr nur die hochregulierten Branchen, sondern\r\nauch Industrie-, Handels- und Dienstleistungsunternehmen, unabhängig davon, ob sie\r\nzu den Grossunternehmen oder KMU zählen. Die Einhaltung von gesetzlichen und\r\ninternen Vorgaben geht heute weit über die Schweizer Rechtsordnung hinaus. Die\r\nStudierenden des Wahlpflichtmoduls Compliance lernen, warum und wie ein solches\r\nCompliance Management System im Unternehmen aufgebaut wird.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2CMP.XX.pdf",
                },
                {
                  name: "Data Protection and Governance",
                  shortname: "w.BA.XX.2DPG.XX",
                  description:
                    'Daten sind in der heutigen Informationsgesellschaft enorm wichtig. Sie gelten als "Öl des\r\n21. Jahrhunderts". Die Bearbeitung grosser Mengen von Daten stellt jedoch auch\r\nerhebliche Herausforderungen. In diesem Modul werden diese Herausforderungen\r\nbehandelt. Die wesentlichen Aspekte von Datenbearbeitungen werden aus\r\nunterschiedlichen Perspektiven, Fachrichtungen, Rollen und Funktionen beleuchtet. Der\r\nSchwerpunkt liegt dabei auf den rechtlichen Aspekten des Datenschutzes (Schutz von\r\nPersonendaten) sowie der Information Governance. Der rechtliche Teil beträgt ca. 60 -\r\n70%.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2DPG.XX.pdf",
                },
                {
                  name: "Datenanalyse mit Python",
                  shortname: "w.BA.XX.2DAPyt.XX",
                  description:
                    "Das Modul befasst sich mit der Aufarbeitung und Auswertung von strukturierten Daten in\r\nPython. Das Ziel ist es, einen Leitfaden für die Teile der Programmiersprache Python\r\nund ihr datenorientiertes Bibliotheksökosystem zu bieten, mit denen man Datenanalysen\r\neffektiv ausführen kann. Dies gilt insbesondere für die Datenanalyse-Bibliothek\r\n«Pandas». Das Modul verdeutlicht anhand konkreter Fallbeispiele, wie man mit Python\r\neine Vielzahl von typischen Datenanalyse-Problemen lösen kann.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2DAPyt.XX.pdf",
                },
                {
                  name: "Debatte und Verhandlungsführung",
                  shortname: "w.BA.XX.2DVF.XX",
                  description:
                    "Die Studierenden erhalten die Gelegenheit, die persönliche Redegewandtheit in\r\nkomplexen und anspruchsvollen Gesprächssituationen (Verhandlung und Debatte) zu\r\nüberprüfen und weiterzuentwickeln. Dabei sollen das Verhandlungsgeschick, die\r\nArgumentationsfähigkeit, die Überzeugungsstärke und das Ausdrucksvermögen der\r\nStudierenden weiterentwickelt/geschult und gefestigt werden.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2DVF.XX.pdf",
                },
                {
                  name: "International Corporate Responsibility Management",
                  shortname: "w.BA.XX.2ICRM.XX",
                  description:
                    "In this module, students will be introduced to core concepts and current discussions on\r\nsustainability and corporate social responsibility, with a particular emphasis on\r\ninternational and intercultural issues. The module starts with introductory lectures before\r\nchanging to an interactive seminar format in which students present and discuss topics\r\nof their choosing related to sustainability and corporate responsibility.After successful\r\ncompletion of this class, students will be able to explain core concepts in the context of\r\ncorporate responsibility and sustainable development, understand the importance of\r\ninternational and intercultural aspects in this context, appreciate the importance of ethics\r\nand critical thinking, critically reflect on their roles as members of business organizations\r\nand professional associations, and apply the concepts they have learned in class to real-\r\nlife problems in international business.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2ICRM.XX.pdf",
                },
                {
                  name: "Legal Tech",
                  shortname: "w.BA.XX.2LT.XX",
                  description:
                    "Die Digitalisierung der Arbeitswelt schreitet in Riesenschritten voran und hat auch die\r\nRechtsbranche erreicht. Regelungen werden in Code übersetzt, Dokumente werden\r\nautomatisiert, Machine Learning wird zur Analyse von grossen Dokumentenmengen\r\neingesetzt, Chatbots und dezentrale Lösungen auf der Blockchain werden entwickelt und\r\ndigitale Prozesse implementiert. Auch die Geschäftsmodelle und die Art, wie juristische\r\nDienstleistungen vermittelt werden, ändern sich.Mehr und mehr Unternehmen stellen\r\nnun JuristInnen mit IT-Affinität oder InformatikerInnen mit juristischer Affinität als\r\nsogenannte Legal Engineers an, um solche Lösungen in Teams von JuristInnen und\r\nSoftware-EntwicklerInnnen zu entwickeln. Viele Aufgaben werden automatisiert und\r\nkommerzialisiert, während ein neues Ökosystem bestehend aus Anwaltskanzleien,\r\nTechnologieunternehmerInnen, AkademikerInnen und anderen Fachleuten entsteht. Das\r\nModul – offen für WirtschaftsinformatikerInnen wie für WirtschaftsrechtlerInnen –\r\nverbindet die Welten Recht, Wirtschaft und Technologie. In diesem interdisziplinären\r\nSetting können die TeilnehmerInnen ihr eigenes fachliches Know-How einbringen. Die\r\nTeilnehmerInnen werden die Gelegenheit haben, selber mit den einschlägigen Tools zu\r\narbeiten und die bestehenden technischen Möglichkeiten (etwa zur Bilderkennung oder\r\nzum Auswerten von natürlicher Sprache, beispielsweise in Gerichtsentscheiden)\r\nausloten. Sie können sich vertieft mit der im Bereich Legal Tech eingesetzten\r\nTechnologie beschäftigen und gleichzeitig erste Schritte für die Erstellung ihrer eigenen\r\nLösungen und Anwendungen tätigen. Das Modul wird viel Raum für die Erörterung der\r\npotenziellen Möglichkeiten, aber auch der möglichen Herausforderungen, die mit einem\r\ndisruptiven technologischen Wandel verbunden sind, bieten. Des Weiteren werden\r\nExpertInnen von namhaften einschlägigen Unternehmen Einblicke in die Praxis geben",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2LT.XX.pdf",
                },
                {
                  name: "Managing Digital Transformation in the Luxury Sector",
                  shortname: "w.BA.XX.2MDiLu.XX",
                  description:
                    "Luxury in the Digital Era – Transformation of Company Culture, Organizational\r\nStructures, Supply Chain Processes & Customer ExperienceWhile luxury brands have\r\nbeen reluctant to adopt new technologies and online services until fairly recently, today\r\nat least 70% of luxury purchases are influenced through the internet. This means that\r\nmany luxury companies have to adapt not only where and how they communicate with\r\n(potential) customers and sell their products, they also have to change their entire way of\r\ndoing business, including supply chain management, hiring of new talent, etc.\r\nConsequently, luxury companies require young professionals who not only understand\r\nthe specifics of the luxury business but also know and understand how new technologies\r\ncan be used to adapt luxury business models and create the luxury experience of the\r\nfuture.Throughout the module, students will work with real cases and have the\r\nopportunity to interact with professionals working at different stages in the value chain of\r\nluxury companies and at different intersections with technology. This module will be a\r\ncombination of academic lectures, group work, and professional input from specialists\r\nwith considerable expertise in the interplay between luxury products/service and digital\r\ntechnology.The objective of the course is to give participants a broad overview of luxury-\r\nspecific management challenges in the adaptation of existing business models and the\r\ncreation of new ways of doing business in the luxury segment of various industries (e.g.,\r\ntimepieces, jewelry, fashion, hospitality, etc.). Besides a sound scientific-theoretical\r\nfoundation, participants will gain first-hand insights from industry experts.By the end of\r\nthe course, participants will understand the major trends shaping the future business of\r\nluxury, appreciate the managerial implications of those trends, and be able to apply\r\ntheoretical and practical knowledge to the solution of management issues connected to\r\ndigital transformation in the luxury context.Important: Please note that the module may\r\nbe held partly online (asynchronous pre-recorded videos and/or synchronous online\r\nlectures; hybrid formats) to make use of all available teaching and learning formats and\r\nto adjust to the requirements of international experts/guest lecturers/company\r\nrepresentatives that will give lectures in this module. In the case of online lectures,\r\nparticipants are flexible and may join from any suitable environment, but they are\r\nexpected to be present and participate actively",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2MDiLu.XX.pdf",
                },
                {
                  name: "Marketing Trends",
                  shortname: "w.BA.XX.2MT.XX",
                  description:
                    "Das Studium befähigt die Studierenden, aktuelle Themen des Marketings im Kontext von\r\ngesellschaftlichen, wirtschaftlichen und technologischen Megatrends sowie sich\r\nwandelnden Kundenbedürfnissen einzuordnen und Konsequenzen für die spätere\r\nTätigkeit im praktischen Marketing abzuleiten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2MT.XX.pdf",
                },
                {
                  name: "Mindfulness / Mindful Leadership",
                  shortname: "w.BA.XX.2Mind.XX",
                  description:
                    "«Mindfulness means paying attention to what’s happening in the present moment in the\r\nmind, body and external environment, with an attitude of curiosity and kindness.» (The\r\nMindfulness Initiative)Testimonials von Studierenden, die dieses Wahlfach bereits\r\nabsolviert haben:- «Eines der besten Nebenfächer ever!»- «Durch das Modul\r\nMindfulness/Mindful Leadership hat sich einiges in meiner Wahrnehmung geändert. Mir\r\nsind Verhaltensmuster aufgefallen, die ich gerne an mir ändern würde. Ich habe\r\nfestgestellt, dass ich oft im Autopiloten unterwegs und mit Tagträumereien beschäftigt\r\nbin.» - «Von diesem Modul nehme ich sehr viel mit. Zum einen wurde mir wieder einmal\r\nklar, wie wichtig die mentale Gesundheit ist und wie sie gefördert werden kann.»- «Nach\r\ndiesem Modul habe ich eindeutig meine innere Ruhe gefunden und habe nun eine ganz\r\nandere Sicht auf gewisse Dinge. Auch mein Chef ist positiv überrascht und kann mich\r\nnun, nach Abschluss meines Studiums, mit gutem Gewissen zur Teamchefin machen.» -\r\n«Wunderschöne Location mit Blick auf die Berge und einem echt coolen Feuerritual!»-\r\n«Echt super!»Dieses Modul basiert sehr stark auf erfahrungsbasiertem Lernen. Es setzt\r\nbei den Studierenden eine hohe intrinsische Motivation und die Bereitschaft sich mit sich\r\nselbst und den anderen Modulteilnehmenden aktiv auseinander zu setzten und auch\r\nregelmässig sich in Mindfulness zu üben voraus. Dieses Modul kann unabhängig der\r\neigenen Weltanschaudung besucht werden.Wichtiger Bestandteil der\r\nUnterrichtseinheiten werden unterschiedliche Mindfulness-Praktiken sein wie Sitz- (z.B.\r\nGegenstandslose Meditation, Open Monitoring, diverse Atemübungen,\r\nCompassion/Metta Meditation, Body Scan) und Bewegungsmeditationsformen (z.B.\r\nYoga, Gehmeditation) Aber auch innovative Ansätze aus dem Improvisationstheater,\r\nCoaching und Leadership kommen zur Anwendung. «Mindfulness is a skill», welches\r\nsomit erlernbar ist und mit Hilfe von regelmässiger Übung wie ein Muskel im Rahmen\r\neines Krafttrainings gestärkt wird.«Zwischen Reiz und Reaktion gibt es einen Raum. In\r\ndiesem Raum haben wir die Freiheit und die Macht, unsere Reaktion zu wählen. In\r\nunserer Reaktion liegen unser Wachstum und unsere Freiheit. (Prof. Viktor E. Frankl)\r\nDas Interesse an und die Bedeutung von Mindfulness hat seit rund 10 Jahren sowohl in\r\nder breiten Öffentlichkeit als auch in der Wissenschaftscommunity massiv zugenommen.\r\nDies zeigt sich z.B. dadurch, dass mittlerweile mehr als 10'000 wissenschaftliche Journal\r\nArtikel in den einschlägigen Datenbanken zu finden sind. Zahlreiche\r\nForschungsergebnisse belegen die positiven Auswirkungen der Mindfulness-Praxis wie:-\r\nDie Konzentrations- und Lernfähigkeit wird verbessert- Bewussterer und konstruktiverer\r\nUmgang mit Stress wird gefördert- Empathiefähigkeit nimmt zu und Entwicklung von\r\nemotionaler Intelligenz wird unterstützt- Psychische und physische Widerstandskraft wird\r\ngestärkt (Resilienz, Immunsystem)- Neuroplastizität: Mindfulness ist eine Fähigkeit, die\r\ndank Übung trainiert werden kann und dadurch verändert sich auch nachweislich die\r\nGehirnstrukturMedizinischer Hinweis: Zahlreiche Studien belegen zwar die positive\r\nWirkung der Achtsamkeitspraxis auf die mentale Gesundheit. Jedoch wird ein\r\nMindfulness Kurs nicht empfohlen, wenn eine Person z.B. gerade unter einer akuten\r\nDepression leidet. Falls Sie also wegen einem psychischen Leiden in Behandlung sein\r\nsollten, halten Sie bitte zuerst mit Ihrem Therapeuten/Arzt Rücksprache, bevor Sie sich\r\nzu diesem Wahlpflichtmodul anmelden.Es gibt immer mehr Unternehmen, die\r\nMindfulness als einen wesentlichen Bestandteil in ihren Entwicklungsprogrammen für\r\nFührungskräfte integriert haben. Darunter sind nicht nur technologieaffine Unternehmen\r\nwie Google, SAP, Facebook, Intel oder LinkedIn, sondern auch traditionellere\r\nOrganisationen wie Deutsche Post, Caritas, Daimler, Bosch, Axpo oder Ikea. Aber auch\r\nan immer mehr Universitäten (z.B. University of Oxford, Harvard Law School, London\r\nSchool of Economics oder Ludwig-Maximilians-Universität München) ist Mindfulness Teil\r\ndes Angebots.Inhaltich orientiert sich dieses Wahlpflichtmodul an folgenden etablierten\r\nMindfulness-Ansätzen: MBSR (Mindfulness Based Stress Reduction; Prof. Jon-Kabat\r\nZinn), SAM (Salzburger Achtsamkeitsmodell; Mindful Leader) und SIY (Search Inside\r\nYourself; das wohl weitverbreitetste Corporate Mindfulness Leadership Programm mit\r\nmehr als 50’000 Absolventen, das 2007 von Chad-Meng Tan bei Google entwickelt\r\nwurde).Bitte beachten Sie unbedingt die Details zur Blockveranstaltung vom 15.3.24 bis\r\n17.3.24 weiter unten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mind.XX.pdf",
                },
                {
                  name: "Psychologie",
                  shortname: "w.BA.XX.2Psych.XX",
                  description:
                    "Die Studierenden gewinnen zu Beginn einen Überblick über die unterschiedlichen\r\nFachgebiete der Psychologie und kennen deren Schwerpunkte. Aufgrund dieser\r\nKenntnisse sind Sie anschliessend in der Lage daraus psychologische Fragestellungen\r\nzu entwickeln oder ein bestehendes psychologisches Experiment zu replizieren. Darüber\r\nhinaus können Sie dieses psychologische und methodische Wissen in ihren Berufsalltag\r\nintegrieren.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Psych.XX.pdf",
                },
                {
                  name: "Retail Management",
                  shortname: "w.BA.XX.WPM-RET.XX",
                  description:
                    'Von stationärem Handel mit seinen typischen Filialisten, Franchiseorganisationen und\r\nVerbundgruppen bis hin zum Distanzhandel in Form von Onlineshops und Online-\r\nMarktplätzen bietet der Handel eine beeindruckende Vielfalt an Betriebsformen und\r\nvertraglichen Bindungen. Das Modul "Retail Management" gibt Einblicke in diese Vielfalt,\r\nermöglicht das Verständnis für diese Branche und gibt Hinweise und Tools zur Lösung\r\ntypischer strategischer und operativer Managementaufgaben für die Handelsmanager\r\nund Berater von morgen.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.WPM-RET.XX.pdf",
                },
                {
                  name: "Self Leadership",
                  shortname: "w.BA.XX.2SLS.XX",
                  description:
                    "«Be the change that you wish to see in the world.» (Mahatma Gandhi) «Führen kann\r\nnur, wer sich selbst führt.» (Urs Baldegger)Wer Andere erfolgreich führen möchte, darf\r\nzuerst die eigene Self Leadership Kompetenz stärken. In diesem Modul lernen\r\nStudierende anhand konkreter Instrumente und Übungen, wie es geht selbst gesteckte\r\nZiele zu erreichen und ua. sich seiner SELBST BEWUSSTER zu werden.Voraussetzung\r\nist eine hohe intrinsische Motivation sowie eine aktive Mitarbeit. Wir wenden\r\nunterschiedliche Aspekte der Positiven Psychologie, der Leadership Forschung, des\r\nBusiness-Coachings, des Mentaltrainings (Resilienz/Spitzensport) und Mindfulness an.\r\nUnbedingte Beachtung der Anwesenheitsplicht/zwingende Präsenzzeit (Daten siehe\r\nunten). ///Feedback von Studierenden aus vergangenen Semestern: «Dieses Modul hat\r\nmir wirklich Spass gemacht und gehört definitiv zu meinen ZHAW-Highlights.»«Die\r\nStimmung war sehr positiv. Wenn man zusammen lachen kann, ist schon Vieles\r\nerreicht.»«Normalerweise bezahlt man viel Geld für solche Coachings und Inputs im\r\nBereich Self Leadership. Ich bin sehr dankbar, dass die ZHAW dies anhand eines\r\nWahlpflichtmoduls anbietet und ich freue mich sogar auf die Bearbeitung der\r\nLeistungsnachweise.»«Bis anhin hatte ich mein Privat- und Studentenleben\r\nauseinandergehalten. Das Modul Self-Leadership hat mich dazu bewegt, meine\r\nauthentische Persönlichkeit zu leben und mir so geholfen einen guten Umgang mit\r\nmeinen früheren Zweifeln zu entwickeln.»Bitte beachten Sie die Informationen zur\r\nPräsenzpflicht weiter unten",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SLS.XX.pdf",
                },
                {
                  name: "Supply Chain Management",
                  shortname: "w.BA.XX.2SCM.XX",
                  description:
                    'The aim of this elective module is to provide students with a deeper understanding of\r\ncross-functional tasks and how important it is to break down functional silos to be\r\nsuccessful in today’s complex business world. This is done with the help of "The Fresh\r\nConnection" (www.thefreshconnection.biz), an extensive supply chain management\r\nsimulation, which is currently also used by MIT and other well-known universities to\r\nillustrate and teach the importance of cross-functional thinking. In groups of four,\r\nstudents will need to make several strategic and tactical decisions in their roles as VP\r\nSales, VP Purchasing, VP Supply Chain, or VP Operations. The simulation consists of\r\nsix rounds, with each round becoming increasingly complex.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2SCM.XX.pdf",
                },
                {
                  name: "Technologietrends in der Informatik",
                  shortname: "w.BA.XX.2TI.XX",
                  description:
                    'In diesem Modul werden ausgewählte Themen in ca. 3-Wochen-Blöcke eingeführt. Pro\r\nThemenblock git es eine fakultative Projektarbeit. Als Leistungsnachweis findet eine\r\nmündliche Prüfung statt, an der die Ergebnisse einer Projektarbeit besprochen werden\r\nfalls ein Projekt bearbeitet wurde (was ca. 1/3 der Prüfungszeit in Anspruch nimmt).\r\nPrüfungsrelevant ist auf jeden Fall der gesamte Stoff aller Themenblöcke.Beispiele von\r\nmöglichen Themenblöcken sind:- Relevante F&E als Teil der BSc Thesis: Tipps und\r\nTricks (und Auffrischungen aus dem wissenschaftlichem Arbeiten-Modul) zum\r\nAufpeppen der eigenen BSc Thesis.- Auswirkungen von Technologien auf die\r\nGesellschaft: Am Beispiel vom Smartphone verfolgen wir die Fragen wie sich\r\nTechnologien auf unseren Alltag auswirken und wie dies untersucht werden kann.-\r\nChatbot mit Dialogflow bauen: Wie gestaltet sich ein Chatbot, welcher als Intervention\r\ngewisse Ziele verfolgen soll? Zum Beispiel soll ein Chatbot zur Förderung einer Therapie\r\nZustände erfassen und Handlungsempfehlungen ausprechen können. Wie kann solch\r\nein Chatbot methodisch ausgearbeitet werden?- Transformer-Modellen: GPT-3, Dall-E\r\nund ähnlich können mittels Fine-Tuning zu spezifischen Aufgaben "trainiert" werden. Wir\r\nzeigen, wie die Fine-Tuning-Datensätze mithilfe von NLP (Spacy, NER, Triple Extraction,\r\nSentiment-Analysen u.ä.) erzeugt werden können, um bestimmtes Transformer-\r\nVerhalten erzeugen zu können.- Visual Computing: Am Beispiel von\r\nGebärdensprachenerkennung wird ein Prototyp gebaut, welcher ausgewählte Gebärde\r\nerkannt und automatisch als Wort angezeigt wird.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2TI.XX.pdf",
                },
                {
                  name: "Use Cases für das Metaverse",
                  shortname: "w.BA.XX.WPM-UCM.XX",
                  description:
                    "Dieses Modul beschäftigt sich mit Anwendungen in virtuellen Welten (-> Metaverse). Aus\r\ntechnologischer Sicht werden Virtual und Augmented Reality thematisiert. Dazu kommen\r\nje nach Anwendung NFTs aus der Blockchain-Welt. Die Anwendungsdomänen sind\r\nsoziale Interaktion (e.g., dating apps), Business & Productivity (e.g., Meetings,\r\nCollaboration) und Gaming&Culture (e.g., Spatial, MarineVerse). Ein Teil der\r\nAnwendungen können Browser-basiert ausprobiert und getestet werden. Andere\r\nAnwendungen sind auch mit VR-Brillen verfügbar. Der Fokus liegt nicht auf der\r\nProgrammierung von solchen Anwendungen. Vielmehr geht es darum, erste\r\nErfahrungen mit dieser Klasse von Anwendungen zu machen und sich die\r\nAnwendbarkeit in der Praxis im eigenen beruflichen Umfeld vorzustellen. Was jedoch\r\ndazugehört ist die Erstellung von personalisierten Avataren wie auch den Technologie-\r\nStack kennenzulernen. Obwohl der Fokus nicht auf der Programmierung liegt, ist ein\r\ngutes Verständnis und Interesse für Informatik erforderlich",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.WPM-UCM.XX.pdf",
                },
                {
                  name: "Wachstumsmarkt Gesundheit",
                  shortname: "w.BA.XX.2WaGe.XX",
                  description:
                    "Die Studierenden erklären aktuelle Brennpunkte des Spannungsfeldes „Gesundheit und\r\nGesellschaft“ (Gesundheitspolitik, Public Health, Gesundheitsökonomie, Recht) und\r\nkönnen deren Bedeutung in einen übergeordneten theoretischen Zusammenhang\r\nsetzen. Sie sind fähig, gesundheitsökonomisches und rechtliches Expertenwissen für die\r\nLösung von gesundheitsrelevanten Problemen in einem interdisziplinären Umfeld zu\r\nerarbeiten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WaGe.XX.pdf",
                },
              ],
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Volkswirtschaftslehre1",
              shortname: "w.BA.XX.3VWL1-WIN.XX",
              description:
                "In diesem Modul lernen Sie zentrale Grundlagen und Anwendungen der modernen\r\nMikroökonomie kennen. Im Kern steht das Prinzip der individuellen Rationalität und der\r\noptimalen Entscheidung aufgrund der Kosten-Nutzen Analyse. Basierend auf dem\r\nPrinzip der individuellen Rationalität entwickeln wir ein elementares Verständnis für\r\nMärke und das Prinzip des Tauschens, und diskutieren zentrale normative Konzepte wie\r\nEffizient und Gerechtigkeit. Wir verwenden diese Konzepte, um ein vertieftes\r\nVerständnis über die vielfältigen Gründe von Marktversgagen – durch Marktmacht,\r\nExternalitäten, strategische Interaktionen oder Informationsasymmetrien – zu erhalten,\r\nund diskutieren zentrale Lösungsansätze zur optimalen Regulierung oder zum «Market\r\ndesign».",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3VWL1-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cfdbef",
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
              name: "Marketing",
              shortname: "w.BA.XX.3Ma-WIN.XX",
              description:
                "Die Studierenden verfügen über generalistisches Wissen im Bereich Marketing und sind\r\nbefähigt, die gängigen Methoden und Konzepte in der Praxis anzuwenden. Sie können\r\nmarketingrelevante Informationen zusammenstellen, bewerten und interpretieren. Sie\r\nsind in der Lage, anwendungsorientierte Marketingprojekte und –teilaufgaben\r\nselbständig zu bearbeiten.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3Ma-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Geschäftsprozess-Integration",
              shortname: "w.BA.XX.3GpI-WIN.XX",
              description:
                "Die Studierenden lernen, Digitalisierungspotential zu erkennen und wie\r\nGeschäftsprozesse end-to-end digitalisiert werden. Hierbei geht es um die Integration\r\nzahlreicher IT-Komponenten, aber auch Mitarbeitenden und Kunden. Für diese\r\nIntegration und die Automatisierung des Prozessablaufs und einzelner bisher manueller\r\nTätigkeiten werden verschiedene Technologien eingesetzt. Doch erst durch einen\r\ngeschickten, koordinierten Einsatz dieser Technologien durch menschliche Beteiligte\r\nund der richtigen Strategie gelingt es Unternehmen, eine bessere Performance zu\r\nliefern.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3GpI-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "WI-Projekt",
              shortname: "w.BA.XX.3WIP-WIN.XX",
              description:
                "Die Studierenden führen im Rahmen dieses Moduls Wirtschaft und Informatik\r\nzusammen und bearbeiten unter Anleitung von Dozierenden ein konkretes\r\nWirtschaftsinformatik-Projekt. Wo immer möglich führt die Tätigkeit der Studierenden in\r\ndiesem Modul zu einem Projekt mit einem Wirtschaftspartner oder der Vorbereitung\r\neines solchen Projektes. Möglich ist sodann auch die Unterstützung bereits laufender\r\n(Forschungs-)VorhabenDie Studierenden erwerben im Rahmen des geleiteten\r\nSelbststudiums vertieftes Wissen über die einzelnen Phasen eines Wirtschaftsinformatik-\r\nProjektes von der Spezifikation bis hin zum Bau und späteren Roll-Out. Die\r\nStudierenden beobachten, reflektieren und üben als Individuum und als Gruppe ihr\r\nVerhalten untereinander und auch gegenüber dem möglichen Wirtschaftspartner.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3WIP-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Business Intelligence",
              shortname: "w.BA.XX.3BI-WIN.XX",
              description:
                "Die Studierenden lernen die IT-gestützte Bereitstellung, Analyse und Aufbereitung von\r\nUnternehmensinformationen kennen. Bei diesem neu gewonnen Wissen soll es sich\r\numrelevantes, handlungsorientiertes Wissen handeln, welches\r\nManagemententscheidungen zur Steuerung des Unternehmens unterstützt. Die\r\nStudierenden gewinnen in der Grossklasse ein theoretisches Verständnis über das\r\nThemenfeld Business Intelligence (BI). Hierzu gehören die wichtigsten Modelle,\r\nMethoden, Fachbegriffe und Technologien des Anwendungsfeldes Business Intelligence.\r\nDes Weiteren sind die Studierenden nach der erfolgreichen Durchführung des Moduls in\r\nder Lage, unterschiedliche Business Intelligence Ansätze, Architekturen und Methoden\r\nzu vergleichen und kontextabhängig einzusetzen und zu bewerten und können moderne\r\nAnsätze des BI beurteilen und kennen die wesentlichen Konzepte innovativer\r\nBILösungen. In der Kleinklasse werden konkrete Aufgabestellungen in der Verarbeitung\r\nvon Daten im Kontext von Business Intelligence gelöst. Dabei arbeiten die Studenten\r\naus dem Blickwinkel von Unternehmen einen use-case zum Thema BI durch. Die\r\nStudenten lernen dabei mit modernen BI-Tools zu arbeiten. Hierbei wenden sie die\r\nTheorie an und setzen die Erkenntnisse auf Basis einer Business Intelligence Software\r\nin die Praxis um.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3BI-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Wahlpflichtmodul 2",
              credits: 3,
              is_elective: true,
              wahlmodule: [
                {
                  name: "Crisis Management: Action Planning & Directing",
                  shortname: "w.BA.XX.WPM-CLA.XX",
                  description:
                    'The elective "Crisis Management: Action Planning & Directing" is designed for students\r\nwho are interested in exploring crisis management situations and scenarios. An\r\nestablished organizational leadership methodology (OLM) for crisis management will be\r\ntaught and applied through case-based scenarios. Theories and applications of strategic\r\nand operational planning for crisis management, leadership, and communication will be\r\nexplored. Working in study teams, students will acquire an understanding of the key\r\nelements of crisis management. They will learn the importance of scanning, analyzing,\r\nand assessing a situation in times of crisis in order to make well-founded decisions.\r\nCommunication during a crisis will also be covered. Exercises will allow students to\r\nassess their own capabilities as well as their study team\'s performance from a\r\nmanagement perspective. N.B.: This elective consists of theoretical and practical\r\nlectures, with input on organizational crisis theory, crisis leadership, and crisis\r\ncommunication. The case-based exercises will be structured over two full-day workshops\r\non Friday, 27 October and Saturday, 28 October 2023 (8am - 5pm on both days). The\r\ncase-based exercise on Saturday, 28 October 2023, and the final study team\r\npresentations on Thursday, 16 November 2023 form part of the performance\r\nassessment for this elective. Attendance on these dates is mandatory. Students unable\r\nto attend in full on either or both of these dates will be given a separate case study,\r\nwhich must be completed individually.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.WPM-CLA.XX.pdf",
                },
                {
                  name: "Full Stack Web Development",
                  shortname: "w.BA.XX.2FSWD.XX",
                  description:
                    "Full Stack Web Developer entwickeln sowohl Client- als auch Serversoftware. Als\r\nAllround-Entwickler:innen kennen sie sich mit vielen Frontend- und Backend-\r\nTechnologien aus. Mit ihrem breiten Wissen können sie im Team viele verschiedene\r\nAufgaben übernehmen und auch in der Projektleitung wertvolle Beiträge leisten.In\r\ndiesem Modul werden weitere Grundlagen zu Full Stack Web Development vermittelt,\r\ndie das erlernte Wissen aus den Fächern Software Engineering, Data Management und\r\nPrototyping vertiefen. Dazu gehören Design, Entwicklung und Validierung von\r\nWebanwendungen. Sie erwerben anhand eines Beispiels Kenntnisse über die komplette\r\nToolchain zum Erstellen, Testen und Deployen von Anwendungen. Die Studierenden\r\nwerden damit befähigt, Ideen in kurzer Zeit so umzusetzen, dass deren Nutzen\r\naufgezeigt und geprüft werden kann. Dieses Modul wird als Blockveranstaltung an drei\r\naufeinanderfolgenden Tagen nach den Modulendprüfungen durchgeführt. Unterricht\r\nfindet daher am 01.07.2024 - 03.07.2024 ganztags statt.Bitte beachten Sie die wichtigen\r\nInformationen unter «Bemerkungen».",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2FSWD.XX.pdf",
                },
                {
                  name: "Machine Learning: Grundlegende Verfahren und Algorithmen",
                  shortname: "w.BA.XX.WPM-MAL.XX",
                  description:
                    'Maschinelles Lernen bezieht sich auf eine Reihe von Werkzeugen zum Modellieren und\r\nVerstehen komplexer Zusammenhänge in Daten. Die Verfügbarkeit von immer mehr\r\nDaten ("Big Data") und die computertechnischen Möglichkeiten, diese auszuwerten,\r\nhaben maschinelles Lernen zu einem sehr dynamischen Forschungs- und\r\nAnwendungsgebiet gemacht. Fähigkeiten im Machine Learning sind sehr gefragt auf\r\ndem Arbeitsmarkt. Im Modul werden die grundlegenden Algorithmen und Methoden des\r\nmaschinellen Lernens anhand von konkreten, einfachen und exemplarischen\r\nProblemstellungen auf Basis von realen und simulierten Daten vermittelt. Für jede\r\nProblemstellung werden das Vorgehen und die benutzten Machine Learning Modelle mit\r\nHilfe geeigneter Software (Python/scikit-learn) in Form von Jupyter-Notebooks\r\nimplementiert. In geführten Übungen wird dieses Wissen weiter vertieft und eingeübt.\r\nDas Erlernen und die ausgiebige Nutzung der verwendeten Software ist ein zentrales\r\nElement des Moduls. Das Modul wird im FLEX-Modus durchgeführt.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.WPM-MAL.XX.pdf",
                },
                {
                  name: "Python-Grundlagen & Anwendung in Data Science",
                  shortname: "w.BA.XX.2PythGr.XX",
                  description:
                    "Python hat als objektorientierte Allzweck-Programmiersprache in den letzten Jahren\r\nhinsichtlich der Beliebtheit und Verbreitung andere Programmiersprachen aufgeholt und\r\nwird dadurch zunehmend wichtiger. Dieses Modul bietet einerseits einen Überblick über\r\ndie Anwendungsbereiche für Python und vertieft andererseits dessen Anwendung im\r\nBereich des Data Science. Die Studierenden erhalten Code-Vorlagen für gängige\r\nAnwendungen, Methoden, Skripts und Modelle. Weiter wenden die Studierenden ihre\r\nPython-Kenntnisse auf eigenen Projekten an. Sie lernen Methoden und Werkzeuge, mit\r\nderen Hilfe sie ihr Wissen selbständig in zugehörigen Bereichen weiterentwickeln\r\nkönnen.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2PythGr.XX.pdf",
                },
                {
                  name: "Sportmarketing",
                  shortname: "w.BA.XX.2SpMa.XX",
                  description:
                    "Das Modul vermittelt den Studierenden Fähigkeiten, die spezifischen Prozesse und\r\nAktivitäten des Sportmarketings (Vermarktung von und mit Sport) analytisch zu erfassen\r\nund einzuordnen sowie eigene Konzepte zu entwickeln. Sie nehmen sich einer\r\nspezifischen Problemstellung aus der Welt des Sportmarketings an und entwickeln auf\r\nBasis und unter Berücksichtigung bereits bekannter und in diesem Modul vermittelten\r\nManagement-Technicken sowie mit Hilfe wissenschaftlicher Methoden (wahlweise\r\nqualitativ und / oder quantitativ) kreative Handlungsempfehlungen für Organisationen im\r\nSport. Ihr neu erlerntes Wissen können Sie im Anschluss an dieses Modul entweder in\r\nUnternehmen einsetzen die den Sport nutzen um Ihre Produkte / Dienstleistungen zu\r\nvermarkten oder bei Sportinstitutionen (Verbände / Vereine / EinzelathletInnen / Events)\r\ndie sich selbst vermarkten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SpMa.XX.pdf",
                },
                {
                  name: "Zertifizierung Projektmanagement",
                  shortname: "w.BA.XX.2ZPM.XX",
                  description:
                    "Die Kursteilnehmenden werden auf die IPMA Level D Prüfung vorbereitet. Die\r\nStudierenden erhalten praxisorientiert und strukturiert Einblicke in\r\nProjektleiterkompetenzen. Dieser Zertifizierungsvorbereitungskurs ist getreu der IPMA-\r\nPhilosophie nicht nur auf das fachliche Know-how des Projektmanagements\r\nausgerichtet, sondern lehrt insbesondere situative Verhaltens- und Kontextkompetenzen,\r\ndie einen Projektmanager in der heutigen komplexen Welt umfassend unterstützen. Der\r\nZertifizierungsvorbereitungskurs rüstet Studierende mit der notwendigen\r\nProjektmanagement-Kompetenz aus, um (Teil-)Projekte selbstständig und erfolgreich zu\r\nleiten. Dieser Kurs bietet eine umfassende Einführung in die facettenreiche Methodik\r\nund Systematik des Projektmanagements. So werden in diesem Ansatz die drei in der\r\nProjektarbeit - nach IPMA - essenziellen Bereiche vermittelt: Fachkompetenzen,\r\nVerhaltens- und Kontextkompetenzen.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2ZPM.XX.pdf",
                },
              ],
            },
          ],
        },
        {
          group: "Pacific Blue",
          color: "#9db9dd",
          modules: [
            {
              name: "Volkswirtschaftslehre 2",
              shortname: "w.BA.XX.3VWL2-WIN.XX",
              description:
                "Welche ökonomischen Prinzipien gelten für eine ganze Volkswirtschaft? Wie hängen\r\nGütermärkte, Arbeitsmärkte und Finanzmärkte zusammen, und über welche\r\nkonjunkturpolitischen Massnahmen verfügt ein Staat? Wie funktioniert ein modernes\r\nZahlungssystem? Wir werden diese und andere Fragen anhand moderner\r\nmakroökonomischer Theorien und Fallbeispielen studieren.",
              credits: 3,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.3VWL2-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Half Baked",
          color: "#cfdbef",
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
              name: "Leadership, Ethics + Intercultural Competence",
              shortname: "w.BA.XX.3LEIKe-WIN.XX",
              description:
                "Companies increasingly operate both globally and locally. They balance innovation and\r\ntradition, long- and short-term vision, risks, and opportunities. In addition, the COVID-19\r\npandemic has led to a rapid and widespread increase in virtual collaboration. Increased\r\ndigital connectivity and new working methods offer opportunities to foster a workplace\r\ninnovation culture. Digital tools allow people to work from wherever they are and\r\ncollaborate creatively. Business IT is at the heart of the digitalization of organizations to\r\neffectively align business requirements and technical solutions. The interdisciplinary\r\ncollaboration across business administration/management and computer science\r\nboundaries generates added value for customers, enterprises, employees, and public\r\nadministration. In this module, students learn to lead organizations and teams across\r\ncultures while upholding strong ethical principles. As future leaders, they will be able to\r\ndesign appropriate strategies and measures to foster an innovation culture in their teams\r\nand organizations. The skills gained in the module “Leadership, Ethics and Intercultural\r\nCompetence” complement the technical skills derived from other core business subjects\r\nsuch as IT, engineering, and accounting/ finance. The concepts covered by the module\r\nhave valuable applications in various types of organizations, including businesses and\r\nnon-profit or public organizations.",
              credits: 6,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Moduledescription_w.BA.XX.3LEIKe-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
          ],
        },
        {
          group: "Eastern Blue",
          color: "#6799ca",
          modules: [
            {
              name: "Bachelor Thesis",
              shortname: "w.BA.XX.2BaT-WIN.XX",
              description:
                "Die Studierenden bearbeiten auf wissenschaftlicher Grundlage im Rahmen einer\r\nEinzelarbeit eine aus dem wissenschaftlichen oder Praxisbereich gestellte Aufgabe. Die\r\nStudierenden bearbeiten eine selbst gewählte oder eine vorgegebene Fragestellung. Sie\r\nanalysieren den Auftrag und führen eine vertiefte Analyse der Situation durch und leiten\r\nauf der Basis dieser Analyse Empfehlungen für das Vorgehen zur Lösung des Problems\r\nab. Im Rahmen der Problemlösung nutzen die Studierenden das während des Studiums\r\nerworbene Wissen bzw. die erworbenen Fähigkeiten zweckorientiert, effektiv und\r\neffizient an und eignen sich zusätzlich weiteres Spezialwissen an. Die Bachelor-Arbeit\r\nreflektiert damit die Handlungsbefähigung und den Zuwachs an Handlungsfähigkeit als\r\nFolge des Studiums.",
              credits: 15,
              url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BaT-WIN.XX.pdf",
              is_elective: false,
              wahlmodule: [],
            },
            {
              name: "Wahlpflichtmodul 3",
              credits: 3,
              is_elective: true,
              wahlmodule: [
                {
                  name: "Business in Emerging Markets",
                  shortname: "w.BA.XX.2BusEM.XX",
                  description:
                    "The largest emerging economies in the world - with particular attention given to China\r\nand India - are analyzed in terms of their economic growth, companies, policies, and\r\nculture. The module aims to provide students with an initial insight into these two large\r\neconomies and their markets and enable them to do business there. In case studies,\r\nguest lecturers will introduce Swiss financial and industrial companies operating in China\r\nand India. In particular, current geopolitical and economic changes and their impact on\r\ncross-border business will be addressed.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2BusEM.XX.pdf",
                },
                {
                  name: "Business Value of Blockchain",
                  shortname: "w.BA.XX.2BVB.XX",
                  description:
                    "The Bitcoin price surge has led to extreme hype surrounding blockchain technology.\r\nHowever, blockchain technology is much more than just a technological framework for\r\nBitcoin. It enables new applications in finance, art, community management, and in the\r\nMetaverse. This module enables students to explore the technical and economic\r\nfoundations of blockchains. In the first part, students will gain a thorough understanding\r\nof the technology, the economics of blockchains, and the thriving Swiss blockchain\r\necosystem. In the second part, students will explore in depth issues such as NFTs,\r\nDAOs, DeFi and many others. In this module, students work in interdisciplinary teams to\r\nstudy different blockchain application fields.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2BVB.XX.pdf",
                },
                {
                  name: "Compliance",
                  shortname: "w.BA.XX.2CMP.XX",
                  description:
                    "Interventionen von Behörden, Straf- und Bussgelder, Entzug von Genehmigungen,\r\nAuflagen und Bedingungen, Schadenersatzklagen und Reputationsverluste verstärken\r\nden Druck auf Unternehmen, massgeschneiderte Compliance-Systeme zu\r\nimplementieren. Erfasst werden nicht mehr nur die hochregulierten Branchen, sondern\r\nauch Industrie-, Handels- und Dienstleistungsunternehmen, unabhängig davon, ob sie\r\nzu den Grossunternehmen oder KMU zählen. Die Einhaltung von gesetzlichen und\r\ninternen Vorgaben geht heute weit über die Schweizer Rechtsordnung hinaus. Die\r\nStudierenden des Wahlpflichtmoduls Compliance lernen, warum und wie ein solches\r\nCompliance Management System im Unternehmen aufgebaut wird.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2CMP.XX.pdf",
                },
                {
                  name: "Data Protection and Governance",
                  shortname: "w.BA.XX.2DPG.XX",
                  description:
                    'Daten sind in der heutigen Informationsgesellschaft enorm wichtig. Sie gelten als "Öl des\r\n21. Jahrhunderts". Die Bearbeitung grosser Mengen von Daten stellt jedoch auch\r\nerhebliche Herausforderungen. In diesem Modul werden diese Herausforderungen\r\nbehandelt. Die wesentlichen Aspekte von Datenbearbeitungen werden aus\r\nunterschiedlichen Perspektiven, Fachrichtungen, Rollen und Funktionen beleuchtet. Der\r\nSchwerpunkt liegt dabei auf den rechtlichen Aspekten des Datenschutzes (Schutz von\r\nPersonendaten) sowie der Information Governance. Der rechtliche Teil beträgt ca. 60 -\r\n70%.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2DPG.XX.pdf",
                },
                {
                  name: "Datenanalyse mit Python",
                  shortname: "w.BA.XX.2DAPyt.XX",
                  description:
                    "Das Modul befasst sich mit der Aufarbeitung und Auswertung von strukturierten Daten in\r\nPython. Das Ziel ist es, einen Leitfaden für die Teile der Programmiersprache Python\r\nund ihr datenorientiertes Bibliotheksökosystem zu bieten, mit denen man Datenanalysen\r\neffektiv ausführen kann. Dies gilt insbesondere für die Datenanalyse-Bibliothek\r\n«Pandas». Das Modul verdeutlicht anhand konkreter Fallbeispiele, wie man mit Python\r\neine Vielzahl von typischen Datenanalyse-Problemen lösen kann.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2DAPyt.XX.pdf",
                },
                {
                  name: "Debatte und Verhandlungsführung",
                  shortname: "w.BA.XX.2DVF.XX",
                  description:
                    "Die Studierenden erhalten die Gelegenheit, die persönliche Redegewandtheit in\r\nkomplexen und anspruchsvollen Gesprächssituationen (Verhandlung und Debatte) zu\r\nüberprüfen und weiterzuentwickeln. Dabei sollen das Verhandlungsgeschick, die\r\nArgumentationsfähigkeit, die Überzeugungsstärke und das Ausdrucksvermögen der\r\nStudierenden weiterentwickelt/geschult und gefestigt werden.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2DVF.XX.pdf",
                },
                {
                  name: "International Corporate Responsibility Management",
                  shortname: "w.BA.XX.2ICRM.XX",
                  description:
                    "In this module, students will be introduced to core concepts and current discussions on\r\nsustainability and corporate social responsibility, with a particular emphasis on\r\ninternational and intercultural issues. The module starts with introductory lectures before\r\nchanging to an interactive seminar format in which students present and discuss topics\r\nof their choosing related to sustainability and corporate responsibility.After successful\r\ncompletion of this class, students will be able to explain core concepts in the context of\r\ncorporate responsibility and sustainable development, understand the importance of\r\ninternational and intercultural aspects in this context, appreciate the importance of ethics\r\nand critical thinking, critically reflect on their roles as members of business organizations\r\nand professional associations, and apply the concepts they have learned in class to real-\r\nlife problems in international business.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2ICRM.XX.pdf",
                },
                {
                  name: "Legal Tech",
                  shortname: "w.BA.XX.2LT.XX",
                  description:
                    "Die Digitalisierung der Arbeitswelt schreitet in Riesenschritten voran und hat auch die\r\nRechtsbranche erreicht. Regelungen werden in Code übersetzt, Dokumente werden\r\nautomatisiert, Machine Learning wird zur Analyse von grossen Dokumentenmengen\r\neingesetzt, Chatbots und dezentrale Lösungen auf der Blockchain werden entwickelt und\r\ndigitale Prozesse implementiert. Auch die Geschäftsmodelle und die Art, wie juristische\r\nDienstleistungen vermittelt werden, ändern sich.Mehr und mehr Unternehmen stellen\r\nnun JuristInnen mit IT-Affinität oder InformatikerInnen mit juristischer Affinität als\r\nsogenannte Legal Engineers an, um solche Lösungen in Teams von JuristInnen und\r\nSoftware-EntwicklerInnnen zu entwickeln. Viele Aufgaben werden automatisiert und\r\nkommerzialisiert, während ein neues Ökosystem bestehend aus Anwaltskanzleien,\r\nTechnologieunternehmerInnen, AkademikerInnen und anderen Fachleuten entsteht. Das\r\nModul – offen für WirtschaftsinformatikerInnen wie für WirtschaftsrechtlerInnen –\r\nverbindet die Welten Recht, Wirtschaft und Technologie. In diesem interdisziplinären\r\nSetting können die TeilnehmerInnen ihr eigenes fachliches Know-How einbringen. Die\r\nTeilnehmerInnen werden die Gelegenheit haben, selber mit den einschlägigen Tools zu\r\narbeiten und die bestehenden technischen Möglichkeiten (etwa zur Bilderkennung oder\r\nzum Auswerten von natürlicher Sprache, beispielsweise in Gerichtsentscheiden)\r\nausloten. Sie können sich vertieft mit der im Bereich Legal Tech eingesetzten\r\nTechnologie beschäftigen und gleichzeitig erste Schritte für die Erstellung ihrer eigenen\r\nLösungen und Anwendungen tätigen. Das Modul wird viel Raum für die Erörterung der\r\npotenziellen Möglichkeiten, aber auch der möglichen Herausforderungen, die mit einem\r\ndisruptiven technologischen Wandel verbunden sind, bieten. Des Weiteren werden\r\nExpertInnen von namhaften einschlägigen Unternehmen Einblicke in die Praxis geben",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2LT.XX.pdf",
                },
                {
                  name: "Managing Digital Transformation in the Luxury Sector",
                  shortname: "w.BA.XX.2MDiLu.XX",
                  description:
                    "Luxury in the Digital Era – Transformation of Company Culture, Organizational\r\nStructures, Supply Chain Processes & Customer ExperienceWhile luxury brands have\r\nbeen reluctant to adopt new technologies and online services until fairly recently, today\r\nat least 70% of luxury purchases are influenced through the internet. This means that\r\nmany luxury companies have to adapt not only where and how they communicate with\r\n(potential) customers and sell their products, they also have to change their entire way of\r\ndoing business, including supply chain management, hiring of new talent, etc.\r\nConsequently, luxury companies require young professionals who not only understand\r\nthe specifics of the luxury business but also know and understand how new technologies\r\ncan be used to adapt luxury business models and create the luxury experience of the\r\nfuture.Throughout the module, students will work with real cases and have the\r\nopportunity to interact with professionals working at different stages in the value chain of\r\nluxury companies and at different intersections with technology. This module will be a\r\ncombination of academic lectures, group work, and professional input from specialists\r\nwith considerable expertise in the interplay between luxury products/service and digital\r\ntechnology.The objective of the course is to give participants a broad overview of luxury-\r\nspecific management challenges in the adaptation of existing business models and the\r\ncreation of new ways of doing business in the luxury segment of various industries (e.g.,\r\ntimepieces, jewelry, fashion, hospitality, etc.). Besides a sound scientific-theoretical\r\nfoundation, participants will gain first-hand insights from industry experts.By the end of\r\nthe course, participants will understand the major trends shaping the future business of\r\nluxury, appreciate the managerial implications of those trends, and be able to apply\r\ntheoretical and practical knowledge to the solution of management issues connected to\r\ndigital transformation in the luxury context.Important: Please note that the module may\r\nbe held partly online (asynchronous pre-recorded videos and/or synchronous online\r\nlectures; hybrid formats) to make use of all available teaching and learning formats and\r\nto adjust to the requirements of international experts/guest lecturers/company\r\nrepresentatives that will give lectures in this module. In the case of online lectures,\r\nparticipants are flexible and may join from any suitable environment, but they are\r\nexpected to be present and participate actively",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2MDiLu.XX.pdf",
                },
                {
                  name: "Marketing Trends",
                  shortname: "w.BA.XX.2MT.XX",
                  description:
                    "Das Studium befähigt die Studierenden, aktuelle Themen des Marketings im Kontext von\r\ngesellschaftlichen, wirtschaftlichen und technologischen Megatrends sowie sich\r\nwandelnden Kundenbedürfnissen einzuordnen und Konsequenzen für die spätere\r\nTätigkeit im praktischen Marketing abzuleiten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2MT.XX.pdf",
                },
                {
                  name: "Mindfulness / Mindful Leadership",
                  shortname: "w.BA.XX.2Mind.XX",
                  description:
                    "«Mindfulness means paying attention to what’s happening in the present moment in the\r\nmind, body and external environment, with an attitude of curiosity and kindness.» (The\r\nMindfulness Initiative)Testimonials von Studierenden, die dieses Wahlfach bereits\r\nabsolviert haben:- «Eines der besten Nebenfächer ever!»- «Durch das Modul\r\nMindfulness/Mindful Leadership hat sich einiges in meiner Wahrnehmung geändert. Mir\r\nsind Verhaltensmuster aufgefallen, die ich gerne an mir ändern würde. Ich habe\r\nfestgestellt, dass ich oft im Autopiloten unterwegs und mit Tagträumereien beschäftigt\r\nbin.» - «Von diesem Modul nehme ich sehr viel mit. Zum einen wurde mir wieder einmal\r\nklar, wie wichtig die mentale Gesundheit ist und wie sie gefördert werden kann.»- «Nach\r\ndiesem Modul habe ich eindeutig meine innere Ruhe gefunden und habe nun eine ganz\r\nandere Sicht auf gewisse Dinge. Auch mein Chef ist positiv überrascht und kann mich\r\nnun, nach Abschluss meines Studiums, mit gutem Gewissen zur Teamchefin machen.» -\r\n«Wunderschöne Location mit Blick auf die Berge und einem echt coolen Feuerritual!»-\r\n«Echt super!»Dieses Modul basiert sehr stark auf erfahrungsbasiertem Lernen. Es setzt\r\nbei den Studierenden eine hohe intrinsische Motivation und die Bereitschaft sich mit sich\r\nselbst und den anderen Modulteilnehmenden aktiv auseinander zu setzten und auch\r\nregelmässig sich in Mindfulness zu üben voraus. Dieses Modul kann unabhängig der\r\neigenen Weltanschaudung besucht werden.Wichtiger Bestandteil der\r\nUnterrichtseinheiten werden unterschiedliche Mindfulness-Praktiken sein wie Sitz- (z.B.\r\nGegenstandslose Meditation, Open Monitoring, diverse Atemübungen,\r\nCompassion/Metta Meditation, Body Scan) und Bewegungsmeditationsformen (z.B.\r\nYoga, Gehmeditation) Aber auch innovative Ansätze aus dem Improvisationstheater,\r\nCoaching und Leadership kommen zur Anwendung. «Mindfulness is a skill», welches\r\nsomit erlernbar ist und mit Hilfe von regelmässiger Übung wie ein Muskel im Rahmen\r\neines Krafttrainings gestärkt wird.«Zwischen Reiz und Reaktion gibt es einen Raum. In\r\ndiesem Raum haben wir die Freiheit und die Macht, unsere Reaktion zu wählen. In\r\nunserer Reaktion liegen unser Wachstum und unsere Freiheit. (Prof. Viktor E. Frankl)\r\nDas Interesse an und die Bedeutung von Mindfulness hat seit rund 10 Jahren sowohl in\r\nder breiten Öffentlichkeit als auch in der Wissenschaftscommunity massiv zugenommen.\r\nDies zeigt sich z.B. dadurch, dass mittlerweile mehr als 10'000 wissenschaftliche Journal\r\nArtikel in den einschlägigen Datenbanken zu finden sind. Zahlreiche\r\nForschungsergebnisse belegen die positiven Auswirkungen der Mindfulness-Praxis wie:-\r\nDie Konzentrations- und Lernfähigkeit wird verbessert- Bewussterer und konstruktiverer\r\nUmgang mit Stress wird gefördert- Empathiefähigkeit nimmt zu und Entwicklung von\r\nemotionaler Intelligenz wird unterstützt- Psychische und physische Widerstandskraft wird\r\ngestärkt (Resilienz, Immunsystem)- Neuroplastizität: Mindfulness ist eine Fähigkeit, die\r\ndank Übung trainiert werden kann und dadurch verändert sich auch nachweislich die\r\nGehirnstrukturMedizinischer Hinweis: Zahlreiche Studien belegen zwar die positive\r\nWirkung der Achtsamkeitspraxis auf die mentale Gesundheit. Jedoch wird ein\r\nMindfulness Kurs nicht empfohlen, wenn eine Person z.B. gerade unter einer akuten\r\nDepression leidet. Falls Sie also wegen einem psychischen Leiden in Behandlung sein\r\nsollten, halten Sie bitte zuerst mit Ihrem Therapeuten/Arzt Rücksprache, bevor Sie sich\r\nzu diesem Wahlpflichtmodul anmelden.Es gibt immer mehr Unternehmen, die\r\nMindfulness als einen wesentlichen Bestandteil in ihren Entwicklungsprogrammen für\r\nFührungskräfte integriert haben. Darunter sind nicht nur technologieaffine Unternehmen\r\nwie Google, SAP, Facebook, Intel oder LinkedIn, sondern auch traditionellere\r\nOrganisationen wie Deutsche Post, Caritas, Daimler, Bosch, Axpo oder Ikea. Aber auch\r\nan immer mehr Universitäten (z.B. University of Oxford, Harvard Law School, London\r\nSchool of Economics oder Ludwig-Maximilians-Universität München) ist Mindfulness Teil\r\ndes Angebots.Inhaltich orientiert sich dieses Wahlpflichtmodul an folgenden etablierten\r\nMindfulness-Ansätzen: MBSR (Mindfulness Based Stress Reduction; Prof. Jon-Kabat\r\nZinn), SAM (Salzburger Achtsamkeitsmodell; Mindful Leader) und SIY (Search Inside\r\nYourself; das wohl weitverbreitetste Corporate Mindfulness Leadership Programm mit\r\nmehr als 50’000 Absolventen, das 2007 von Chad-Meng Tan bei Google entwickelt\r\nwurde).Bitte beachten Sie unbedingt die Details zur Blockveranstaltung vom 15.3.24 bis\r\n17.3.24 weiter unten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mind.XX.pdf",
                },
                {
                  name: "Psychologie",
                  shortname: "w.BA.XX.2Psych.XX",
                  description:
                    "Die Studierenden gewinnen zu Beginn einen Überblick über die unterschiedlichen\r\nFachgebiete der Psychologie und kennen deren Schwerpunkte. Aufgrund dieser\r\nKenntnisse sind Sie anschliessend in der Lage daraus psychologische Fragestellungen\r\nzu entwickeln oder ein bestehendes psychologisches Experiment zu replizieren. Darüber\r\nhinaus können Sie dieses psychologische und methodische Wissen in ihren Berufsalltag\r\nintegrieren.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Psych.XX.pdf",
                },
                {
                  name: "Retail Management",
                  shortname: "w.BA.XX.WPM-RET.XX",
                  description:
                    'Von stationärem Handel mit seinen typischen Filialisten, Franchiseorganisationen und\r\nVerbundgruppen bis hin zum Distanzhandel in Form von Onlineshops und Online-\r\nMarktplätzen bietet der Handel eine beeindruckende Vielfalt an Betriebsformen und\r\nvertraglichen Bindungen. Das Modul "Retail Management" gibt Einblicke in diese Vielfalt,\r\nermöglicht das Verständnis für diese Branche und gibt Hinweise und Tools zur Lösung\r\ntypischer strategischer und operativer Managementaufgaben für die Handelsmanager\r\nund Berater von morgen.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.WPM-RET.XX.pdf",
                },
                {
                  name: "Self Leadership",
                  shortname: "w.BA.XX.2SLS.XX",
                  description:
                    "«Be the change that you wish to see in the world.» (Mahatma Gandhi) «Führen kann\r\nnur, wer sich selbst führt.» (Urs Baldegger)Wer Andere erfolgreich führen möchte, darf\r\nzuerst die eigene Self Leadership Kompetenz stärken. In diesem Modul lernen\r\nStudierende anhand konkreter Instrumente und Übungen, wie es geht selbst gesteckte\r\nZiele zu erreichen und ua. sich seiner SELBST BEWUSSTER zu werden.Voraussetzung\r\nist eine hohe intrinsische Motivation sowie eine aktive Mitarbeit. Wir wenden\r\nunterschiedliche Aspekte der Positiven Psychologie, der Leadership Forschung, des\r\nBusiness-Coachings, des Mentaltrainings (Resilienz/Spitzensport) und Mindfulness an.\r\nUnbedingte Beachtung der Anwesenheitsplicht/zwingende Präsenzzeit (Daten siehe\r\nunten). ///Feedback von Studierenden aus vergangenen Semestern: «Dieses Modul hat\r\nmir wirklich Spass gemacht und gehört definitiv zu meinen ZHAW-Highlights.»«Die\r\nStimmung war sehr positiv. Wenn man zusammen lachen kann, ist schon Vieles\r\nerreicht.»«Normalerweise bezahlt man viel Geld für solche Coachings und Inputs im\r\nBereich Self Leadership. Ich bin sehr dankbar, dass die ZHAW dies anhand eines\r\nWahlpflichtmoduls anbietet und ich freue mich sogar auf die Bearbeitung der\r\nLeistungsnachweise.»«Bis anhin hatte ich mein Privat- und Studentenleben\r\nauseinandergehalten. Das Modul Self-Leadership hat mich dazu bewegt, meine\r\nauthentische Persönlichkeit zu leben und mir so geholfen einen guten Umgang mit\r\nmeinen früheren Zweifeln zu entwickeln.»Bitte beachten Sie die Informationen zur\r\nPräsenzpflicht weiter unten",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SLS.XX.pdf",
                },
                {
                  name: "Supply Chain Management",
                  shortname: "w.BA.XX.2SCM.XX",
                  description:
                    'The aim of this elective module is to provide students with a deeper understanding of\r\ncross-functional tasks and how important it is to break down functional silos to be\r\nsuccessful in today’s complex business world. This is done with the help of "The Fresh\r\nConnection" (www.thefreshconnection.biz), an extensive supply chain management\r\nsimulation, which is currently also used by MIT and other well-known universities to\r\nillustrate and teach the importance of cross-functional thinking. In groups of four,\r\nstudents will need to make several strategic and tactical decisions in their roles as VP\r\nSales, VP Purchasing, VP Supply Chain, or VP Operations. The simulation consists of\r\nsix rounds, with each round becoming increasingly complex.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2SCM.XX.pdf",
                },
                {
                  name: "Technologietrends in der Informatik",
                  shortname: "w.BA.XX.2TI.XX",
                  description:
                    'In diesem Modul werden ausgewählte Themen in ca. 3-Wochen-Blöcke eingeführt. Pro\r\nThemenblock git es eine fakultative Projektarbeit. Als Leistungsnachweis findet eine\r\nmündliche Prüfung statt, an der die Ergebnisse einer Projektarbeit besprochen werden\r\nfalls ein Projekt bearbeitet wurde (was ca. 1/3 der Prüfungszeit in Anspruch nimmt).\r\nPrüfungsrelevant ist auf jeden Fall der gesamte Stoff aller Themenblöcke.Beispiele von\r\nmöglichen Themenblöcken sind:- Relevante F&E als Teil der BSc Thesis: Tipps und\r\nTricks (und Auffrischungen aus dem wissenschaftlichem Arbeiten-Modul) zum\r\nAufpeppen der eigenen BSc Thesis.- Auswirkungen von Technologien auf die\r\nGesellschaft: Am Beispiel vom Smartphone verfolgen wir die Fragen wie sich\r\nTechnologien auf unseren Alltag auswirken und wie dies untersucht werden kann.-\r\nChatbot mit Dialogflow bauen: Wie gestaltet sich ein Chatbot, welcher als Intervention\r\ngewisse Ziele verfolgen soll? Zum Beispiel soll ein Chatbot zur Förderung einer Therapie\r\nZustände erfassen und Handlungsempfehlungen ausprechen können. Wie kann solch\r\nein Chatbot methodisch ausgearbeitet werden?- Transformer-Modellen: GPT-3, Dall-E\r\nund ähnlich können mittels Fine-Tuning zu spezifischen Aufgaben "trainiert" werden. Wir\r\nzeigen, wie die Fine-Tuning-Datensätze mithilfe von NLP (Spacy, NER, Triple Extraction,\r\nSentiment-Analysen u.ä.) erzeugt werden können, um bestimmtes Transformer-\r\nVerhalten erzeugen zu können.- Visual Computing: Am Beispiel von\r\nGebärdensprachenerkennung wird ein Prototyp gebaut, welcher ausgewählte Gebärde\r\nerkannt und automatisch als Wort angezeigt wird.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2TI.XX.pdf",
                },
                {
                  name: "Use Cases für das Metaverse",
                  shortname: "w.BA.XX.WPM-UCM.XX",
                  description:
                    "Dieses Modul beschäftigt sich mit Anwendungen in virtuellen Welten (-> Metaverse). Aus\r\ntechnologischer Sicht werden Virtual und Augmented Reality thematisiert. Dazu kommen\r\nje nach Anwendung NFTs aus der Blockchain-Welt. Die Anwendungsdomänen sind\r\nsoziale Interaktion (e.g., dating apps), Business & Productivity (e.g., Meetings,\r\nCollaboration) und Gaming&Culture (e.g., Spatial, MarineVerse). Ein Teil der\r\nAnwendungen können Browser-basiert ausprobiert und getestet werden. Andere\r\nAnwendungen sind auch mit VR-Brillen verfügbar. Der Fokus liegt nicht auf der\r\nProgrammierung von solchen Anwendungen. Vielmehr geht es darum, erste\r\nErfahrungen mit dieser Klasse von Anwendungen zu machen und sich die\r\nAnwendbarkeit in der Praxis im eigenen beruflichen Umfeld vorzustellen. Was jedoch\r\ndazugehört ist die Erstellung von personalisierten Avataren wie auch den Technologie-\r\nStack kennenzulernen. Obwohl der Fokus nicht auf der Programmierung liegt, ist ein\r\ngutes Verständnis und Interesse für Informatik erforderlich",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.WPM-UCM.XX.pdf",
                },
                {
                  name: "Wachstumsmarkt Gesundheit",
                  shortname: "w.BA.XX.2WaGe.XX",
                  description:
                    "Die Studierenden erklären aktuelle Brennpunkte des Spannungsfeldes „Gesundheit und\r\nGesellschaft“ (Gesundheitspolitik, Public Health, Gesundheitsökonomie, Recht) und\r\nkönnen deren Bedeutung in einen übergeordneten theoretischen Zusammenhang\r\nsetzen. Sie sind fähig, gesundheitsökonomisches und rechtliches Expertenwissen für die\r\nLösung von gesundheitsrelevanten Problemen in einem interdisziplinären Umfeld zu\r\nerarbeiten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WaGe.XX.pdf",
                },
              ],
            },
            {
              name: "Wahlpflichtmodul 4",
              credits: 3,
              is_elective: true,
              wahlmodule: [
                {
                  name: "Business in Emerging Markets",
                  shortname: "w.BA.XX.2BusEM.XX",
                  description:
                    "The largest emerging economies in the world - with particular attention given to China\r\nand India - are analyzed in terms of their economic growth, companies, policies, and\r\nculture. The module aims to provide students with an initial insight into these two large\r\neconomies and their markets and enable them to do business there. In case studies,\r\nguest lecturers will introduce Swiss financial and industrial companies operating in China\r\nand India. In particular, current geopolitical and economic changes and their impact on\r\ncross-border business will be addressed.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2BusEM.XX.pdf",
                },
                {
                  name: "Business Value of Blockchain",
                  shortname: "w.BA.XX.2BVB.XX",
                  description:
                    "The Bitcoin price surge has led to extreme hype surrounding blockchain technology.\r\nHowever, blockchain technology is much more than just a technological framework for\r\nBitcoin. It enables new applications in finance, art, community management, and in the\r\nMetaverse. This module enables students to explore the technical and economic\r\nfoundations of blockchains. In the first part, students will gain a thorough understanding\r\nof the technology, the economics of blockchains, and the thriving Swiss blockchain\r\necosystem. In the second part, students will explore in depth issues such as NFTs,\r\nDAOs, DeFi and many others. In this module, students work in interdisciplinary teams to\r\nstudy different blockchain application fields.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2BVB.XX.pdf",
                },
                {
                  name: "Compliance",
                  shortname: "w.BA.XX.2CMP.XX",
                  description:
                    "Interventionen von Behörden, Straf- und Bussgelder, Entzug von Genehmigungen,\r\nAuflagen und Bedingungen, Schadenersatzklagen und Reputationsverluste verstärken\r\nden Druck auf Unternehmen, massgeschneiderte Compliance-Systeme zu\r\nimplementieren. Erfasst werden nicht mehr nur die hochregulierten Branchen, sondern\r\nauch Industrie-, Handels- und Dienstleistungsunternehmen, unabhängig davon, ob sie\r\nzu den Grossunternehmen oder KMU zählen. Die Einhaltung von gesetzlichen und\r\ninternen Vorgaben geht heute weit über die Schweizer Rechtsordnung hinaus. Die\r\nStudierenden des Wahlpflichtmoduls Compliance lernen, warum und wie ein solches\r\nCompliance Management System im Unternehmen aufgebaut wird.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2CMP.XX.pdf",
                },
                {
                  name: "Data Protection and Governance",
                  shortname: "w.BA.XX.2DPG.XX",
                  description:
                    'Daten sind in der heutigen Informationsgesellschaft enorm wichtig. Sie gelten als "Öl des\r\n21. Jahrhunderts". Die Bearbeitung grosser Mengen von Daten stellt jedoch auch\r\nerhebliche Herausforderungen. In diesem Modul werden diese Herausforderungen\r\nbehandelt. Die wesentlichen Aspekte von Datenbearbeitungen werden aus\r\nunterschiedlichen Perspektiven, Fachrichtungen, Rollen und Funktionen beleuchtet. Der\r\nSchwerpunkt liegt dabei auf den rechtlichen Aspekten des Datenschutzes (Schutz von\r\nPersonendaten) sowie der Information Governance. Der rechtliche Teil beträgt ca. 60 -\r\n70%.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2DPG.XX.pdf",
                },
                {
                  name: "Datenanalyse mit Python",
                  shortname: "w.BA.XX.2DAPyt.XX",
                  description:
                    "Das Modul befasst sich mit der Aufarbeitung und Auswertung von strukturierten Daten in\r\nPython. Das Ziel ist es, einen Leitfaden für die Teile der Programmiersprache Python\r\nund ihr datenorientiertes Bibliotheksökosystem zu bieten, mit denen man Datenanalysen\r\neffektiv ausführen kann. Dies gilt insbesondere für die Datenanalyse-Bibliothek\r\n«Pandas». Das Modul verdeutlicht anhand konkreter Fallbeispiele, wie man mit Python\r\neine Vielzahl von typischen Datenanalyse-Problemen lösen kann.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2DAPyt.XX.pdf",
                },
                {
                  name: "Debatte und Verhandlungsführung",
                  shortname: "w.BA.XX.2DVF.XX",
                  description:
                    "Die Studierenden erhalten die Gelegenheit, die persönliche Redegewandtheit in\r\nkomplexen und anspruchsvollen Gesprächssituationen (Verhandlung und Debatte) zu\r\nüberprüfen und weiterzuentwickeln. Dabei sollen das Verhandlungsgeschick, die\r\nArgumentationsfähigkeit, die Überzeugungsstärke und das Ausdrucksvermögen der\r\nStudierenden weiterentwickelt/geschult und gefestigt werden.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2DVF.XX.pdf",
                },
                {
                  name: "International Corporate Responsibility Management",
                  shortname: "w.BA.XX.2ICRM.XX",
                  description:
                    "In this module, students will be introduced to core concepts and current discussions on\r\nsustainability and corporate social responsibility, with a particular emphasis on\r\ninternational and intercultural issues. The module starts with introductory lectures before\r\nchanging to an interactive seminar format in which students present and discuss topics\r\nof their choosing related to sustainability and corporate responsibility.After successful\r\ncompletion of this class, students will be able to explain core concepts in the context of\r\ncorporate responsibility and sustainable development, understand the importance of\r\ninternational and intercultural aspects in this context, appreciate the importance of ethics\r\nand critical thinking, critically reflect on their roles as members of business organizations\r\nand professional associations, and apply the concepts they have learned in class to real-\r\nlife problems in international business.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2ICRM.XX.pdf",
                },
                {
                  name: "Legal Tech",
                  shortname: "w.BA.XX.2LT.XX",
                  description:
                    "Die Digitalisierung der Arbeitswelt schreitet in Riesenschritten voran und hat auch die\r\nRechtsbranche erreicht. Regelungen werden in Code übersetzt, Dokumente werden\r\nautomatisiert, Machine Learning wird zur Analyse von grossen Dokumentenmengen\r\neingesetzt, Chatbots und dezentrale Lösungen auf der Blockchain werden entwickelt und\r\ndigitale Prozesse implementiert. Auch die Geschäftsmodelle und die Art, wie juristische\r\nDienstleistungen vermittelt werden, ändern sich.Mehr und mehr Unternehmen stellen\r\nnun JuristInnen mit IT-Affinität oder InformatikerInnen mit juristischer Affinität als\r\nsogenannte Legal Engineers an, um solche Lösungen in Teams von JuristInnen und\r\nSoftware-EntwicklerInnnen zu entwickeln. Viele Aufgaben werden automatisiert und\r\nkommerzialisiert, während ein neues Ökosystem bestehend aus Anwaltskanzleien,\r\nTechnologieunternehmerInnen, AkademikerInnen und anderen Fachleuten entsteht. Das\r\nModul – offen für WirtschaftsinformatikerInnen wie für WirtschaftsrechtlerInnen –\r\nverbindet die Welten Recht, Wirtschaft und Technologie. In diesem interdisziplinären\r\nSetting können die TeilnehmerInnen ihr eigenes fachliches Know-How einbringen. Die\r\nTeilnehmerInnen werden die Gelegenheit haben, selber mit den einschlägigen Tools zu\r\narbeiten und die bestehenden technischen Möglichkeiten (etwa zur Bilderkennung oder\r\nzum Auswerten von natürlicher Sprache, beispielsweise in Gerichtsentscheiden)\r\nausloten. Sie können sich vertieft mit der im Bereich Legal Tech eingesetzten\r\nTechnologie beschäftigen und gleichzeitig erste Schritte für die Erstellung ihrer eigenen\r\nLösungen und Anwendungen tätigen. Das Modul wird viel Raum für die Erörterung der\r\npotenziellen Möglichkeiten, aber auch der möglichen Herausforderungen, die mit einem\r\ndisruptiven technologischen Wandel verbunden sind, bieten. Des Weiteren werden\r\nExpertInnen von namhaften einschlägigen Unternehmen Einblicke in die Praxis geben",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2LT.XX.pdf",
                },
                {
                  name: "Managing Digital Transformation in the Luxury Sector",
                  shortname: "w.BA.XX.2MDiLu.XX",
                  description:
                    "Luxury in the Digital Era – Transformation of Company Culture, Organizational\r\nStructures, Supply Chain Processes & Customer ExperienceWhile luxury brands have\r\nbeen reluctant to adopt new technologies and online services until fairly recently, today\r\nat least 70% of luxury purchases are influenced through the internet. This means that\r\nmany luxury companies have to adapt not only where and how they communicate with\r\n(potential) customers and sell their products, they also have to change their entire way of\r\ndoing business, including supply chain management, hiring of new talent, etc.\r\nConsequently, luxury companies require young professionals who not only understand\r\nthe specifics of the luxury business but also know and understand how new technologies\r\ncan be used to adapt luxury business models and create the luxury experience of the\r\nfuture.Throughout the module, students will work with real cases and have the\r\nopportunity to interact with professionals working at different stages in the value chain of\r\nluxury companies and at different intersections with technology. This module will be a\r\ncombination of academic lectures, group work, and professional input from specialists\r\nwith considerable expertise in the interplay between luxury products/service and digital\r\ntechnology.The objective of the course is to give participants a broad overview of luxury-\r\nspecific management challenges in the adaptation of existing business models and the\r\ncreation of new ways of doing business in the luxury segment of various industries (e.g.,\r\ntimepieces, jewelry, fashion, hospitality, etc.). Besides a sound scientific-theoretical\r\nfoundation, participants will gain first-hand insights from industry experts.By the end of\r\nthe course, participants will understand the major trends shaping the future business of\r\nluxury, appreciate the managerial implications of those trends, and be able to apply\r\ntheoretical and practical knowledge to the solution of management issues connected to\r\ndigital transformation in the luxury context.Important: Please note that the module may\r\nbe held partly online (asynchronous pre-recorded videos and/or synchronous online\r\nlectures; hybrid formats) to make use of all available teaching and learning formats and\r\nto adjust to the requirements of international experts/guest lecturers/company\r\nrepresentatives that will give lectures in this module. In the case of online lectures,\r\nparticipants are flexible and may join from any suitable environment, but they are\r\nexpected to be present and participate actively",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2MDiLu.XX.pdf",
                },
                {
                  name: "Marketing Trends",
                  shortname: "w.BA.XX.2MT.XX",
                  description:
                    "Das Studium befähigt die Studierenden, aktuelle Themen des Marketings im Kontext von\r\ngesellschaftlichen, wirtschaftlichen und technologischen Megatrends sowie sich\r\nwandelnden Kundenbedürfnissen einzuordnen und Konsequenzen für die spätere\r\nTätigkeit im praktischen Marketing abzuleiten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2MT.XX.pdf",
                },
                {
                  name: "Mindfulness / Mindful Leadership",
                  shortname: "w.BA.XX.2Mind.XX",
                  description:
                    "«Mindfulness means paying attention to what’s happening in the present moment in the\r\nmind, body and external environment, with an attitude of curiosity and kindness.» (The\r\nMindfulness Initiative)Testimonials von Studierenden, die dieses Wahlfach bereits\r\nabsolviert haben:- «Eines der besten Nebenfächer ever!»- «Durch das Modul\r\nMindfulness/Mindful Leadership hat sich einiges in meiner Wahrnehmung geändert. Mir\r\nsind Verhaltensmuster aufgefallen, die ich gerne an mir ändern würde. Ich habe\r\nfestgestellt, dass ich oft im Autopiloten unterwegs und mit Tagträumereien beschäftigt\r\nbin.» - «Von diesem Modul nehme ich sehr viel mit. Zum einen wurde mir wieder einmal\r\nklar, wie wichtig die mentale Gesundheit ist und wie sie gefördert werden kann.»- «Nach\r\ndiesem Modul habe ich eindeutig meine innere Ruhe gefunden und habe nun eine ganz\r\nandere Sicht auf gewisse Dinge. Auch mein Chef ist positiv überrascht und kann mich\r\nnun, nach Abschluss meines Studiums, mit gutem Gewissen zur Teamchefin machen.» -\r\n«Wunderschöne Location mit Blick auf die Berge und einem echt coolen Feuerritual!»-\r\n«Echt super!»Dieses Modul basiert sehr stark auf erfahrungsbasiertem Lernen. Es setzt\r\nbei den Studierenden eine hohe intrinsische Motivation und die Bereitschaft sich mit sich\r\nselbst und den anderen Modulteilnehmenden aktiv auseinander zu setzten und auch\r\nregelmässig sich in Mindfulness zu üben voraus. Dieses Modul kann unabhängig der\r\neigenen Weltanschaudung besucht werden.Wichtiger Bestandteil der\r\nUnterrichtseinheiten werden unterschiedliche Mindfulness-Praktiken sein wie Sitz- (z.B.\r\nGegenstandslose Meditation, Open Monitoring, diverse Atemübungen,\r\nCompassion/Metta Meditation, Body Scan) und Bewegungsmeditationsformen (z.B.\r\nYoga, Gehmeditation) Aber auch innovative Ansätze aus dem Improvisationstheater,\r\nCoaching und Leadership kommen zur Anwendung. «Mindfulness is a skill», welches\r\nsomit erlernbar ist und mit Hilfe von regelmässiger Übung wie ein Muskel im Rahmen\r\neines Krafttrainings gestärkt wird.«Zwischen Reiz und Reaktion gibt es einen Raum. In\r\ndiesem Raum haben wir die Freiheit und die Macht, unsere Reaktion zu wählen. In\r\nunserer Reaktion liegen unser Wachstum und unsere Freiheit. (Prof. Viktor E. Frankl)\r\nDas Interesse an und die Bedeutung von Mindfulness hat seit rund 10 Jahren sowohl in\r\nder breiten Öffentlichkeit als auch in der Wissenschaftscommunity massiv zugenommen.\r\nDies zeigt sich z.B. dadurch, dass mittlerweile mehr als 10'000 wissenschaftliche Journal\r\nArtikel in den einschlägigen Datenbanken zu finden sind. Zahlreiche\r\nForschungsergebnisse belegen die positiven Auswirkungen der Mindfulness-Praxis wie:-\r\nDie Konzentrations- und Lernfähigkeit wird verbessert- Bewussterer und konstruktiverer\r\nUmgang mit Stress wird gefördert- Empathiefähigkeit nimmt zu und Entwicklung von\r\nemotionaler Intelligenz wird unterstützt- Psychische und physische Widerstandskraft wird\r\ngestärkt (Resilienz, Immunsystem)- Neuroplastizität: Mindfulness ist eine Fähigkeit, die\r\ndank Übung trainiert werden kann und dadurch verändert sich auch nachweislich die\r\nGehirnstrukturMedizinischer Hinweis: Zahlreiche Studien belegen zwar die positive\r\nWirkung der Achtsamkeitspraxis auf die mentale Gesundheit. Jedoch wird ein\r\nMindfulness Kurs nicht empfohlen, wenn eine Person z.B. gerade unter einer akuten\r\nDepression leidet. Falls Sie also wegen einem psychischen Leiden in Behandlung sein\r\nsollten, halten Sie bitte zuerst mit Ihrem Therapeuten/Arzt Rücksprache, bevor Sie sich\r\nzu diesem Wahlpflichtmodul anmelden.Es gibt immer mehr Unternehmen, die\r\nMindfulness als einen wesentlichen Bestandteil in ihren Entwicklungsprogrammen für\r\nFührungskräfte integriert haben. Darunter sind nicht nur technologieaffine Unternehmen\r\nwie Google, SAP, Facebook, Intel oder LinkedIn, sondern auch traditionellere\r\nOrganisationen wie Deutsche Post, Caritas, Daimler, Bosch, Axpo oder Ikea. Aber auch\r\nan immer mehr Universitäten (z.B. University of Oxford, Harvard Law School, London\r\nSchool of Economics oder Ludwig-Maximilians-Universität München) ist Mindfulness Teil\r\ndes Angebots.Inhaltich orientiert sich dieses Wahlpflichtmodul an folgenden etablierten\r\nMindfulness-Ansätzen: MBSR (Mindfulness Based Stress Reduction; Prof. Jon-Kabat\r\nZinn), SAM (Salzburger Achtsamkeitsmodell; Mindful Leader) und SIY (Search Inside\r\nYourself; das wohl weitverbreitetste Corporate Mindfulness Leadership Programm mit\r\nmehr als 50’000 Absolventen, das 2007 von Chad-Meng Tan bei Google entwickelt\r\nwurde).Bitte beachten Sie unbedingt die Details zur Blockveranstaltung vom 15.3.24 bis\r\n17.3.24 weiter unten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Mind.XX.pdf",
                },
                {
                  name: "Psychologie",
                  shortname: "w.BA.XX.2Psych.XX",
                  description:
                    "Die Studierenden gewinnen zu Beginn einen Überblick über die unterschiedlichen\r\nFachgebiete der Psychologie und kennen deren Schwerpunkte. Aufgrund dieser\r\nKenntnisse sind Sie anschliessend in der Lage daraus psychologische Fragestellungen\r\nzu entwickeln oder ein bestehendes psychologisches Experiment zu replizieren. Darüber\r\nhinaus können Sie dieses psychologische und methodische Wissen in ihren Berufsalltag\r\nintegrieren.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2Psych.XX.pdf",
                },
                {
                  name: "Retail Management",
                  shortname: "w.BA.XX.WPM-RET.XX",
                  description:
                    'Von stationärem Handel mit seinen typischen Filialisten, Franchiseorganisationen und\r\nVerbundgruppen bis hin zum Distanzhandel in Form von Onlineshops und Online-\r\nMarktplätzen bietet der Handel eine beeindruckende Vielfalt an Betriebsformen und\r\nvertraglichen Bindungen. Das Modul "Retail Management" gibt Einblicke in diese Vielfalt,\r\nermöglicht das Verständnis für diese Branche und gibt Hinweise und Tools zur Lösung\r\ntypischer strategischer und operativer Managementaufgaben für die Handelsmanager\r\nund Berater von morgen.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.WPM-RET.XX.pdf",
                },
                {
                  name: "Self Leadership",
                  shortname: "w.BA.XX.2SLS.XX",
                  description:
                    "«Be the change that you wish to see in the world.» (Mahatma Gandhi) «Führen kann\r\nnur, wer sich selbst führt.» (Urs Baldegger)Wer Andere erfolgreich führen möchte, darf\r\nzuerst die eigene Self Leadership Kompetenz stärken. In diesem Modul lernen\r\nStudierende anhand konkreter Instrumente und Übungen, wie es geht selbst gesteckte\r\nZiele zu erreichen und ua. sich seiner SELBST BEWUSSTER zu werden.Voraussetzung\r\nist eine hohe intrinsische Motivation sowie eine aktive Mitarbeit. Wir wenden\r\nunterschiedliche Aspekte der Positiven Psychologie, der Leadership Forschung, des\r\nBusiness-Coachings, des Mentaltrainings (Resilienz/Spitzensport) und Mindfulness an.\r\nUnbedingte Beachtung der Anwesenheitsplicht/zwingende Präsenzzeit (Daten siehe\r\nunten). ///Feedback von Studierenden aus vergangenen Semestern: «Dieses Modul hat\r\nmir wirklich Spass gemacht und gehört definitiv zu meinen ZHAW-Highlights.»«Die\r\nStimmung war sehr positiv. Wenn man zusammen lachen kann, ist schon Vieles\r\nerreicht.»«Normalerweise bezahlt man viel Geld für solche Coachings und Inputs im\r\nBereich Self Leadership. Ich bin sehr dankbar, dass die ZHAW dies anhand eines\r\nWahlpflichtmoduls anbietet und ich freue mich sogar auf die Bearbeitung der\r\nLeistungsnachweise.»«Bis anhin hatte ich mein Privat- und Studentenleben\r\nauseinandergehalten. Das Modul Self-Leadership hat mich dazu bewegt, meine\r\nauthentische Persönlichkeit zu leben und mir so geholfen einen guten Umgang mit\r\nmeinen früheren Zweifeln zu entwickeln.»Bitte beachten Sie die Informationen zur\r\nPräsenzpflicht weiter unten",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2SLS.XX.pdf",
                },
                {
                  name: "Supply Chain Management",
                  shortname: "w.BA.XX.2SCM.XX",
                  description:
                    'The aim of this elective module is to provide students with a deeper understanding of\r\ncross-functional tasks and how important it is to break down functional silos to be\r\nsuccessful in today’s complex business world. This is done with the help of "The Fresh\r\nConnection" (www.thefreshconnection.biz), an extensive supply chain management\r\nsimulation, which is currently also used by MIT and other well-known universities to\r\nillustrate and teach the importance of cross-functional thinking. In groups of four,\r\nstudents will need to make several strategic and tactical decisions in their roles as VP\r\nSales, VP Purchasing, VP Supply Chain, or VP Operations. The simulation consists of\r\nsix rounds, with each round becoming increasingly complex.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2SCM.XX.pdf",
                },
                {
                  name: "Technologietrends in der Informatik",
                  shortname: "w.BA.XX.2TI.XX",
                  description:
                    'In diesem Modul werden ausgewählte Themen in ca. 3-Wochen-Blöcke eingeführt. Pro\r\nThemenblock git es eine fakultative Projektarbeit. Als Leistungsnachweis findet eine\r\nmündliche Prüfung statt, an der die Ergebnisse einer Projektarbeit besprochen werden\r\nfalls ein Projekt bearbeitet wurde (was ca. 1/3 der Prüfungszeit in Anspruch nimmt).\r\nPrüfungsrelevant ist auf jeden Fall der gesamte Stoff aller Themenblöcke.Beispiele von\r\nmöglichen Themenblöcken sind:- Relevante F&E als Teil der BSc Thesis: Tipps und\r\nTricks (und Auffrischungen aus dem wissenschaftlichem Arbeiten-Modul) zum\r\nAufpeppen der eigenen BSc Thesis.- Auswirkungen von Technologien auf die\r\nGesellschaft: Am Beispiel vom Smartphone verfolgen wir die Fragen wie sich\r\nTechnologien auf unseren Alltag auswirken und wie dies untersucht werden kann.-\r\nChatbot mit Dialogflow bauen: Wie gestaltet sich ein Chatbot, welcher als Intervention\r\ngewisse Ziele verfolgen soll? Zum Beispiel soll ein Chatbot zur Förderung einer Therapie\r\nZustände erfassen und Handlungsempfehlungen ausprechen können. Wie kann solch\r\nein Chatbot methodisch ausgearbeitet werden?- Transformer-Modellen: GPT-3, Dall-E\r\nund ähnlich können mittels Fine-Tuning zu spezifischen Aufgaben "trainiert" werden. Wir\r\nzeigen, wie die Fine-Tuning-Datensätze mithilfe von NLP (Spacy, NER, Triple Extraction,\r\nSentiment-Analysen u.ä.) erzeugt werden können, um bestimmtes Transformer-\r\nVerhalten erzeugen zu können.- Visual Computing: Am Beispiel von\r\nGebärdensprachenerkennung wird ein Prototyp gebaut, welcher ausgewählte Gebärde\r\nerkannt und automatisch als Wort angezeigt wird.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2TI.XX.pdf",
                },
                {
                  name: "Use Cases für das Metaverse",
                  shortname: "w.BA.XX.WPM-UCM.XX",
                  description:
                    "Dieses Modul beschäftigt sich mit Anwendungen in virtuellen Welten (-> Metaverse). Aus\r\ntechnologischer Sicht werden Virtual und Augmented Reality thematisiert. Dazu kommen\r\nje nach Anwendung NFTs aus der Blockchain-Welt. Die Anwendungsdomänen sind\r\nsoziale Interaktion (e.g., dating apps), Business & Productivity (e.g., Meetings,\r\nCollaboration) und Gaming&Culture (e.g., Spatial, MarineVerse). Ein Teil der\r\nAnwendungen können Browser-basiert ausprobiert und getestet werden. Andere\r\nAnwendungen sind auch mit VR-Brillen verfügbar. Der Fokus liegt nicht auf der\r\nProgrammierung von solchen Anwendungen. Vielmehr geht es darum, erste\r\nErfahrungen mit dieser Klasse von Anwendungen zu machen und sich die\r\nAnwendbarkeit in der Praxis im eigenen beruflichen Umfeld vorzustellen. Was jedoch\r\ndazugehört ist die Erstellung von personalisierten Avataren wie auch den Technologie-\r\nStack kennenzulernen. Obwohl der Fokus nicht auf der Programmierung liegt, ist ein\r\ngutes Verständnis und Interesse für Informatik erforderlich",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.WPM-UCM.XX.pdf",
                },
                {
                  name: "Wachstumsmarkt Gesundheit",
                  shortname: "w.BA.XX.2WaGe.XX",
                  description:
                    "Die Studierenden erklären aktuelle Brennpunkte des Spannungsfeldes „Gesundheit und\r\nGesellschaft“ (Gesundheitspolitik, Public Health, Gesundheitsökonomie, Recht) und\r\nkönnen deren Bedeutung in einen übergeordneten theoretischen Zusammenhang\r\nsetzen. Sie sind fähig, gesundheitsökonomisches und rechtliches Expertenwissen für die\r\nLösung von gesundheitsrelevanten Problemen in einem interdisziplinären Umfeld zu\r\nerarbeiten.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2WaGe.XX.pdf",
                },
              ],
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
          color: "#cfdbef",
          modules: [
            {
              name: "Wahlpflichtmodul 5",
              credits: 3,
              is_elective: true,
              wahlmodule: [
                {
                  name: "Angewandte Unternehmensethik",
                  shortname: "w.BA.XX.2AUE.XX",
                  description:
                    "Die Teilnehmer sollen die Fähigkeit zur ethischen Rechtfertigung von Entscheidungen im\r\nManagement von Organisationen erwerben. Sie sollen dabei die Möglichkeiten und\r\nGrenzen einer angewandten Ethik in Unternehmen beurteilen können. Sie sollen die\r\nwichtigsten Ansätze der Ethik kennen lernen und auf verschiedene Probleme,\r\nDilemmata und Risiken im beruflichen Alltag anwenden.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2AUE.XX.pdf",
                },
                {
                  name: "B2B Digital Marketing Strategy",
                  shortname: "w.BA.XX.WPM-B2B.XX",
                  description:
                    'Das Modul "B2B Digital Marketing Strategy" fokussiert auf einer erfolgsbestimmenden\r\nEigenschaft der Schweizer Wirtschaft: Dem international schlagkräftigen Marketing von\r\nspezifischen und oft einzigartigen Produkten und Dienstleistungen im B2B-Märkte. Viele\r\nUnternehmen nehmen in Ihrem Bereich eine global führende Rolle mit Ihren konsequent\r\nauf die Marktanforderungen ausgerichteten Produkten und Dienstleistungen ein. Dabei\r\ngeht damit regelmässig eine intensive Zusammenarbeit im Rahmen der Spezifikation\r\nund Realisierung der konkreten Lösung einher. Diese Zusammenarbeit verändert sich\r\naktuell grundlegend. Das Informations- und Kaufverhalten der Kunden in B2B-Märkten\r\nwird immer dynamischer und verlangt den immer umfassenderen Einsatz von digitalen\r\nMarketingansätzen. Als Ergebnis dieser wichtigen Veränderungen auf dem Markt der\r\nhäufig erklärungsbedürftigen Produkte und Dienstleistungen bilden sich neue Modelle\r\nund Praktiken des digitalen B2B-Marketings, welche die traditionellen Ansätze ergänzen\r\noder ablösen. Das Modul "B2B Digital Marketing Strategy" vermittelt daher sowohl einen\r\nÜberblick über die Besonderheiten des B2B-Marketings und -Vertriebs und die\r\nBedeutung der Erklärungsbedürftigkeit von Produkten und Dienstleistungen, greift dann\r\naber vor allem die Digitalisierung des B2B-Marketings auf. Die Studierenden lernen im\r\nModul die theoretischen Grundlagen des B2B-Marketings entlang der Aktionsfelder des\r\nB2B-Marketings kennen und wenden die erworbenen Kenntnisse an, um konkrete\r\nKonzepte für Sachleistungen oder Dienstleistungen im B2B Kontext zu entwickeln.\r\nAbsolvent:innen des Moduls sind in der Lage, die Ausgangslagen für Sach- und\r\nDienstleistungen zu analysieren, Strategien zu formulieren und Massnahmen für das\r\noperative und digitale B2B-Marketing abzuleiten.',
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.WPM-B2B.XX.pdf",
                },
                {
                  name: "Customer Insights",
                  shortname: "w.BA.XX.2CI.XX",
                  description:
                    "To develop products and services that meet customer needs, companies need to take\r\ndecisions based on customer insights. This module covers different quantitative and\r\nqualitative methods to generate customer insights. It focuses on real-world applications.\r\nStudents will work with data from experiments, surveys, and social media. This module is\r\nrecommended for students who plan to write an empirical bachelor's thesis.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2CI.XX.pdf",
                },
                {
                  name: "Digital Reputation Marketing",
                  shortname: "w.BA.XX.2DRM.XX",
                  description:
                    "In this module, students examine emerging trends that affect marketing communications.\r\nThis includes ways to identify, assess and manage reputation risks; an understanding of\r\nhow branding and reputation management are connected; ways to measure and plan an\r\nonline reputation; crisis management; topics such as influencer marketing and\r\nreputation, earned and owned media and analytics; and handling crisis communications.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DRM.XX.pdf",
                },
                {
                  name: "Digitalization and Law",
                  shortname: "w.BA.XX.2DigLaw.XX",
                  description:
                    "Everyone is talking about digitalization these days. But what does it actually mean for a\r\nbusiness to digitalize its business model or operations? What legal challenges and what\r\nopportunities exist when it comes to monetizing digital assets? What are typical contracts\r\nin the context of digitalization? How can you structure a platform business? How are new\r\ntechnologies such as Blockchain, Smartcontracts, AI, and autonomous driving, or\r\nphenomenons such as crowdsourcing, co-working spaces, big data, and freelancer\r\nplatforms affected by laws and regulations?This module addresses these and other\r\nquestions and focuses on legal but also practical considerations in the context of\r\ndigitalization. Includes industry guest speakers. The legal part amounts to 60-70% of the\r\nfinal grade.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DigLaw.XX.pdf",
                },
                {
                  name: "Doing Business in Asia Pacific",
                  shortname: "w.BA.XX.2DBusAP.XX",
                  description:
                    "Developments with relevance for business in Asia are increasingly in the news. Starting\r\nfrom the rise and innovation power of Asia, this module provides an overview of China\r\nand ASEAN countries. The aim is to gain an insight into the economy and digital\r\ntransformation in the focus region to enable future managers to make informed and\r\nappropriate decisions in their pursuit of business opportunities. Cases and business\r\nexamples will support students in visualizing and transferring the content of this module.\r\nStudents will further deepen their knowledge by engaging in a critical discourse on a\r\ncountry-specific topic. The module closes with a wrap-up and outlook.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DBusAP.XX.pdf",
                },
                {
                  name: "Doing Business in Europe",
                  shortname: "w.BA.XX.2DBusE.XX",
                  description:
                    "The module deals with issues that companies are facing when doing business in Europe.\r\nFrameworks and methods will be presented that help managers in assessing the\r\nattractiveness of foreign markets and designing an appropriate market entry strategy, as\r\nwell as a marketing strategy for European markets. Furthermore, strategies are analyzed\r\nfrom a foreign and local company perspective. Attention is also given to the design of\r\norganizational structures for business and the management of activities related to\r\nEurope. The module builds on the models and knowledge of earlier international\r\nbusiness and management courses.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2DBusE.XX.pdf",
                },
                {
                  name: "Emerging Markets, Field Trip",
                  shortname: "w.BA.XX.2EMFT.XX",
                  description:
                    "The destination of this Asian field trip is Singapore. Students acquire a first-hand\r\nunderstanding of the Asian market and gain an insight into the economy and business\r\npractices, including social and cultural aspects. They meet, communicate, and negotiate\r\nwith local business people, politicians, etc. and learn to understand them better, thus\r\nenhancing their intercultural competence.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2EMFT.XX.pdf",
                },
                {
                  name: "Empirical Methods in Economics",
                  shortname: "w.BA.XX.2EmpME.XX",
                  description:
                    "Vast amounts of data are collected across the globe on a daily basis: Insurance\r\ncompanies collect detailed information about the costs of their clients' last doctor or\r\nhospital visit and the pharmaceuticals they use; banks gather information on the income,\r\nwealth, credit-worthiness, and transactions of their clients, and tech giants (e.g., Apple,\r\nGoogle) harvest data on essentially any dimension of our personal life from consumption\r\npatterns to social interactions via email, social media, or mobile devices. One key\r\nadvantage of the improved data availability is that it allows policymakers, companies,\r\nand scientists alike to answer a series of highly relevant real-world questions. For\r\nexample, companies can use information about their clients to evaluate the effects of a\r\nrecently run ad campaign on their sales and profits; public health offices might be\r\ninterested in the impact of a smoking ban on cigarette consumption, and students might\r\nwonder if it is worthwhile to do a Master's degree in terms of their future income. On the\r\nother hand, answering such questions requires solid statistical knowledge on how to\r\nproperly analyze the newly available data. This module introduces students to the most\r\nimportant quantitative methods used in financial and economic research and provides an\r\nintroduction to the statistical software R. Students learn how to carry out an empirical\r\nproject in which they apply the techniques taught in class based on real-world data (e.g.,\r\nBloomberg, SwissHousehold Panel and DataSight, which will be provided in class to all\r\nparticipants). Topics include linear regression analysis and the analysis of longitudinal\r\ndata (panel data). Examples from the literature and computer tutorials offer hands-on\r\nexperience in utilizing the methods. The distinctive feature of the module is a learning-\r\nby-doing approach with a strong emphasis on the application of methods to real data and\r\nthe correct interpretation of results.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2EmpME.XX.pdf",
                },
                {
                  name: "Entrepreneurial Innovation",
                  shortname: "w.BA.XX.2EIno.XX",
                  description:
                    "Im Modul Entrepreneurial Innovation werden die Grundlagen von Unternehmertum und\r\neiner Start-up Gründung vermittelt. Die Studierenden werden dazu ermutigt, selbst als\r\nUnternehmerinnen oder Unternehmer zu wirken. Basierend auf einer bereits\r\nbestehenden oder neuen Geschäftsidee entwickeln sie ein eigenes Geschäftskonzept,\r\nwelches im Rahmen einer Geschäftsplanung / einer Business Plan Präsentation in aller\r\nKonsequenz durchdacht und systematisch geplant wird.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2EIno.XX.pdf",
                },
                {
                  name: "Environmental Economics and Politics",
                  shortname: "w.BA.XX.2EEP.XX",
                  description:
                    "Students become familiar with economic thinking regarding local and global\r\nenvironmental problems such as local air pollution, climate change, and dwindling\r\nresources and understand the political options of intervention.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2EEP.XX.pdf",
                },
                {
                  name: "Firms in the Global Economy",
                  shortname: "w.BA.XX.2FGE.XX",
                  description:
                    "One of the prominent features of the present economic environment is the increasing\r\neconomic integration and interdependence of consumers, producers, and countries on a\r\nglobal scale. This process is characterized by an increasing international division of labor\r\nand specialization, internationalization of production and particularly production\r\nprocesses in the form of global value chains (GVC), and a boom in inter- and intra-\r\nindustry trade. Internationalization of production and the utilization of GVCs play -\r\nespecially for Switzerland as a small open economy with limited resources - a crucial role\r\nin sustaining the competitiveness of domestic enterprises and thus for employment and\r\neconomic growth.The aim of this module is to provide students with an understanding of\r\nthe main economic causes of the internationalization of production, particularly the\r\n(re)location and spatial concentration (clustering) of production and the emergence of\r\nGVC in commercial production. Moreover, the module explains the determinants\r\nsuccessful corporate internationalization strategies such as exporting, importing,\r\noutsourcing, and foreign direct investment (vertical and horizontal). The module\r\ndescribes why firms that engage in the global economy (traders, outsourcers,\r\nmultinationals) are substantially larger and perform better than firms that do not interact\r\nwith foreign markets. Students will also gain an understanding of how economic\r\nintegration can lead to both winners and losers among businesses in the same industry,\r\nand recognize how intra-industry trade leads to new types of welfare gains such as\r\nhigher industry-level productivity and increased product variety.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2FGE.XX.pdf",
                },
                {
                  name: "History of Financial Crises",
                  shortname: "w.BA.XX.2HoFinC.XX",
                  description:
                    "From the past to the present, the capitalist economic order has been inherently\r\nintertwined with the emergence of economic and especially financial crises. While\r\nfinancial crises were restricted to only one or a couple of countries in the past, today they\r\narise on a global scale - corresponding to the evolution of a world-wide financial system.\r\nThis was shown prominently by the recent global crisis, whose severe economic\r\nconsequences are still felt. The aim of this module is to provide students with an\r\nunderstanding of the historic circumstances, the specific economic causes, and the\r\nsocio-economic and political consequences of selected financial crises in the past and\r\nthe present. Students are introduced to the general anatomy of a financial crisis, its\r\ntypical causes, such as overvaluation of future investment returns and herding behavior,\r\nand its socio-economic consequences. The differences, similarities, and connections\r\nbetween economic, financial and banking crises are discussed. This framework is\r\napplied to the analysis of selected financial crises throughout history, such as the\r\ncurrency devaluation in the late Roman Empire, the Tulip Mania bubble, the South Sea\r\nBubble, and the 19th and early 20th century financial crises in Europe and the US. Some\r\nprominent examples of post-war financial crises, such as the Wall street crash of 1987,\r\nthe 1997 Asian crisis, and the 2001 debt crises in Argentina are also examined. One of\r\nthe main topics of this module will be a comparison and discussion of the similarities as\r\nwell as the differences of the Great Depression and the breakdown of the Gold Standard\r\nin the 1920s and 1930s and the last financial crisis since 2008. It will be analyzed why\r\nboth crises had a global impact, why (hardly any) economists foresaw either crisis and\r\nwhy economic policy was able to manage the most recent crisis better.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2HoFinC.XX.pdf",
                },
                {
                  name: "Information, Incentives and Strategic Thinking",
                  shortname: "w.BA.XX.2IIST.XX",
                  description:
                    "How do competition and markets evolve if the various agents (e.g., consumers and\r\ncompanies) do not decide in the perfectly sophisticated manner suggested by textbook\r\neconomic theory, but rather are described by various behavioral traits and limited\r\ninformation processing abilities? This module addresses such questions by considering\r\nrecent state-of-art research on these topics.The module is designed as a seminar, with\r\nstudent presentations as its core. The module is designed for highly motivated students\r\nwho want to gain applied knowledge from the research frontier beyond what is covered\r\nin standard textbook-based courses. While the ultimate choice of topics will reflect\r\nstudent interests, the array of subjects includes • Digitalization and competition•\r\nCompetition with attention-constrained consumers• Advertising to behavioral\r\nconsumers• Product design and consumer information (“niche vs mass-market\r\nproducts”)",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2IIST.XX.pdf",
                },
                {
                  name: "M&A Integration Management",
                  shortname: "w.BA.XX.2MAI.XX",
                  description:
                    "M&As (Mergers and Acquisitions):Buying a company means making a big decision. In\r\nthis module, students learn how to plan and execute an acquisition project as well as\r\nhow to plan and implement the integration of a target company after its purchase.\r\nPreparing and implementing a company acquisition requires many resources and skills.\r\nWith the amount of financial and human resources employed, failure is not an option.\r\nThe module covers the following topics:- Project phases and stakeholders of an\r\nacquisition project- Success factors and stumbling blocks of integration management-\r\nUsing integration management for performance transformationGuest lecturers will share\r\ntheir transaction experience with students.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.2MAI.XX.pdf",
                },
                {
                  name: "Pre-Course MSc Management and Law",
                  shortname: "w.BA.XX.WPM-PML.XX",
                  description:
                    "Können Sie sich vorstellen, Ihren Bachelorabschluss als Sprungbrett für einen Master in\r\nManagement and Law zu nutzen? Hier finden Sie mehr dazu:\r\nhttps://www.zhaw.ch/de/sml/studium/master/management-and-law/. Schauen Sie sich\r\nauch das Video an: https://youtu.be/v3JhT4-QyyE?si=-2_cwaoIARbAGb9E.Mit dem Pre-\r\nCourse verschaffen Sie sich direkten Zugang zum Masterstudium in Management and\r\nLaw, das Ihnen ein weites Spektrum an Berufsperspektiven in rechtsnahen\r\nManagementfunktionen und in Bereichen wie Legal & Compliance, Regulatory, Contract\r\nManagement, IP Management, Competition Compliance, Supply Chain Compliance,\r\nLegal Risk Management, Data Privacy, Cyber Security, Legal Tech oder Forensic\r\nServices eröffnet.Der Kurs ist auf dieses Ziel zugeschnitten und vermittelt in kompakter\r\nForm das juristische Know-how und die rechtswissenschaftlichen Kenntnisse und\r\nFähigkeiten, welche für den MSc Management and Law relevant sind und die\r\nGrundlagen legen für ein erfolgreiches Masterstudium.Der Fokus liegt auf den folgenden\r\nKernfragen und Kernthemen: Wie funktioniert Recht? Wie entsteht Recht? Wie löst man\r\nStrafrechtsfälle? Wie ist Eigentum verfassungs-, straf- und privatrechtlich geschützt?\r\nGeistiges Eigentum - Grundlage unseres Wohlstands oder ausufernder Rechtsbereich?\r\nLizenzverträge - und wie sie sich gestalten lassen. Arbeitsverträge - und Grenzen der\r\nVertragsfreiheit. Internationales Privatrecht und grenzüberschreitende Kaufverträge.\r\nVölkerrecht - und wie es sich von nationalem Recht unterscheidet. Internationaler\r\nMenschenrechtsschutz. Europarecht - und seine Auswirkungen auf Schweizer\r\nUnternehmen. Interkulturelle Rechtsvergleichung - vertraut werden mit der juristischen\r\nWeltkarte.Das Masterstudium in Management and Law ist zweisprachig. Deshalb bietet\r\nauch der Pre-Course sowohl deutsch- als auch englischsprachige Unterrichtsblöcke.\r\nAbgeschlossen wird das Modul mit einer mündlichen Prüfung (Prüfungsgespräch auf\r\nDeutsch und Englisch).",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.WPM-PML.XX.pdf",
                },
                {
                  name: "Preparation for Proficiency",
                  shortname: "w.BA.XX.WPM-PrepP.XX",
                  description:
                    "This is a one-semester course which aims to: a) develop language skills at the lower C2\r\nlevel of the Common European Framework of Reference (CEFR) for Languages, and b)\r\nintroduce students to the Cambridge C2 Proficiency examination.",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/ModuleDescription_w.BA.XX.WPM-PrepP.XX.pdf",
                },
                {
                  name: "Rhetorik und Präsentationstechnik",
                  shortname: "w.BA.XX.2RPT.XX",
                  description:
                    "Dank Internet leben wir (wieder) in einer mündlichen Welt. Das gesprochene Wort ist\r\nsehr bedeutsam. Um in der Geschäftswelt bestehen zu können, muss man sich\r\nmündlich ausdrücken können. Das soll in diesem Modul geübt werden.In diesem Modul\r\nlernen Sie, wie Sie...... Ihre Argumente präzise formulieren und Ihr Publikum fesseln....\r\nkomplexe Inhalte verständlich und ansprechend aufbereiten.... mit Selbstvertrauen und\r\nCharisma vor Gruppen sprechen.... Präsentationstechnologien zu Ihrem Vorteil nutzen....\r\nIhr persönliches und berufliches Netzwerk durch überzeugende Kommunikation\r\nerweitern.... Ihre Körpersprache, Gestik und Mimik einsetzen können, um Ihre verbale\r\nKommunikation optimal zu unterstützen.Der Unterricht besteht aus theoretischen Inputs,\r\npraktischen Übungen sowie Raum für Diskussionen und individuelles Feedback.\r\nVerwandeln Sie Ihre Präsentationen und Reden in ein mächtiges Werkzeug, das Ihnen\r\nTüren öffnet!",
                  url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2RPT.XX.pdf",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  let information = {
    title: "Modultafel Bachelorstudiengang Wirtschaftsinformatik",
    subtitle: "Business Information Systems, Vollzeit, ab Herbstsemester 2021",
    infoHead: "Dies ist ein Informations-Text Beispiel",
    warningFoot: "Dies ist ein Warnungs-text Beispiel",
    infoFoot: "* = Dieses Modul wird in englischer Sprache durchgeführt",
  };

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

  // <------------------------------- Berechnung für Legende ------------------------------------------------->

  const uniqueGroups = {};

  all.forEach((semester) => {
    semester.semesterModules.forEach((module) => {
      const group = module.group;
      const color = module.color;

      if (!uniqueGroups[group]) {
        uniqueGroups[group] = { group, color };
      }
    });
  });

  const groupsArray = Object.values(uniqueGroups);
  console.log(groupsArray);
</script>

<!-- <------------------------------- Header ----------------------------------------------- -->

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
      {information.title}
    </h1>
    <h4 class="mb-3 secondTitle">
      {information.subtitle}
    </h4>
  </div>
  <img
    class="col-auto"
    id="zhawSmlLogo"
    src="images/logoSML.jpg"
    alt="Logo SML"
  />
</div>
<div class="row" id="headerRow">
  <div class="col-auto" id="headerColumn">
    <div class="row p-0" id="headerColumn">
      <h4 class="InfoText">
        Klicken Sie auf die farbigen Kästchen um die Modulbeschreibungen
        anzusehen.
      </h4>
      <h4 class="InfoTextRot mb-4">{information.warningFoot}</h4>
    </div>
  </div>
</div>

<!-- ------------------------------- Start Modultafel ---------------------------------- -->

<div class="custom-container">
  {#each all as semester}
    <div class="row">
      <div class="col-12 col-lg-1">
        <Semester
          semesterNumber={semester.number}
          totalCredits={calculateTotalCredits(semester)}
        />
      </div>

      <div class="col-lg-11">
        <div class="container-lg" id="modulContainer">
          <div class="row">
            {#each semester.semesterModules as group}
              {#each group.modules as module}
                <div class="col-xl-2 col-sm-4 col-md-3 col-6">
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
              {/each}
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<!-- <------------------------------- Legende ----------------------------------------------- -->

<div id="legendeModulgruppen">
  <h6 id="legendeTitle">Legende:</h6>
  <div class="col-xxl-6 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-12 p-0">
    <div class="row">
      {#each groupsArray as group}
        <div class="col-xl-2 col-lg-3 col-sm-3 col-md-3 col-4" id="legendeCol">
          <div
            class="card"
            id="legendeCard"
            style="background-color: {group.color}"
          >
            <div class="card-body" id="legendeCardBody">
              <p class="card-text" id="legendeCardText">{group.group}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- <------------------------------- Footer ----------------------------------------------- -->

<div class="row mt-3 footerRow">
  {information.infoFoot}
</div>
<div class="row footerRow">
  Drucktipps: Stellen Sie in der Druckansicht sicher, dass die Option
  "Querformat" aktiviert ist und die Seitenränder in den Seiteneigenschaften auf
  0 gesetzt sind.
</div>

<style>
  #modulContainer {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 0 !important;
  }

  #headerRow {
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 0px !important;
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

  .footerRow {
    width: 100%;
    padding-left: 5px !important;
  }

  #legendeTitle {
    padding-left: 2.5px !important;
    font-weight: bold;
  }

  #legendeModulgruppen {
    width: 100%;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  #legendeCard {
    min-height: 70px;
    max-width: 200px;
    padding-right: 5px;
  }

  #legendeCardBody {
    padding: 5px;
    display: flex;
    justify-content: center;
  }

  #legendeCol {
    padding-left: 2.5px !important;
  }

  #legendeCardText {
    display: flex;
    align-items: center;
  }

  /* ---- Media Queries Legende ---- */

  @media (max-width: 768px) {
    #legendeCard {
      margin-bottom: 5px;
    }
    #legendeCol {
      padding-left: 0px !important;
    }
    #legendeTitle {
      padding-left: 0px;
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
