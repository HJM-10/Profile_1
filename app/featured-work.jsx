"use client";

import { useState } from "react";

const projects = [
  { title: "DNF Trading", category: "3D product configuration", image: "/instruments.png", note: "A working product customizer with an ordering flow and admin controls." },
  { title: "Hotel Javson", category: "Hospitality website concept", image: "/hotel.jpg", note: "A cinematic redesign concept for exploring the hotel and planning a stay." },
  { title: "Wilton Dental", category: "Multi-page redesign concept", image: "/tooth.webp", note: "Treatment pages, a guided care journey, and motion built around dental artwork." },
];

export default function FeaturedWork() {
  const [active, setActive] = useState(0);
  const activeProject = projects[active];

  function move(step) {
    setActive(previous => (previous + step + projects.length) % projects.length);
  }

  return (
    <>
      <h2>Featured projects</h2>
      <div className="feature-strip">
        {[-1, 0, 1].map(position => {
          const index = (active + position + projects.length) % projects.length;
          const project = projects[index];
          return (
            <button className={`feature feature-${position + 1}`} key={project.title} type="button" aria-pressed={position === 0} onClick={() => setActive(index)}>
              <img src={project.image} alt="" />
              <span>{project.title}</span>
            </button>
          );
        })}
      </div>
      <div className="feature-controls">
        <button type="button" onClick={() => move(-1)}>Previous</button>
        <div aria-live="polite"><h3>{activeProject.title}</h3><p>{activeProject.category}</p><p>{activeProject.note}</p></div>
        <button type="button" onClick={() => move(1)}>Next</button>
      </div>
    </>
  );
}
