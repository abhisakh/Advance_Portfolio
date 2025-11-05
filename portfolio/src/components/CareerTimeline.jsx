import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    date: "June 2025 – Present",
    title: "AI Engineering & Software Development Training",
    institution: "Masterschool Institute of Technology, Berlin",
    details:
      "Pursuing advanced training in AI Engineering and Software Development, focusing on machine learning, data science, and software architecture. Funded by Bundesagentur für Arbeit.",
  },
  {
    date: "June 2021 – May 2025",
    title: "Research Scientist | Instrumentation Group",
    institution: "European XFEL GmbH, Schenefeld, Germany",
    details:
      "Led time resolved optical laser pump X-ray laser probe experiments, involoved precision laser setups, and managed data acquisition pipelines for ultrafast X-ray experiments.",
  },
  {
    date: "2015 – 2021",
    title: "Postdoctoral Researcher",
    institution: "Deutsches Elektronen-Synchrotron DESY, Hamburg, Germany",
    details:
      "Sudied nanomaterial(energy materials) using different x-ray and optical techniques. Collaborated on international research projects and mentored graduate students.",
  },
  {
    date: "2011 – 2015",
    title: "Ph.D. in Experimental Physics",
    institution: "Saha Institute of Nuclear Physics (SINP)(University of Kolkata), India",
    details:
      "Thesis focused on laser-matter interactions and optical diagnostics of plasma and thin-film materials. Built experimental setups integrating laser and spectroscopic systems.",
  },
];

const CareerTimeline = () => {
  return (
    <section className="timeline">
      <h3>Career Timeline</h3>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p className="timeline-institution">{item.institution}</p>
              <span className="timeline-date">{item.date}</span>
              <p className="timeline-details">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;
