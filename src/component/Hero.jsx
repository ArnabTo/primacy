import { Link } from 'react-scroll';
import { Carousel } from 'antd';

const Hero = () => {
    return (
            <div className="relative w-full h-[40rem] lg:h-screen">
                <Carousel autoplay effect="fade" className="w-full h-full">
                    <div className="relative w-full h-[40rem] lg:h-screen" id='carousel-bg'>
                    </div>
                    <div className="relative w-full h-[40rem] lg:h-screen" id='carousel2-bg'>
                    </div>
                    <div className="relative w-full h-[40rem] lg:h-screen" id='carousel3-bg'>
                    </div>
                </Carousel>
    
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
                    <div className='flex flex-col justify-center items-center space-y-5'>
                        <h1 className="text-5xl font-extrabold text-center font-lato">O seu Novo Começo <span className='text-heroHeadline'>Começa Aqui!</span></h1>
                        <p className="mt-4 text-xl text-center font-lato">Descubra como nosso estúdio pode transformar a sua abordagem ao fitness <br /> e ao bem-estar</p>
                        
                            <Link className='lg:w-2/3 flex justify-center' to='contact-section' smooth={true} duration={2000}>
                            <button
                            className="bg-white text-textColor px-4 py-3 rounded-md text-base font-semibold font-lato hover:bg-btnBg hover:text-white transition-all delay-75">Marque a sua avaliação gratuita</button>
                          </Link>
                    </div>
                </div>
            </div>
        );
    };
    
    export default Hero;
    
   