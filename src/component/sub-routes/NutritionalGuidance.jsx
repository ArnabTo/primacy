import NgService1 from '../../assets/ng-service1.jpg'
import NgService2 from '../../assets/ng-service2.jpg'
import NgService3 from '../../assets/ng-service3.jpg'
const NutritionalGuidance = () => {
    return (
        <section className="bg-white mb-44">
            <div className=' mt-20 space-y-3'>
                <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-tinos uppercase mb-3">Acompanhamento <span className='text-serviceTxtColor'>Nutricional</span></h1>
                <p className='text-textColor text-lg lg:text-xl text-center font-tinos mx-5 md:mx-12'>
                    Orientação personalizada para melhorar seus hábitos alimentares e complementar seu plano de treino. Receba conselhos <br className="hidden xl:block"></br>  sobre nutrição  balanceada e
               
                    estratégias para <br className="hidden md:block lg:hidden"></br>otimizar os seus resultados e promover um <br className="hidden lg:block"></br> estilo de vida saudável</p>
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src={NgService1} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img src={NgService2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src={NgService3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                </span>
                                <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://img.freepik.com/free-photo/smiling-nutritionist-advises-young-patient-woman-proper-nutrition-dieting_496169-1469.jpg?w=996&t=st=1724772405~exp=1724773005~hmac=84a394ddfe6b27e3f98cceb43f307dc5eec48ffda7c5db08e37a4614b90bcfdb" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NutritionalGuidance;