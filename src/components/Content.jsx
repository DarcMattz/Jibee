import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const Content = () => {
    return (
        <div className="p-6 overflow-y-auto">
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
        </div>
    );
};

export default Content;
