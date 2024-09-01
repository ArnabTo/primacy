import PaService1 from '../../assets/pa-service.jpg'
import PaService2 from '../../assets/pa-service2.jpg'
import PaService3 from '../../assets/pa-service3.jpg'

const PhysicalAssessments = () => {
    return (
        <section className="bg-white mb-44">
            <div className=' mt-20 space-y-3'>
                <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-tinos uppercase mb-3">Avaliações <span className='text-serviceTxtColor'>Físicas</span></h1>
                <p className='text-textColor text-lg lg:text-xl text-center font-tinos mx-5 md:mx-12'>
                    Análises detalhadas do seu condicionamento físico inicial para criar um plano de treino eficaz. Inclui medições de força, <br className="hidden xl:block"></br> flexibilidade, composição corporal e
                    outros  <br className="hidden md:block lg:hidden"></br> parâmetros essenciais para monitorizar o<br className="hidden lg:block"></br> seu progresso</p>
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={PaService1} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img src={PaService2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://plus.unsplash.com/premium_photo-1661901743106-cfc613fdf5bb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                </span>
                                <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src={PaService3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhysicalAssessments;