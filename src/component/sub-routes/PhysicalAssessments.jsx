

const PhysicalAssessments = () => {
    return (
        <section className="bg-white">
            <div className=' mt-20 my-24'>
                <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-manrope uppercase mb-3">Physical <span className='text-serviceTxtColor'>Assessments</span></h1>
                <p className='text-textColor text-lg lg:text-xl text-center font-manrope mx-16'>
                    Detailed analyses of your initial physical condition to create an effective training plan. Includes measurements of strength, flexibility, body composition, and
                    <br className="hidden lg:block"></br>
                    other essential parameters to monitor your progress.</p>
            </div>
            <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                        <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                            <img src="https://plus.unsplash.com/premium_photo-1661766924609-2667ea7398b0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D750&dpr=1" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        </span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                        <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                            <img src="https://plus.unsplash.com/premium_photo-1661698465350-dab93e1b2df8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        </span>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src="https://plus.unsplash.com/premium_photo-1661901743106-cfc613fdf5bb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src="https://images.unsplash.com/photo-1518644961665-ed172691aaa1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhysicalAssessments;