import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
    return (
        <div className="mb-10" id="contact-section">
            <div className="w-full mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center mx-8 md:mx-36 gap-20 lg:gap-0">
                    <div className="w-full flex flex-col">
                        <div>
                            <h1 className="text-3xl font-extrabold font-tinos text-conTxtColor">Contactos</h1>
                            <p className="text-lg font-light font-tinos">Se tiver interesse, por favor contacte-nos</p>
                        </div>
                        <br></br>
                        <div className="mb-2">
                            <h1 className="text-xl font-bold font-tinos mb-1">Entre em Contacto</h1>
                            <p className="text-lg font-light font-tinos">967676750 </p>
                            <p className="text-lg font-light font-tinos">info@platewmedia.com</p>
                        </div>

                        <div>
                            <p className="text-lg font-light font-tinos"><span className="text-xl font-bold font-tinos">Morada</span><br></br>Leiria, 1C</p>
                        </div>
                    </div>
                    <div className="mb-10 w-full">
                        <form  action="https://formspree.io/f/xwpeynwe" method="POST">
                            <div>
                                <label className="font-tinos text-sm font-light ">Nome</label>
                                <Input className="py-2 border-contactInputBorder rounded-sm" type="text" name="name" id="contact-input" />
                            </div>
                            <span className="w-full ">
                                <label className="font-tinos text-sm font-light">Apelido</label>
                                <Input className="w-full py-2 border-contactInputBorder rounded-sm" type="text" name="name" id="contact-input" />
                            </span>
                            <div className="mb-2">
                                <label className="font-tinos text-sm font-light">Contacto</label>
                                <TextArea className="py-2 border-contactInputBorder rounded-sm" id="contact-input" name="message"/>
                            </div>
                            <button type="submit" className="bg-transparent w-full border border-contactInputBorder py-2 rounded-sm text-sm font-medium hover:bg-[#FEF6ED]">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;