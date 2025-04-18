import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

const Content = () => {
    return (
        // <div className="w-full h-full bg-amber-300 p-6 lg:p-12">
        <div className="w-1/2 h-full p-6 lg:p-12">
            <section
                id="about"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 h-screen "
            >
                <About />
            </section>
            <section
                id="projects"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 h-screen"
            >
                <Projects />
            </section>
            <section
                id="contact"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 h-screen"
            >
                <Contact />
            </section>
        </div>
    );
};

export default Content;
