import { Link } from 'react-scroll';
import HeroBg1 from '../assets/hero.jpg'
import HeroBg2 from '../assets/hero2.jpg'
import HeroBg3 from '../assets/hero3.jpg'
import { Carousel } from 'antd';

const Hero = () => {
    return (

        <div className="relative w-full h-[40rem] lg:h-screen">
            <div>
                <Carousel autoplay autoplaySpeed={4000} className="w-full h-full">
                    <div className="w-full h-[40rem]">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <img className='w-full h-full' src={HeroBg1} />
                    </div>
                    <div className="w-full h-[40rem]">
                        <img className='w-full h-full' src={HeroBg2} />
                    </div>
                    <div className="w-full h-[40rem]">
                        <img className='w-full h-full' src={HeroBg3} />
                    </div>
                </Carousel>
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
                <div className='flex flex-col justify-center items-center space-y-5'>
                    <h1 className="text-5xl font-extrabold text-center font-lato">O seu Novo Começo <span className='text-heroHeadline'>Começa Aqui!</span></h1>
                    <p className="mt-4 text-xl text-center font-lato">Descubra como nosso estúdio pode transformar a sua abordagem ao fitness <br /> e ao bem-estar</p>
                    <button
                        className="bg-white lg:w-1/3 text-textColor px-4 py-3 rounded-md text-base font-semibold font-lato hover:bg-btnBg hover:text-white transition-all delay-75">
                        <Link to='contact-section' smooth={true} duration={2000}>Marque a sua avaliação gratuita</Link>
                    </button>
                </div>
            </div>
        </div>


        // <div className="relative w-full h-[40rem] lg:h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${HeroBg2})` }}>
        //     <div className="absolute inset-0 bg-black/50"></div>

        //     <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        //         <div className='flex flex-col justify-center items-center space-y-5'>
        //             <h1 className="text-5xl font-extrabold text-center font-lato">O seu Novo Começo  <span className='text-heroHeadline'>Começa Aqui!</span></h1>
        //             <p className="mt-4 text-xl text-center font-lato">Descubra como nosso estúdio pode transformar a sua abordagem ao fitness  <br></br> e ao bem-estar</p>
        //             <button
        //                 className="bg-white lg:w-1/3 text-textColor px-4 py-3 rounded-md text-base font-semibold font-lato hover:bg-btnBg hover:text-white transition-all delay-75">
        //                 <Link to='contact-section' smooth={true} duration={2000}>Marque a sua avaliação gratuita</Link>
        //             </button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Hero;


// import { Link } from 'react-scroll';
// import HeroBg2 from '../assets/hero2.jpg'
// import { Carousel } from 'antd';

// const Hero = () => {
//     return (
//         <div className="relative w-full h-[40rem] lg:h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${HeroBg2})` }}>
//             <div className="absolute inset-0 bg-black/50"></div>

//             <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
//                 <div className='flex flex-col justify-center items-center space-y-5'>
//                     <h1 className="text-5xl font-extrabold text-center font-lato">O seu Novo Começo  <span className='text-heroHeadline'>Começa Aqui!</span></h1>
//                     <p className="mt-4 text-xl text-center font-lato">Descubra como nosso estúdio pode transformar a sua abordagem ao fitness  <br></br> e ao bem-estar</p>
//                     <button
//                         className="bg-white lg:w-1/3 text-textColor px-4 py-3 rounded-md text-base font-semibold font-lato hover:bg-btnBg hover:text-white transition-all delay-75">
//                         <Link to='contact-section' smooth={true} duration={2000}>Marque a sua avaliação gratuita</Link>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

// import { Link } from 'react-scroll';
// import HeroBg1 from '../assets/hero.jpg';
// import HeroBg2 from '../assets/hero2.jpg';
// import HeroBg3 from '../assets/hero3.jpg';
// import { Carousel } from 'antd';

// const Hero = () => {
//     return (
//         <div className="relative w-full h-[40rem] lg:h-screen">
//             <Carousel autoplay effect="fade" className="w-full h-full">
//                 <div className="relative w-full h-[40rem] lg:h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${HeroBg1})` }}>
//                 </div>
//                 <div className="relative w-full h-[40rem] lg:h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${HeroBg2})` }}>
//                 </div>
//                 <div className="relative w-full h-[40rem] lg:h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${HeroBg3})` }}>
//                 </div>
//             </Carousel>

//             <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
//                 <div className='flex flex-col justify-center items-center space-y-5'>
//                     <h1 className="text-5xl font-extrabold text-center font-lato">O seu Novo Começo <span className='text-heroHeadline'>Começa Aqui!</span></h1>
//                     <p className="mt-4 text-xl text-center font-lato">Descubra como nosso estúdio pode transformar a sua abordagem ao fitness <br /> e ao bem-estar</p>
//                     <button
//                         className="bg-white lg:w-1/3 text-textColor px-4 py-3 rounded-md text-base font-semibold font-lato hover:bg-btnBg hover:text-white transition-all delay-75">
//                         <Link to='contact-section' smooth={true} duration={2000}>Marque a sua avaliação gratuita</Link>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;
