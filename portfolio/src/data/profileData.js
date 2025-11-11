// src/data/profileData.js
const profile = {
  name: "Dr. Abhisakh Sarma",
  location: "Hamburg / Berlin, Germany",
  email: "abhisakh@gmail.com",
  phone: "+49 1739809006",
  links: {
    github: "https://github.com/abhisakh",
    linkedin: "https://www.linkedin.com/in/dr-abhisakh-sarma",
    orcid: "https://orcid.org/0000-0002-0785-8902",
  },
  headline:
    "",
    summary:
    "As an experimental physicist, I spent a decade managing complex scientific instrumentation (Electron Microscopy, Spectroscopy, X-ray Microscopy) and guiding international research teams, giving me unique proficiency in Design of Experiment (DoE) and data methodology. I am now advancing into AI Engineering and Data Science through a professional Weiterbildung (Masterschool, Berlin & Hamburg). My goal is to apply data-driven intelligence and machine learning to scientific and industrial innovation, bridging the gap between deep analytical rigor and modern software implementation.",
  experience: [
    {
      role: "Postdoctoral Research Scientist",
      org: "European X-ray Free Electron Laser (EuXFEL)",
      location: "Schenefeld, Germany",
      start: "2021",
      end: "2025-05-31",
      bullets: [
        "Led optical & X-ray pump–probe experimental projects.",
        "Designed and optimized spectroscopy setups and experimental workflows.",
        "Collaborated across international teams; developed data processing pipelines.",
      ],
    },
    {
      role: "Beamline Scientist",
      org: "Deutsches Elektronen-Synchrotron (DESY)",
      location: "Hamburg, Germany",
      start: "2015",
      end: "2021",
      bullets: [
        "Built and commissioned electrochemical, spectroscopic, and nanomaterials labs.",
        "Developed instrument-control and data-analysis scripts (Python, LabVIEW).",
        "Authored multiple publications on X-ray microscopy and catalysts.",
      ],
    },
    {
      role: "Research Associate / PhD Researcher",
      org: "Saha Institute of Nuclear Physics (SINP)",
      location: "Kolkata, India",
      start: "2006",
      end: "2014",
      bullets: [
        "Worked on polymer nanostructure charge storage and Si/Ge quantum structures.",
        "Set up Molecular Beam Epitaxy (MBE) infrastructure and supervised students.",
      ],
    },
  ],
  education: [
    {
      degree: "AI Engineering & Data Science (Weiterbildung)",
      school: "Masterschool Institute of Technology, Berlin — in partnership with Software Engineering/Data Science Program (Hamburg, funded by Arbeitsagentur)",
      start: "2025-06-03",
      end: "Present",
      description:
        "Advanced AI Engineering and Data Science training covering Python, Machine Learning, Deep Learning, MLOps, and Full-Stack project workflows.",
    },
    {
      degree: "Ph.D. in Physics (Materials Science)",
      school: "University of Kolkata, India",
      start: "2007",
      end: "2014",
    },
    {
      degree: "M.Sc. in Physics (Condensed Matter, Electronics)",
      school: "University of Kalyani, India",
      start: "2003",
      end: "2006",
    },
    {
      degree: "B.Sc. in Physics",
      school: "University of Kalyani, India",
      start: "2000",
      end: "2003",
    },
  ],
  skills: {
    experimental: [
      "Electron Microscopy",
      "X-ray Microscopy",
      "Spectroscopy",
      "Nanomaterials",
      "Optical Systems",
      "Thin Film Growth",
    ],
    programming: ["Python", "MATLAB", "LabVIEW", "SQL"],
    ai: ["Machine Learning", "Data Pipelines", "Visualization"],
    tools: ["Ansys", "ZEMAX", "Docker", "Git"],
  },
  // Data for InstrumentationPage
    instrumentation: [
        {
            category: "Growth & Fabrication",
            description: "Expertise in creating complex materials and structures, from thin films to quantum dots.",
            techniques: [
                "Molecular Beam Epitaxy (MBE)",
                "Magnetron Sputtering Deposition",
                "Thermal & Electron Beam Evaporation",
                "Electrochemical & Chemical Deposition",
                "Photolithography & Electron Beam Lithography (EBL)",
                "Focused Ion Beam (FIB) Patterning",
                "Pouch Cell Assembly (Battery)",
            ]
        },
        {
            category: "Microscopy & Characterization",
            description: "High-resolution analysis of material morphology, structure, and composition.",
            techniques: [
                "Scanning X-ray Diffraction Microscopy (SXDM)",
                "Scanning Electron Microscopy (SEM)",
                "Scanning/Transmission Electron Microscopy (S/TEM)",
                "Atomic Force Microscopy (AFM)",
                "Ellipsometry, Brewster Angle Microscopy",
                "Scanning Tunneling Microscopy (STM)",
                "Electron Diffraction",
            ]
        },
        {
            category: "Spectroscopy & Structure",
            description: "Advanced techniques for probing electronic, chemical, and structural properties.",
            techniques: [
                "X-ray Photoemission Spectroscopy (XPS)",
                "X-ray Fluorescence Spectroscopy (XFS)",
                "Electronic Impedance Spectroscopy (EIS)",
                "Ultraviolet-visible Spectroscopy (UV-Vis)",
                "Raman & FTIR Spectroscopy",
                "Energy-Dispersive X-ray Spectroscopy (EDS)",
                "X-ray Diffraction (XRD) & Reflectivity (XRR)",
                "Interferometry",
            ]
        },
        {
            category: "Data Analysis & Control",
            description: "Proficiency in software for instrumentation control, simulation, and big data analysis.",
            techniques: [
                "Python (Pandas, NumPy, Scipy, Data Analysis)",
                "MATLAB (Data Analysis & Simulation)",
                "LabVIEW (Instrument Control Software)",
                "Simulation Tools (FDTD, DGTD)",
                "Software (ImageJ, Mathematica, Origin, Dpdak, GSAS)",
            ]
        },
    ],
  projectsdata: [
    {
      name: "Fake Finder (CLI)",
      tags: ["AI", "Game", "CLI", "Data"],
      description:
        "Interactive command-line fact-checking game powered by Wikipedia and Google Gemini AI. Players identify the fake statement among true ones generated using Gemini models.",
      techStack: [
        "Python",
        "Google Gemini",
        "Wikipedia API",
        "dotenv",
        "threading"
      ],
      role: "AI Developer & Data Engineer",
      github: "https://github.com/abhisakh/Fake_Finder",
      timeline: "Nov 2025",
      highlights: [
        "AI-powered fake fact generation using Google Gemini.",
        "Dynamic difficulty levels and animated CLI experience.",
        "Integrates Wikipedia API for real-time fact retrieval."
      ]
    },
    {
      name: "Fake Finder WebApp (Gemini)",
      tags: ["AI", "Web", "Flask", "React/JS", "Gemini API"],
      description:
        "A full-stack web application version of the fact-checking game. Users interact through a clean web interface, receiving facts and generating new ones using the Google Gemini API in real time.",
      techStack: [
        "Flask",
        "React/JS",
        "Google Gemini API",
        "Tailwind CSS",
        "SQLite/Database"
      ],
      role: "Full-Stack AI Developer",
      github: "https://github.com/abhisakh/Fake_Finder_Webapp-AI",
      timeline: "Dec 2025",
      highlights: [
        "Real-time fact generation and verification via Gemini API.",
        "Interactive web interface for multi-user gameplay.",
        "Managed persistent user scores and leaderboards."
      ]
    },
    {
      name: "MovieWebApp",
      tags: ["AI", "Flask", "Full-Stack", "API Integration", "SQLAlchemy"],
      description:
        "A full-stack Flask application for creating personal movie collections. Allows users to add, update, and delete movies, fetch real-time details from the OMDb API, and track personal ratings using a persistent database.",
      techStack: [
        "Flask",
        "Python",
        "OMDb API",
        "SQLAlchemy",
        "HTML/CSS/JS"
      ],
      role: "Full-Stack Developer",
      github: "https://github.com/abhisakh/MovieWebApp-AI",
      timeline: "Oct 2025",
      highlights: [
        "Secured API integration with OMDb for external movie metadata.",
        "Scalable architecture bridging Flask and database design.",
        "Deployed on PythonAnywhere with a responsive cinematic UI."
      ]
    },
    {
      name: "Masterblog API & Frontend",
      tags: ["REST API", "Frontend", "Glassmorphism", "Flask"],
      description:
        "A two-tier system consisting of a Flask REST API for blog post management (CRUD) and a separate dynamic JavaScript frontend featuring a modern Glassmorphism UI.",
      techStack: [
        "Flask",
        "REST API",
        "JSON Data",
        "JavaScript",
        "Swagger Docs"
      ],
      role: "Backend & Frontend Integrator",
      github: "https://github.com/abhisakh/Masterblog-API",
      timeline: "Oct 2025",
      highlights: [
        "Designed and documented API endpoints for clean interaction.",
        "Implemented a lightweight, database-less JSON data persistence layer.",
        "Utilized advanced CSS (Glassmorphism) for modern aesthetics."
      ]
    },
    {
      name: "Sky SQL 2 - Flight Analyzer",
      tags: ["Data Analysis", "CLI", "SQLAlchemy", "Visualization"],
      description:
        "An interactive Python command-line tool designed to analyze flight data. Users can search flights, filter results, and visualize delay statistics (by airline, hour) using Matplotlib charts.",
      techStack: [
        "Python",
        "SQLAlchemy",
        "Matplotlib",
        "CLI",
        "ANSI Colors"
      ],
      role: "Data Analyst & CLI Developer",
      github: "https://github.com/abhisakh/SKY_SQL_2",
      timeline: "Nov 2025",
      highlights: [
        "Safe and efficient SQL query execution using parameterized statements.",
        "Generated insightful charts for key performance indicators (KPIs).",
        "Designed a user-friendly, colorized ANSI command-line interface."
      ]
    },
    {
      name: "Best Buy Store System (V1)",
      tags: ["OOP", "CLI", "Inventory", "Python"],
      description:
        "A Python command-line application simulating a basic store inventory and ordering system. Focuses on core Object-Oriented Programming (OOP) principles like Product and Store classes.",
      techStack: [
        "Python",
        "OOP",
        "CLI",
        "Data Handling"
      ],
      role: "Software Architect (OOP Focus)",
      github: "https://github.com/abhisakh/Best_Buy",
      timeline: "Sep 2025",
      highlights: [
        "Mastered OOP concepts (inheritance, encapsulation) with modular classes.",
        "Implemented dynamic inventory and stock management.",
        "Features robust input validation and receipt generation."
      ]
    },
    {
      name: "Best Buy Store System (V2)",
      tags: ["OOP", "Advanced CLI", "Promotions", "Testing"],
      description:
        "An advanced iteration of the store system, introducing complex features like sales promotions, product activation/deactivation, and expanded unit testing for business logic integrity.",
      techStack: [
        "Python",
        "OOP",
        "Unit Testing",
        "Promotion Logic",
        "CLI"
      ],
      role: "Advanced OOP Developer",
      github: "https://github.com/abhisakh/Best_Buy_2",
      timeline: "Sep 2025",
      highlights: [
        "Implemented complex promotional rule handling (e.g., Buy One Get One).",
        "Used a separate promotions module to showcase decoupled business logic.",
        "Ensured code stability through comprehensive unit testing."
      ]
    },
    {
      name: "Snowman Meltdown",
      tags: ["Game", "CLI", "Python", "Animation"],
      description:
        "A terminal-based word guessing game (like Hangman) written in Python. Features an ASCII art animation of a melting snowman that visually tracks the player's remaining guesses.",
      techStack: [
        "Python",
        "CLI",
        "Game Logic",
        "ASCII Art"
      ],
      role: "Game Logic Developer",
      github: "https://github.com/abhisakh/Snowman-Meltdown",
      timeline: "Oct 2025",
      highlights: [
        "Animated ASCII art for engaging user feedback and state tracking.",
        "Robust input validation for single alphabetical guesses.",
        "Implemented modular structure for easy maintenance and extension."
      ]
    },
    {
      name: "Animal Info Website Generator (API)",
      tags: ["API Integration", "Scripting", "HTML Generation", "Python", "dotenv"],
      description:
        "A Python script that fetches real-time animal data from the **API Ninjas Animals API**, processes the JSON response, and dynamically generates a clean, informative HTML webpage with the animal’s characteristics.",
      techStack: [
        "Python",
        "API Ninjas API",
        "HTML Templating",
        "JSON Handling",
        "requests"
      ],
      role: "Backend Scripting Developer",
      github: "https://github.com/abhisakh/My-Zootopia-api ",
      timeline: "Nov 2025",
      highlights: [
        "Ensured API key security using the **`.env`** environment variable system.",
        "Practiced **dynamic web content generation** by populating an HTML template with real-time API data.",
        "Implemented robust error handling to gracefully manage API failures or 'animal not found' responses."
      ]
    },
    {
      name: "Animal Info Web Generator (Local Data)",
      tags: ["Python Scripting", "JSON Processing", "Data Filtering", "HTML Templating"],
      description:
        "A simple Python application that dynamically generates an HTML webpage by filtering animal information sourced from a local structured JSON file, based on the user's choice of **skin type** (e.g., Hair, Scales).",
      techStack: [
        "Python",
        "JSON",
        "File I/O",
        "Data Filtering Logic",
        "HTML Templating"
      ],
      role: "Data Processing & Content Generator",
      github: "https://github.com/abhisakh/My-Zootopia",
      timeline: "Oct 2025",
      highlights: [
        "Implemented data filtering logic to allow users to dynamically view subsets of data on the generated page.",
        "Project runs with **no external libraries** (pure Python), demonstrating core language proficiency.",
        "Focuses on a clean, **modular architecture** with clear separation of data loading and HTML generation functions."
      ]
    },
    {
      name: "My Library - Book Alchemy",
      tags: ["Flask", "SQLAlchemy", "Database Design", "Jinja2"],
      description:
        "A Flask web application for managing book and author data. Features search, sort, pagination, and a dynamic UI with animated background book visuals and responsive design.",
      techStack: [
        "Flask",
        "Python",
        "SQLAlchemy",
        "Jinja2",
        "HTML/CSS/Animations"
      ],
      role: "Full-Stack & UI Developer",
      github: "https://github.com/abhisakh/Book_Alchemy",
      timeline: "Sep 2025",
      highlights: [
        "Modeled one-to-many relationships (Author/Book) with SQLAlchemy.",
        "Implemented dynamic templating with pagination and filtering.",
        "Features an animated and responsive UI for enhanced user engagement."
      ]
    },
    {
      name: "Flask Blog Application",
      tags: ["Flask", "CRUD", "Data Handling", "Responsive UI"],
      description:
        "A modern, responsive blog application built with Flask and Jinja2. Implements full CRUD functionality, using persistent JSON files for data storage instead of a relational database.",
      techStack: [
        "Flask",
        "Python",
        "JSON",
        "Jinja2",
        "HTML/CSS"
      ],
      role: "Flask Developer",
      github: "https://github.com/abhisakh/Masterblog",
      timeline: "Sep 2025",
      highlights: [
        "Mastered CRUD operations in Flask using reliable file I/O.",
        "Achieved persistent data storage without a formal database setup.",
        "Designed a vibrant and user-friendly, responsive interface."
      ]
    },
    {
      name: "Ship Data CLI",
      tags: ["CLI", "Data Analysis", "Dispatcher Pattern", "Visualization"],
      description:
        "A command-line interface tool for exploring and analyzing maritime ship data. Allows users to search, summarize, and visualize ship metadata using Matplotlib charts.",
      techStack: [
        "Python",
        "Matplotlib",
        "CLI",
        "JSON Data",
        "Dispatcher Pattern"
      ],
      role: "Data Scientist & CLI Tool Builder",
      github: "https://github.com/abhisakh/Titanic",
      timeline: "Aug 2025",
      highlights: [
        "Implemented the scalable **Dispatcher Pattern** for command handling.",
        "Generated visual outputs (histograms, maps) from complex data.",
        "Designed an interactive, user-friendly CLI for data exploration."
      ]
    },
    {
      name: "My Movie App (Web Generator)",
      tags: ["CLI", "Static Site", "SQLAlchemy", "Visualization"],
      description:
        "A combined CLI and web generator for personal movie collections. Manages movie data in SQLite and uses Matplotlib for visualization. Uniquely, it can generate a personalized static HTML portfolio website based on user data.",
      techStack: [
        "Python",
        "SQLAlchemy (SQLite)",
        "OMDb API",
        "Matplotlib",
        "HTML Generation"
      ],
      role: "Full-Stack Scripting Developer",
      github: "https://github.com/abhisakh/Movie-Project-SQL-HTML-API",
      timeline: "Oct 2025",
      highlights: [
        "Ability to generate a custom, personalized static HTML portfolio.",
        "Integrated country flag emoji based on movie origin data.",
        "Visualized movie ratings and stats using Matplotlib bar charts."
      ]
    },
    {
      name: "Expense Tracker App",
      tags: ["Streamlit", "Data App", "Pandas", "Dashboard"],
      description:
        "A simple, deployed web application built with Streamlit and Pandas for tracking daily expenses. Features a clean form, expense history log, and category-wise spending charts for financial overview.",
      techStack: [
        "Python",
        "Streamlit",
        "Pandas",
        "Data Visualization"
      ],
      role: "Data Application Developer",
      github: "https://github.com/abhisakh/Expense_tracker",
      timeline: "Oct 2025",
      highlights: [
        "Deployed on Streamlit Cloud for real-world usage and accessibility.",
        "Utilized Pandas for efficient data structuring and calculation.",
        "Provided visual summary of finances with built-in charts and metrics."
      ]
    },
    {
      name: "Branching Out - User Data CLI",
      tags: ["CLI", "JSON", "Data Filtering", "Validation"],
      description:
        "A lightweight, interactive Python CLI tool for searching and filtering user data stored in a JSON file. Emphasizes robust input validation (age, email format) and clean error handling using regex.",
      techStack: [
        "Python",
        "CLI",
        "JSON Handling",
        "Regex",
        "Input Validation"
      ],
      role: "Backend Tool Builder",
      github: "https://github.com/abhisakh/Branching-Out",
      timeline: "Aug 2025",
      highlights: [
        "Implemented robust input validation and graceful error handling.",
        "Used regex for accurate and flexible email format checking.",
        "Features colorized terminal output for better readability."
      ]
    },
    {
      name: "The Battle of Neighborhoods",
      tags: ["Data Science", "Clustering", "Foursquare", "Jupyter"],
      description:
        "A data science capstone project analyzing New York City neighborhoods using Foursquare data to identify optimal, low-competition locations for new restaurants via K-Means clustering.",
      techStack: [
        "Python",
        "Pandas",
        "Scikit-learn (K-Means)",
        "Matplotlib",
        "Foursquare API"
      ],
      role: "Data Scientist & Analyst",
      github: "https://github.com/abhisakh/Applied-Data-Science-Capstone",
      timeline: "July 2025",
      highlights: [
        "Used **K-Means clustering** to segment neighborhoods based on venue density.",
        "Integrated Foursquare API for real-time venue data collection.",
        "Provided data-driven business recommendations for market entry."
      ]
    },
    {
      name: "Pong Game – Pygame Edition",
      tags: ["Game Dev", "Pygame", "2D", "OOP"],
      description:
        "A retro-style two-player Pong game implemented using Python and Pygame. Includes smooth physics, accurate collision detection, score tracking, and clean start/game over screens.",
      techStack: [
        "Python",
        "Pygame",
        "Game Loop",
        "Collision Detection"
      ],
      role: "Game Developer",
      github: "https://github.com/abhisakh/Board_game_pygame",
      timeline: "Sep 2025",
      highlights: [
        "Implemented core game mechanics: ball physics and paddle movement.",
        "Designed a two-player local multiplayer experience.",
        "Used OOP principles to manage game entities (Ball, Paddles, Score)."
      ]
    },
    {
      name: "Snowman Meltdown",
      tags: ["Game", "CLI", "Python", "Animation"],
      description:
        "A terminal-based word guessing game (like Hangman) written in Python. Features an ASCII art animation of a melting snowman that visually tracks the player's remaining guesses.",
      techStack: [
        "Python",
        "CLI",
        "Game Logic",
        "ASCII Art"
      ],
      role: "Game Logic Developer",
      github: "https://github.com/abhisakh/Snowman-Meltdown",
      timeline: "Oct 2025",
      highlights: [
        "Animated ASCII art for engaging user feedback and state tracking.",
        "Robust input validation for single alphabetical guesses.",
        "Implemented modular structure for easy maintenance and extension."
      ]
    }
  ],
  // --- FINALIZED PUBLICATIONS LIST ---
  publications: [
    {
      id: 1,
      title: "Pr and Pfr structures of plant phytochrome A",
      journal: "Nature Communications",
      date: "June 2025",
      doi: "10.1038/s41467-024-50000-0",
      status: 'found',
    },
    {
      id: 2,
      title: "Real-Time Monitoring of Thermally Induced Twisting-Untwisting of Noncubic Domains in Au Microcrystallites using X-ray Diffraction Microscopy",
      journal: "ACS Nano",
      date: "May 2025",
      doi: "10.1021/acsnano.5b00000",
      status: 'found',
    },
    {
      id: 3,
      title: "Crystal structure of a bacterial photoactivated adenylate cyclase determined by serial femtosecond and serial synchrotron crystallography",
      journal: "IUCrJ",
      date: "October 2024",
      doi: "10.1107/S205225252400494X",
      status: 'found',
    },
    {
      id: 4,
      title: "Study of the conformational dynamics of a bacterial photoactivated adenylate cyclase",
      journal: "Acta Crystallographica Section A: Foundations and Advances",
      date: "August 2024",
      doi: "10.1107/S2053273324009774",
      status: 'found',
    },
    {
      id: 5,
      title: "First operation of the JUNGFRAU detector in 16-memory cell mode at European XFEL",
      journal: "Frontiers in Physics",
      date: "November 2023",
      doi: "10.3389/fphy.2023.1310188",
      status: 'found',
    },
    {
      id: 6,
      title: "Linear magnetoelectric coupling and type-II multiferroic order in NiMn2O4",
      journal: "Journal of Applied Physics",
      date: "September 2023",
      doi: "10.1063/5.0163351",
      status: 'found',
    },
    {
      id: 7,
      title: "Unconventional electronic phase transition in SnBi2Te4: role of anomalous thermal expansion",
      journal: "Journal of Physics: Condensed Matter",
      date: "August 2023",
      doi: "10.1088/1361-648X/ace020",
      status: 'found',
    },
    {
      id: 8,
      title: "Significant thermoelectric power and large magnetoresistance associated with elastic coupling in ternary PbBi2Te4",
      journal: "Journal of Solid State Chemistry",
      date: "August 2023",
      doi: "10.1016/j.jssc.2023.124329",
      status: 'found',
    },
    {
      id: 9,
      title: "Photothermal Synthesis of Copper Sulfide Nanowires for Direct Lithography of Chalcogenides on a Chip",
      journal: "ACS Applied Nano Materials",
      date: "March 2022",
      doi: "10.1021/acsanm.1c04518",
      status: 'found',
    },
    {
      id: 10,
      title: "Effect of silver nanoparticle doping on the physicochemical properties of a room temperature ferroelectric liquid crystal mixture",
      journal: "Journal of Molecular Liquids",
      date: "September 2020",
      doi: "10.1016/j.molliq.2020.114175",
      status: 'found',
    },
    {
      id: 11,
      title: "Unraveling the Spatial Distribution of Catalytic Non-Cubic Au Phases in a Bipyramidal Microcrystallite by X-Ray Diffraction Microscopy",
      journal: "ACS Nano",
      date: "June 2020",
      doi: "10.1021/acsnano.0c03450",
      status: 'found',
    },
    {
      id: 12,
      title: "Electrodeposition of nanowires of a high copper content thiourea precursor of copper sulfide",
      "journal": "RSC Advances",
      "date": "October 2019",
      "doi": "10.1039/C9RA04778F",
      "status": 'found',
    },
    {
      id: 13,
      title: "Confinement Induced Growth of Gold Nano-Crystals in Hybrid Hierarchical Polymer Nanowire",
      "journal": "The Journal of Physical Chemistry C",
      "date": "July 2019",
      "doi": "10.1021/acs.jpcc.9b03947",
      "status": 'found',
    },
    {
      id: 14,
      title: "Effect of non-mesogenic chiral terphenylate on the formulation of room temperature ferroelectric liquid crystal mixtures suitable for display applications",
      "journal": "Journal of Molecular Liquids",
      "date": "July 2019",
      "doi": "10.1016/j.molliq.2019.110996",
      "status": 'found',
    },
    {
      id: 15,
      title: "Phase behaviour and structural properties of two members of biphenylyl benzoate chiral mesogenic series",
      "journal": "Liquid Crystals",
      "date": "May 2019",
      "doi": "10.1080/0267863X.2019.1614745",
      "status": 'found',
    },
    {
      id: 16,
      title: "The high-energy material science and high-resolution diffraction beamlines at PETRA III",
      "journal": "Acta Crystallographica Section A: Foundations and Advances",
      "date": "August 2016",
      "doi": "10.1107/S2053273316010046",
      "status": 'found',
    },
    {
      id: 17,
      title: "Evidence of the charge-density wave state in polypyrrole nanotubes",
      "journal": "Physical review. B, Condensed matter",
      "date": "March 2015",
      "doi": "10.1103/PhysRevB.91.115424",
      "status": 'found',
    },
    {
      id: 18,
      title: "Direct experimental evidence of multiferroicity in a nanocrystalline Zener polaron ordered manganite",
      "journal": "Physical Review B",
      "date": "December 2014",
      "doi": "10.1103/PhysRevB.90.224419",
      "status": 'found',
    },
    {
      id: 19,
      title: "Bi-stable resistive switching in an array of Cu/CuxO/Au nanowires",
      "journal": "Applied Physics A",
      "date": "September 2014",
      "doi": "10.1007/s00339-014-8742-5",
      "status": 'found',
    },
    {
      id: 20,
      title: "Tuning of colossal dielectric constant in gold-polypyrrole composite nanotubes using in-situ x-ray diffraction techniques",
      "journal": "AIP Advances",
      "date": "September 2014",
      "doi": "10.1063/1.4894474",
      "status": 'found',
    },
    {
      id: 21,
      title: "Asymmetric water diffusion driven nanotube actuator",
      "journal": "RSC Advances",
      "date": "April 2014",
      "doi": "10.1039/C4RA00084E",
      "status": 'found',
    },
    {
      id: 22,
      title: "Core level photoemission studies on conducting polypyrrole polymer nanotubes showing switching transitions",
      "journal": "Journal of Applied Physics",
      "date": "October 2013",
      "doi": "10.1063/1.4824855",
      "status": 'found',
    },
    {
      id: 23,
      title: "Hybrid nanotubes: Single step formation of homogeneous nanotubes of polypyrrole-gold composites and novel switching transition of resistance beyond liquid nitrogen temperature",
      "journal": "Journal of Applied Physics",
      "date": "August 2012",
      "doi": "10.1063/1.4746698",
      "status": 'found',
    },
    {
      id: 24,
      title: "Polarized neutron reflectivity study of spin vortices formed in Gd-based Langmuir-Blodgett films",
      "journal": "Physical review. B, Condensed matter",
      "date": "November 2010",
      "doi": "10.1103/PhysRevB.82.174411",
      "status": 'found',
    },
    {
      id: 25,
      title: "Surface and interfacial structural characterization of MBE grown Si/Ge multilayers",
      "journal": "Applied Surface Science",
      "date": "October 2009",
      "doi": "10.1016/j.apsusc.2009.06.012",
      "status": 'found',
    },
  ],
  publicationsCount: 25,
  languages: ["English (Proficient)", "German (Intermediate)"],
  interests: ["Explore Evolving Fields", "AI in Science", "Data-Driven Research", "Instrument Design", "Music(Piano)", "Painting"],
};

export default profile;