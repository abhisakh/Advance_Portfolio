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
    "Experimental physicist transitioning into AI engineering and data-driven development (Masterschool, Berlin — started 03 Jun 2025).",
    summary:
    "I’m an experimental physicist with a strong background in spectroscopy, X-ray microscopy, and nanomaterials research — now advancing into AI Engineering and Data Science through professional Weiterbildung (Masterschool, Berlin & Hamburg, funded by Arbeitsagentur). My goal is to apply data-driven intelligence and machine learning to scientific and industrial innovation.",
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
      school: "University of Calcutta",
      start: "2007",
      end: "2014",
    },
    {
      degree: "M.Sc. in Physics (Electronics)",
      school: "University of Kalyani",
      start: "2003",
      end: "2006",
    },
    {
      degree: "B.Sc. in Physics",
      school: "University of Kalyani",
      start: "2000",
      end: "2003",
    },
  ],
  skills: {
    experimental: [
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
  publicationsCount: 23,
  languages: ["English (Proficient)", "German (Intermediate)"],
  interests: ["AI in Science", "Data-Driven Research", "Instrument Design", "Piano"],
};

export default profile;
