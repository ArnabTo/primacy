import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Testimonials />
        </div>
    );
};

export default Home;