import AbtImg from '../assets/abt.jpg'
const About = () => {
    return (
        <section className="bg-abtBgColor py-28 lg:py-44">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between  mx-3 lg:mx-20">
                    <div className="lg:w-3/4 xl:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                        <h2 className="text-2xl text-aboutTxtColor uppercase mb-10">Sobre Nós</h2>
                        <p className="text-xl text-gray-700 leading-relaxed tracking-wider font-normal font-tinos">
                            <span className="block text-2xl lg:text-4xl font-bold uppercase">
                                Eu sou a Carolina, tenho cerca de 7 anos de experiência como personal trainer
                            </span>
                            <br></br>
                            Estou comprometida em oferecer um suporte especializado que vai além do treino físico.
                            O meu foco é garantir que cada cliente receba a orientação, motivação e acompanhamento necessário para que cada um possa alcançar os seus objetivos.
                            <br></br>
                            <br></br>
                            Na Primacy, acreditamos que cada pessoa é única e merece um plano de treino que reflita as suas necessidades e objetivos individuais.
                            Somos um estúdio, onde a atenção personalizada é o nosso diferencial.
                        </p>
                    </div>
                    <div className="mx-auto">
                        <img src={AbtImg} alt="About Carolina" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
