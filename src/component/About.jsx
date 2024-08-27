import AboutImg from '../assets/about.jpg';

const About = () => {
    return (
        <section className="bg-abtBgColor py-28 lg:py-44">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start justify-between  mx-3 lg:mx-20">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                        <h2 className="text-2xl text-aboutTxtColor uppercase mb-10">About</h2>
                        <p className="text-lg text-gray-700 leading-relaxed tracking-wider font-normal">
                            <span className="block text-2xl lg:text-4xl font-bold uppercase">
                                I am Carolina, with about 7 years of experience as a personal trainer.
                            </span>
                            <br></br> 
                            I am committed to providing specialized support that goes beyond physical training.
                            My focus is to ensure that each client receives the guidance, motivation, and follow-up necessary to achieve their goals. 
                            <br></br> 
                            <br></br> 
                            At Primacy, we believe that each person is unique and deserves a training plan that reflects their individual needs and objectives. We are a studio where personalized attention is our key differentiator.
                        </p>
                    </div>
                    <div className="w-">
                        <img src={AboutImg} alt="About Carolina" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
