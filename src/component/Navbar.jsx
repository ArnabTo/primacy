import { Button, Dropdown, Space } from "antd";
import { useState } from "react";
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Personal Training
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Physical Assessments
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Nutritional Guidance
                </a>
            ),
        },
    ];

    return (
        // bg-[#feecdd]
        <nav className="navbar bg-black shadow-lg">
            <div className="navbar-container mx-5 lg:mx-32 py-3">
                {/* <!-- larger device navbar --> */}
                <div className="hidden xl:block">

                    <div className="flex justify-between items-center gap-24 animate__animated animate__bounceIn">
                        <div className="nav-logo flex items-center gap-1 transition-all delay-75">
                            <p className="sticky-item text-white text-3xl font-extrabold">Primacy</p>
                        </div>
                        <div className="nav-menues">
                            <ul className="flex justify-center items-center space-x-5">
                                <li
                                    className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                    <a href="#features"><Button className="bg-transparent border-none text-white text-base font-medium">Home</Button></a>
                                </li>
                                <li
                                    className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                    <a href="#features"><Button className="bg-transparent border-none text-white text-base font-medium">The Studios</Button></a>
                                </li>
                                <li
                                    className="sticky-item text-white font-medium text-base cursor-pointer transition-all delay-75 hover:scale-105">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        placement="bottom"
                                        arrow
                                    >
                                        <Button className="bg-transparent border-none text-white text-base font-medium">Services</Button>
                                    </Dropdown>
                                </li>
                                <li
                                    className="sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                    <a href="#features"><Button className="bg-transparent border-none text-white text-base font-medium">Contact Us</Button></a>
                                </li>
                                <li
                                    className="sticky-item font-medium text-lg mr-12 cursor-pointer transition-all delay-75 hover:scale-105">
                                    <button
                                        className="bg-[#1D1F29] text-white px-4 py-2 rounded-md text-base font-semibold hover:bg-white hover:text-[#12141D] transition-all delay-75">Sign
                                        in
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- small device nav --> */}
                <div className="block xl:hidden">
                    <div className="flex justify-between">
                        <div className="nav-logo flex gap-1">
                            <p className="sticky-item text-white text-base font-semibold">Primacy</p>
                        </div>
                        <div>
                            <button onClick={toggleMenu} aria-label="Menu" className="menu-toggler text-black">
                                <svg width="26" height="20" viewBox="0 0 26 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H25" stroke="#FFFEFF" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M1 10H25" stroke="#FFFEFF" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M1 19H25" stroke="#FFFEFF" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </button>
                            <div
                                className={`hamburger-menu flex flex-col gap-3 absolute top-14 right-1 w-full mx-auto rounded-md z-50 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
                                    } overflow-hidden`}>
                                <div className="bg-[#f8cd98] p-5 rounded-md">
                                    <div className="nav-menues">
                                        <ul className="flex flex-col justify-center items-center space-y-5">
                                            <li
                                                className="w-full sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                                <a href="#features"><Button className="w-full bg-transparent border-none text-white text-base font-medium">Home</Button></a>
                                            </li>
                                            <li
                                                className="w-full sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                                <a href="#features"><Button className="w-full bg-transparent border-none text-white text-base font-medium">The Studios</Button></a>
                                            </li>
                                            <li
                                                className="w-full sticky-item text-white font-medium text-base cursor-pointer transition-all delay-75 hover:scale-105">
                                                <Dropdown
                                                    menu={{
                                                        items,
                                                    }}
                                                    placement="bottomCenter"
                                                    arrow
                                                >
                                                    <Button className="w-full bg-transparent border-none text-white text-base font-medium">Services</Button>
                                                </Dropdown>
                                            </li>
                                            <li
                                                className="w-full sticky-item cursor-pointer transition-all delay-75 hover:scale-105">
                                                <a href="#features"><Button className="w-full bg-transparent border-none text-white text-base font-medium">Contact Us</Button></a>
                                            </li>
                                            <li
                                                className="w-full sticky-item font-medium text-lg cursor-pointer transition-all delay-75">
                                                <button
                                                    className="bg-[#1D1F29] w-full text-white px-4 py-2 rounded-md text-base font-semibold hover:bg-white hover:text-[#12141D] transition-all delay-75">Sign
                                                    in
                                                </button>
                                            </li>
                                        </ul>
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