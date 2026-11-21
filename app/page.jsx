import Opening from "./opening";
import ProjectArchive from "./project-archive";
import ScrollMotion from "./scroll-motion";

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
              <a href="#about">About</a><a href="#all-projects">Projects</a><a href="#contact">Contact</a>
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
            <a href="#all-projects">Explore projects</a>
          </div>
          <div className="services">
            <div><h3>Web apps</h3><p>Dashboards, booking, and internal tools.</p></div>
            <div><h3>Mobile apps</h3><p>Flutter and React Native experiences.</p></div>
            <div><h3>Interactive websites</h3><p>Responsive prototypes and product showcases.</p></div>
          </div>
        </section>

        <ProjectArchive />

        <footer id="contact" data-scroll-scene>
          <h2>LET’S TALK.</h2>
          <div className="footer-actions"><a href="https://github.com/HJM-10">GitHub</a><a href="#all-projects">Projects</a><a href="#opening">Back to top</a></div>
          <p>Huzaifa Jayyad · Full-stack developer</p>
        </footer>
      </main>
    </>
  );
}
