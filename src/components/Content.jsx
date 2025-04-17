import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Content = () => {
  return (
    <div className="">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <About />
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <Contact />
      </section>
    </div>
  );
};

export default Content;
