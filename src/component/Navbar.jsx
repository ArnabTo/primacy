import { Button, Dropdown } from "antd";
import { useState } from "react";
import Logo from '../assets/logo.jpg'
import '../App.css'
import { Link } from "react-scroll";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const items = [
        {
            key: '1',
            label: (
                <a className="text-base font-medium px-5" rel="noopener noreferrer" href="/personal-training">
                    Treino personalizado
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a className="text-base font-medium px-5" rel="noopener noreferrer" href="/physical-assessments">
                    Avaliações físicas
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a className="text-base font-medium px-5" rel="noopener noreferrer" href="/nutritional-guidance">
                    Acompanhamento nutricional
                </a>
            ),
        },
    ];

    return (
        // bg-[#feecdd]
        <nav className="navbar bg-[#ffffff] py-6">
            <div className="max-w-7xl mx-auto">
                <div className="navbar-container mx-5 lg:mx-20 xl:mx-36">
                    {/* <!-- larger device navbar --> */}
                    <div className="hidden lg:block">

                        <div className="flex justify-center items-center gap-24 animate__animated animate__bounceIn">
                            <div className="nav-logo flex items-center gap-1 transition-all delay-75">
                                <a href="/"><img src={Logo} className="w-28" alt="logo" /></a>
                            </div>
                            <div className="nav-menues">
                                <ul className="flex justify-center items-center space-x-5">
                                    <li
                                        className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                        <a href="/"><Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Home</Button></a>
                                    </li>
                                    <li
                                        className="sticky-item text-base cursor-pointer transition-all delay-75 hover:scale-105">
                                        <Dropdown
                                            menu={{
                                                items,
                                            }}
                                            placement="bottom"
                                            arrow
                                        >
                                            <Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Serviços</Button>
                                        </Dropdown>
                                    </li>
                                    <li
                                        className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                        <a href="/blogs"><Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Blog</Button></a>
                                    </li>
                                    <li
                                        className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                        <a href="/testimonials"><Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Testemunhos</Button></a>
                                    </li>
                                    <li
                                        className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                        <Link to="contact-section" smooth={true} duration={2000}><Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Contactos</Button></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- small device nav --> */}
                    <div className="block lg:hidden">
                        <div className="flex justify-between items-center">
                            <div className="nav-logo flex gap-1">
                                <img src={Logo} className="w-20" alt="logo" />
                            </div>
                            <div className="flex">
                                <button onClick={toggleMenu} aria-label="Menu" className="menu-toggler text-black">
                                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1H25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M1 10H25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M1 19H25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div
                                    className={`hamburger-menu flex flex-col gap-3 absolute top-20 right-1 w-full mx-auto rounded-md z-50 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
                                        } overflow-hidden`}>
                                    <div className="bg-white p-5 rounded-md">
                                        <div className="nav-menues">
                                            <ul className="flex flex-col justify-center items-center space-y-10">
                                                <li
                                                    className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                                    <a href="/"><Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Home</Button></a>
                                                </li>
                                                <li
                                                    className="sticky-item text-base cursor-pointer transition-all delay-75 hover:scale-105">
                                                    <Dropdown
                                                        menu={{
                                                            items,
                                                        }}
                                                        placement="bottom"
                                                        arrow
                                                    >
                                                        <Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Serviços</Button>
                                                    </Dropdown>
                                                </li>
                                                <li
                                                    className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                                 <a href="/blogs"><Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Blog</Button></a>
                                                </li>
                                                <li
                                                    className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                                    <a href="/testimonials"><Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Testemunhos</Button></a>
                                                </li>
                                                <li
                                                    className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                                    <Link to="contact-section" smooth={true} duration={2000}><Button className="px-2 rounded-sm bg-transparent border-none text-textColor text-lg font-medium" id="nav-link">Contactos</Button></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;