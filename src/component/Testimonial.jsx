import { Carousel, Button, Avatar } from 'antd';
import { useRef } from 'react';
import AvatarImg from '../assets/avatar1.jpg'
import AvatarImg2 from '../assets/avatar2.jpg'
import AvatarImg3 from '../assets/avatar3.jpg'

const testimonials = [
    {
        testimonial: "Comecei a treinar na Primacy há seis meses e a diferença é incrível! O treino personalizado ajudou-me a perder 10 kg. A atenção individualizada faz toda a diferença. Recomendo a todos os que buscam resultados e um atendimento excepcional!",
        author: "Ana Oliveira",
        avatar: AvatarImg
    },
    {
        testimonial: "A experiência tem sido transformadora. A avaliação física inicial foi detalhada e ajudou-me a criar um plano de treino que realmente funciona para mim. Além disso, o acompanhamento nutricional tem sido fundamental. Sinto-me mais saudável e motivado do que nunca!",
        author: "Carlos Oliveira",
        avatar: AvatarImg2
    },
    {
        testimonial: "Treinar na Primacy foi uma das melhores decisões que tomei. A personalização do plano de treino e o acompanhamento constante ajudaram-me a atingir metas que achava impossíveis. A atenção dedicada faz toda a diferença e sinto-me apoiado a cada passo.",
        author: "João Martins",
        avatar: AvatarImg3
    },
];

const Testimonials = () => {
    const carouselRef = useRef();

    const nextSlide = () => {
        carouselRef.current.next();
    };

    const prevSlide = () => {
        carouselRef.current.prev();
    };

    return (
        <div className="pt-5 mb-36 lg:py-16" id='testimonial-section'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className=' mt-24 mb-6 lg:mb-12'>
                    <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-tinos uppercase mb-2"><span className='text-serviceTxtColor'>Testemunhos</span></h1>
                    <p className='text-textColor text-sm lg:text-xl text-center font-tinos mx-3'>O que os nossos clientes têm a dizer sobre nós</p>
                </div>
                <div className="relative">
                    <Carousel ref={carouselRef} dots={false} className="text-left">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-8">
                                <p className="text-lg text-center lg:text-start italic text-gray-700 mb-4 font-tinos">"{testimonial.testimonial}"</p>
                                <p className="text-base text-center lg:text-start font-semibold text-gray-800 font-tinos">— {testimonial.author}</p>
                                <div className="flex justify-center mt-4"> {/* Flexbox applied here to center the avatar */}
                                    <Avatar size={70} src={testimonial.avatar} />
                                </div>
                            </div>
                        ))}
                    </Carousel>

                    {/* <Button
                        className="absolute top-1/2 -left-3 lg:-left-16 transform -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full"
                        onClick={prevSlide} id='testi-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    </Button> */}
            
                    <Button
                        className="absolute top-1/2 -left-3 lg:-left-16 transform -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full"
                        onClick={prevSlide} id='testi-button'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    </Button>
                    <Button
                        className="absolute top-1/2 -right-3 lg:-right-16 transform -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full"
                        onClick={nextSlide} id='testi-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
