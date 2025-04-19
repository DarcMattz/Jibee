import About from "../pages/sections/About";
import Projects from "../pages/sections/Projects";
import Contact from "../pages/sections/Contact";

const Content = () => {
  return (
    // <div className="w-full h-full bg-amber-300 p-6 lg:p-12">
    <div className="w-full h-full p-6 lg:p-12 lg:pl-0">
      <section id="about" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
        <About />
      </section>
      <section id="projects" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
        <Projects />
      </section>
      <section id="contact" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
};

export default Content;
