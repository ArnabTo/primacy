import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
    return (
        <div className="mb-10">
            <div className="w-full mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center mx-8 md:mx-36">
                    <div className="w-full flex flex-col">
                        <div>
                            <h1 className="text-3xl font-extrabold font-manrope text-[#F2D26D]">Contact</h1>
                            <p className="text-lg font-light font-poppins">If you are interested, please contact us</p>
                        </div>
                        <br></br>
                        <div className="mb-2">
                            <h1 className="text-xl font-bold font-manrope mb-1">Get In Touch</h1>
                            <p className="text-lg font-light font-poppins">967676750 </p>
                            <p className="text-lg font-light font-poppins">info@platewmedia.com</p>
                        </div>
                     
                        <div>
                            <p className="text-lg font-light font-poppins"><span className="text-xl font-bold font-manrope">Address</span><br></br>Leiria, 1C</p>
                        </div>
                    </div>
                    <div className="mb-10 w-[90%]">
                        <form>
                            <div>
                                <label className="font-poppins text-sm font-light ">Name</label>
                                <Input className="py-2 border-contactInputBorder rounded-sm" type="text" />
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between gap-2">
                                <span className="w-full ">
                                    <label className="font-poppins text-sm font-light">Your Email</label>
                                    <Input className="w-full py-2 border-contactInputBorder rounded-sm" />
                                </span>
                                <span className="w-full ">
                                    <label className="font-poppins text-sm font-light">Whatsapp</label>
                                    <Input className="w-full py-2 border-contactInputBorder rounded-sm" />
                                </span>
                            </div>
                            <div className="mb-2">
                                <label className="font-poppins text-sm font-light">Message</label>
                                <TextArea className="py-2 border-contactInputBorder rounded-sm" />
                            </div>
                            <button className="bg-transparent w-full border border-contactInputBorder py-2 rounded-sm text-sm font-medium hover:bg-[#FEF6ED]">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;