import HeroBg2 from '../assets/hero2.jpg'

const Hero = () => {
    return (
        <div className="relative w-full h-[40rem] lg:h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${HeroBg2})` }}>
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
                <div className='flex flex-col justify-center items-center space-y-5'>
                    <h1 className="text-5xl font-extrabold text-center font-lato">Your New Beginning <span className='text-heroHeadline'>Starts Here!</span></h1>
                    <p className="mt-4 text-xl text-center font-lato">Discover how our studio can transform your approach to fitness <br></br> and well-being</p>
                    <button
                        className="bg-white lg:w-1/3 text-textColor px-4 py-3 rounded-md text-base font-semibold font-lato hover:bg-btnBg hover:text-white transition-all delay-75">
                            <a href='#'>Book Your Free Evaluation</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;