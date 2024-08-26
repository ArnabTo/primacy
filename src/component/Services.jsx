import Service1 from '../assets/service1.jpg';
import Service2 from '../assets/service2.jpg';
import Service3 from '../assets/service3.jpg';

const Services = () => {
    return (
        <div className="bg-white pt-20 lg:pt-24 pb-36">
            <div className='max-w-7xl mx-auto'>
                <div className=' mt-20 my-24'>
                    <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-manrope uppercase mb-3">Our Services</h1>
                    <p className='text-textColor text-sm lg:text-xl text-center font-manrope mx-3'>Unlock your potential with our expert personal training, assessments, <br></br> and nutritional guidance.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
                    <a href=''>
                        <div className="group">
                            <div className='overflow-hidden h-[25rem] '>
                                <img
                                    src={Service1}
                                    className="w-full h-full object-cover transform transition-transform duration-[800ms] ease-[cubic-bezier(0.5,0,0.1,1)] group-hover:scale-125"
                                />
                            </div>
                            <p className="text-textColor text-lg lg:text-2xl text-start font-bold my-10 uppercase">Personal Training</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className="group">
                            <div className='overflow-hidden h-[25rem] '>
                                <img
                                    src={Service2}
                                    className="w-full h-full object-cover transform transition-transform duration-[800ms] ease-[cubic-bezier(0.5,0,0.1,1)] group-hover:scale-125"
                                />
                            </div>
                            <p className="text-textColor text-lg lg:text-2xl text-start font-bold my-10 uppercase">Physical Assessments</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className="group">
                            <div className='overflow-hidden h-[25rem] '>
                                <img
                                    src={Service3}
                                    className="w-full h-full object-cover transform transition-transform duration-[800ms] ease-[cubic-bezier(0.5,0,0.1,1)] group-hover:scale-125"
                                />
                            </div>
                            <p className="text-textColor text-lg lg:text-2xl text-start font-bold my-10 uppercase">Nutritional Guidance</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
