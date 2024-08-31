
const NutritionalGuidance = () => {
    return (
        <section className="bg-white mb-44">
            <div className=' mt-20 space-y-3'>
                <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-tinos uppercase mb-3">Acompanhamento <span className='text-serviceTxtColor'>Nutricional</span></h1>
                <p className='text-textColor text-lg lg:text-xl text-center font-tinos mx-5 md:mx-12'>
                    Orientação personalizada para melhorar seus hábitos alimentares e complementar seu plano de treino. Receba conselhos <br className="hidden xl:block"></br>  sobre nutrição  balanceada e
               
                    estratégias para <br className="hidden md:block lg:hidden"></br>  otimizar seus resultados e promover um <br className="hidden lg:block"></br> estilo de vida saudável.</p>
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://img.freepik.com/free-photo/close-up-nutritionist-writing-prescription_23-2148302092.jpg?w=1380&t=st=1724779826~exp=1724780426~hmac=bfeb60c413731494cbc6595121aacd7a61934a40eb7bd195040f810324ec1f5e" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img src="https://img.freepik.com/free-photo/healthy-eating-food-lifestyle-organic-wellness-graphic_53876-128063.jpg?w=1380&t=st=1724779696~exp=1724780296~hmac=678222c1f796527fb70f9b1d2f64a180c56b415dc9d495f55e5d6677abd13065" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            </span>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://img.freepik.com/free-photo/medium-shot-doctor-showing-results-patient_23-2148302133.jpg?w=1380&t=st=1724779753~exp=1724780353~hmac=c6c5ff051a64d655ea8dd009d7707a540707f8fe793884b7294a610403f45c07" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
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