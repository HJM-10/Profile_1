import Opening from "./opening";
import FeaturedWork from "./featured-work";
import ProjectArchive from "./project-archive";
import ScrollMotion from "./scroll-motion";

const index = [
  { title: "DNF Trading", image: "/instruments.png", kind: "3D configurator" },
  { title: "PhishScan", image: "/showcase/phishscan.webp", kind: "Frontend preview with demo messages" },
  { title: "SialMail", image: "/showcase/sialmail.webp", kind: "Marketing frontend" },
  { title: "Personal AI Agent", image: "/showcase/personal-agent.webp", kind: "Gradio frontend" },
  { title: "NeuroSpatial-OS", image: "/showcase/neurospatial.webp", kind: "Research concept illustration" },
  { title: "GRIDGUARD PK", image: "/showcase/gridguard.webp", kind: "Research proposal illustration" },
];

export default function Home() {
  return (
    <>
      <ScrollMotion />
      <Opening />
      <main id="portfolio">
        <section id="about" className="about">
          <header className="bar">
            <a className="brand" href="#opening">Huzaifa Jayyad</a>
            <nav aria-label="Main navigation">
              <a href="#about">About</a><a href="#work">Featured</a><a href="#all-projects">All projects</a><a href="#contact">Contact</a>
            </nav>
          </header>
          <div className="paper-art" data-scroll-scene aria-hidden="true" />
          <div className="engraving" data-scroll-scene>
            <div className="engraving-inset" aria-hidden="true" />
            <h1>ABOUT</h1>
          </div>
        </section>

        <section className="manifesto" data-scroll-scene aria-labelledby="manifesto-title">
          <p className="kicker">Huzaifa Jayyad · Full-stack developer</p>
          <h2 id="manifesto-title">Where design<br />meets software.</h2>
          <div className="manifesto-bottom">
            <p>I build the interfaces people see and the workflows behind them. My work spans mobile apps, 3D product tools, and business websites.</p>
            <a href="#work">Explore work</a>
          </div>
          <div className="services">
            <div><h3>Web apps</h3><p>Dashboards, booking, and internal tools.</p></div>
            <div><h3>Mobile apps</h3><p>Flutter and React Native experiences.</p></div>
            <div><h3>Interactive websites</h3><p>Responsive prototypes and product showcases.</p></div>
          </div>
        </section>

        <section id="work" className="work" data-scroll-scene><FeaturedWork /></section>

        <section className="archive" id="index" data-scroll-scene>
          <div className="archive-ring">
            {index.map((project, i) => (
              <a className={`face face-${i + 1}`} key={project.title} href={`#study-${i + 1}`}>
                <img src={project.image} alt="" />
                <span>{project.title}</span>
              </a>
            ))}
            <h2>Work index</h2>
          </div>
          <div className="index-detail">
            {index.map((project, i) => (
              <article className="index-study" id={`study-${i + 1}`} key={project.title}>
                <img src={project.image} alt="" loading="lazy" />
                <div><p>{project.kind}</p><h3>{project.title}</h3><a href="#index">Back to index</a></div>
              </article>
            ))}
          </div>
        </section>

        <ProjectArchive />

        <footer id="contact" data-scroll-scene>
          <h2>LET’S TALK.</h2>
          <div className="footer-actions"><a href="https://github.com/HJM-10">GitHub</a><a href="#work">Selected work</a><a href="#opening">Back to top</a></div>
          <p>Huzaifa Jayyad · Full-stack developer</p>
        </footer>
      </main>
    </>
  );
}
