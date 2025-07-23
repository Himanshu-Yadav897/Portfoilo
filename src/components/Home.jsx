import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
