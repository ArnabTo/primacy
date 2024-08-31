import Service1 from '../assets/service1.jpg';
import Service2 from '../assets/service2.jpg';
import Service3 from '../assets/service3.jpg';

const Services = () => {
    return (
        <div className="bg-white pt-20 lg:pt-24 pb-36">
            <div className='max-w-7xl mx-auto'>
                <div className='mt-20 my-24'>
                    <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-tinos uppercase mb-3">Os nossos  <span className='text-serviceTxtColor'>serviços</span></h1>
                    <p className='text-textColor text-sm lg:text-xl text-center font-tinos mx-3'>Desbloqueie o seu potencial com a nossa formação pessoal especializada, avaliações, <br /> e orientação nutricional.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-5 lg:mx-10">
                    <a href='/personal-training'>
                        <div className="group relative">
                            <div className='overflow-hidden w-[15rem] h-[15rem] lg:w-[19rem] lg:h-[20rem] xl:w-[23rem] xl:h-[22rem] mx-auto  rounded-md'> 
                                <img
                                    src={Service1}
                                    className="w-full h-full object-cover transform scale-110 transition-transform duration-[800ms] ease-[cubic-bezier(0.5,0,0.1,1)] group-hover:scale-100 brightness-100 group-hover:brightness-50"
                                />
                                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-white text-sm lg:text-lg font-bold uppercase">Treino personalizado</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href='/physical-assessments'>
                        <div className="group relative">
                            <div className='overflow-hidden w-[15rem] h-[15rem] lg:w-[19rem] lg:h-[20rem] xl:w-[23rem] xl:h-[22rem] mx-auto rounded-md'> 
                                <img
                                    src={Service2}
                                    className="w-full h-full object-cover transform scale-110 transition-transform duration-[800ms] ease-[cubic-bezier(0.5,0,0.1,1)] group-hover:scale-100 brightness-100 group-hover:brightness-50"
                                />
                                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-white text-sm lg:text-lg font-bold uppercase">Avaliações físicas</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href='/nutritional-guidance'>
                        <div className="group relative">
                            <div className='overflow-hidden w-[15rem] h-[15rem] lg:w-[19rem] lg:h-[20rem] xl:w-[23rem] xl:h-[22rem] mx-auto rounded-md'>
                                <img
                                    src={Service3}
                                    className="w-full h-full object-cover transform scale-110 transition-transform duration-[800ms] ease-[cubic-bezier(0.5,0,0.1,1)] group-hover:scale-100 brightness-100 group-hover:brightness-50"
                                />
                                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-white text-sm lg:text-lg font-bold uppercase text-center">Acompanhamento <br></br>nutricional</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
