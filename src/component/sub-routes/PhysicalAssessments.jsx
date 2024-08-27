

const PhysicalAssessments = () => {
    return (
        <section className="bg-white mb-44">
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
                            <img src="https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321589.jpg?t=st=1724774693~exp=1724778293~hmac=00ace39b13185509908204ce112716fdc11099a17d290e88a9c5409ccaec412c&w=1380" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        </span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                        <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                            <img src="https://img.freepik.com/free-photo/doctor-helping-patient-during-rehabilitation_23-2150321628.jpg?w=1380&t=st=1724774594~exp=1724775194~hmac=46afdba5e49fe0dd84a2dafc71a42a4db2cd578dc7835fdcdca66d17f0d43c99" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
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