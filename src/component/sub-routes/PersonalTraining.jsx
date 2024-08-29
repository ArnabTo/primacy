

const PersonalTraining = () => {
    return (
        <section className="bg-white mb-44">
                   <div className=' mt-20 my-24'>
                    <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-manrope uppercase mb-3">Treino <span className='text-serviceTxtColor'>Personalizado</span></h1>
                    <p className='text-textColor text-lg lg:text-xl text-center font-manrope mx-16'>
                    Sessões de treino adaptadas às suas necessidades e objetivos específicos. Com um plano de treino individualizado, você receberá orientação direta 
                      <br className="hidden lg:block"></br>
                      para maximizar seus resultados e alcançar suas metas de forma eficiente.</p>
                </div>
            <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                        <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                            <img src="https://images.pexels.com/photos/866019/pexels-photo-866019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        </span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                        <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        </span>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src="https://images.unsplash.com/photo-1643142313816-0d9c86c49f91?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src="https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default PersonalTraining;