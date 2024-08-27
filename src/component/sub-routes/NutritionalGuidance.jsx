
const NutritionalGuidance = () => {
    return (
        <section className="bg-white">
        <div className=' mt-20 my-24'>
            <h1 className="text-textColor mt-20 text-center text-3xl lg:text-4xl font-bold font-manrope uppercase mb-3">Nutritional <span className='text-serviceTxtColor'>Guidance</span></h1>
            <p className='text-textColor text-lg lg:text-xl text-center font-manrope mx-16'>
            Personalized guidance to improve your eating habits and complement your training plan. Receive advice on balanced nutrition and
                <br className="hidden lg:block"></br>
                strategies to optimize your results and promote a healthy lifestyle.</p>
        </div>
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                    <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                        <img src="https://img.freepik.com/free-photo/nutrition-healthy-diet-plan-concept_53876-125013.jpg?w=996&t=st=1724772323~exp=1724772923~hmac=b71c53b94b08554c34514a07797970ff1ca92bc6268b8fb5346fa67b65040288" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    </span>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                    <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                        <img src="https://img.freepik.com/free-photo/woman-using-tablet-with-summer-fruit-flat-lay_53876-133986.jpg?w=740&t=st=1724772332~exp=1724772932~hmac=556c2c70e3cd73eda4c94ce1b4d6c6a286702fca677712b2716fa3ad14d922ec" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    </span>
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                        <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                            <img src="https://img.freepik.com/free-photo/diet-concept-with-female-scientist-healthy-food_23-2148193256.jpg?t=st=1724772354~exp=1724775954~hmac=ed68663e323ffc03c3a2577632524fa9a16a02973b40235eb53b41b5ee40edc9&w=996" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        </span>
                        <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                            <img src="https://img.freepik.com/free-photo/smiling-nutritionist-advises-young-patient-woman-proper-nutrition-dieting_496169-1469.jpg?w=996&t=st=1724772405~exp=1724773005~hmac=84a394ddfe6b27e3f98cceb43f307dc5eec48ffda7c5db08e37a4614b90bcfdb" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default NutritionalGuidance;