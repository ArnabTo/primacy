import { Link } from 'react-scroll';
import { Carousel } from 'antd';

const Hero = () => {
    return (
        <div className="relative w-full h-[40rem] lg:h-screen">
            <Carousel autoplay effect="fade" className="w-full h-full">
                <div className="relative w-full h-[40rem] lg:h-screen" id='carousel2-bg'>
                </div>
                <div className="relative w-full h-[40rem] lg:h-screen" id='carousel-bg'>
                </div>
                <div className="relative w-full h-[40rem] lg:h-screen" id='carousel3-bg'>
                </div>
            </Carousel>

            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white lg:mt-64">
                <div className='flex flex-col justify-center items-center space-y-10'>
                    <h1 className="text-5xl font-extrabold text-center font-tinos">O seu Novo Começo <span className='text-heroHeadline'>Começa Aqui!</span></h1>
                    <p className="mt-4 text-xl text-center font-tinos md:px-16">Descubra como nosso estúdio pode transformar a sua abordagem ao fitness e <br className='hidden lg:block'></br> ao bem-estar</p>
                    <Link className='lg:w-2/3 flex justify-center font-tinos' to='contact-section' smooth={true} duration={2000}>
                        <button
                            className="bg-white text-textColor px-4 py-3 rounded-md text-base font-semibold font-tinoss hover:bg-btnBg hover:text-white transition-all delay-75">Marque a sua avaliação gratuita</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;

