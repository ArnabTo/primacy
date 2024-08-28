import About from "./About";
import Blogs from "./Blogs/Blogs";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Blogs />
            <Testimonials />
        </div>
    );
};

export default Home;