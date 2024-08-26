import HeroBg from '../assets/hero.jpg'
const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${HeroBg})` }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content of the Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <div className='bg-[#eff6ff57] p-10 rounded-md'>
        <h1 className="text-4xl font-bold text-center">Welcome to Primacy Fitness</h1>
        <p className="mt-4 text-lg text-center">Your journey to better health starts here</p>
        </div>
      </div>
    </div>
    );
};

export default Hero;