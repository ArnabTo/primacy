import { Carousel, Button } from 'antd';
import { useRef } from 'react';

const testimonials = [
    {
        testimonial: "I started training at Primacy six months ago, and the difference is incredible! The personalized training helped me lose 10 kg. The individualized attention makes all the difference. I recommend it to anyone looking for results and exceptional service!",
        author: "Ana Oliveira",
    },
    {
        testimonial: "The experience has been transformative. The initial physical assessment was detailed and helped me create a training plan that really works for me. Moreover, the nutritional guidance has been fundamental. I feel healthier and more motivated than ever!",
        author: "Carlos Oliveira",
    },
    {
        testimonial: "Training at Primacy was one of the best decisions I made. The personalized training plan and constant support helped me achieve goals I thought were impossible. The dedicated attention makes all the difference, and I feel supported every step of the way.",
        author: "João Martins",
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
        <div className="pt-5 lg:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className=' mt-24 mb-6 lg:mb-12'>
                    <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-manrope uppercase mb-3">Our <span className='text-serviceTxtColor'>Testimonials</span></h1>
                    <p className='text-textColor text-sm lg:text-xl text-center font-manrope mx-3'>What our clients have to say about us.</p>
                </div>
                <div className="relative">
                    <Carousel ref={carouselRef} dots={false} className="text-left">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-8">
                                <p className="text-lg text-center lg:text-start italic text-gray-700 mb-4">"{testimonial.testimonial}"</p>
                                <p className="text-base text-center lg:text-start font-semibold text-gray-800">— {testimonial.author}</p>
                            </div>
                        ))}
                    </Carousel>

                    <Button 
                     className="absolute top-1/2 -left-3 lg:-left-16 transform -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full"
                     onClick={prevSlide}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    </Button>
                    <Button 
                    className="absolute top-1/2 -right-3 lg:-right-16 transform -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full"
                    onClick={nextSlide}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
