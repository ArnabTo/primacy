import { Link } from 'react-scroll';
import HeroBg from '../assets/banner.jpg'
const Hero = () => {
    return (
        // <div className="relative w-full h-[40rem] lg:h-screen">
        //     <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white lg:mt-64">
        //         <div className='flex flex-col justify-center items-center space-y-10'>
        //             <h1 className="text-5xl lg:text-6xl font-extrabold text-center font-tinos">O seu Novo Começo <span className='text-heroHeadline'>Começa Aqui!</span></h1>
        //             <p className="mt-4 text-xl lg:text-2xl text-center font-tinos md:px-16">Descubra como nosso estúdio pode transformar a sua abordagem ao fitness e <br className='hidden lg:block'></br> ao bem-estar</p>
        //             <Link className='lg:w-2/3 flex justify-center font-tinos' to='contact-section' smooth={true} duration={2000}>
        //                 <button
        //                     className="bg-white text-textColor px-4 py-3 rounded-md text-base font-semibold font-tinoss hover:bg-btnBg hover:text-white transition-all delay-75">Marque a sua avaliação gratuita</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroBg})` }}
        >
            {/* Backdrop Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content on top of the backdrop */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white pt-32 lg:pt-64">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-center font-tinos">O seu Novo Começo <span className='text-heroHeadline'>Começa Aqui!</span></h1>
                <p className="mt-4 text-xl lg:text-2xl text-center font-tinos mb-10 md:px-16">Descubra como nosso estúdio pode transformar a sua abordagem ao fitness e <br className='hidden lg:block'></br> ao bem-estar</p>
                <Link className='lg:w-2/3 flex justify-center font-tinos' to='contact-section' smooth={true} duration={2000}>
                    <button
                        className="bg-white text-textColor px-4 py-3 rounded-md text-base font-semibold font-tinoss hover:bg-btnBg hover:text-white transition-all delay-75">Marque a sua avaliação gratuita</button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;

