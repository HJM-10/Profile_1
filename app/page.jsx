import Opening from "./opening";

const work = [
  { title: "DNF Trading", type: "3D product configuration", image: "/instruments.png", description: "An ordering platform with a real-time product customizer. My work included the customer interface, admin dashboard, and instrument options." },
  { title: "Hotel Javson", type: "Hospitality website concept", image: "/hotel.jpg", description: "A cinematic website prototype with a filterable gallery and an interactive stay planner. The redesign was developed as a pitch." },
  { title: "Wilton Dental", type: "Multi-page redesign concept", image: "/tooth.webp", description: "A site audit and responsive redesign with treatment pages, team profiles, and a guided care journey." },
];

export default function Home() {
  return (
    <>
      <Opening />
      <main id="portfolio">
        <section id="about" className="about">
          <header className="bar">
            <a className="brand" href="#opening">Huzaifa Jayyad</a>
            <nav aria-label="Main navigation">
              <a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a>
            </nav>
          </header>
          <div className="engraving">
            <div className="engraving-inset" aria-hidden="true" />
            <div className="intro">
              <p>About</p>
              <h1>I build web apps, mobile apps, and automations.</h1>
            </div>
          </div>
        </section>
        <section id="work" className="work">
          <h2>Selected work</h2>
          <div className="projects">
            {work.map((project) => (
              <article key={project.title}>
                <img src={project.image} alt="" />
                <p className="type">{project.type}</p>
                <h3>{project.title}</h3>
                <details>
                  <summary>Project details</summary>
                  <p>{project.description}</p>
                </details>
              </article>
            ))}
          </div>
        </section>
        <footer id="contact">
          <h2>Let’s talk.</h2>
          <a href="https://github.com/HJM-10">Find me on GitHub</a>
        </footer>
      </main>
    </>
  );
}
