import { useState } from 'react';
import { faBars, faTimes, faHouse, faSearch, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/pictures/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-brwn text-white">
            <div className={`w-screen flex  flex-col items-center sm:items-center justify-between py-5 px-4 `}>
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-14 w-14 mr-2" />
                    <div>
                        <div className="text-base sm:text-2xl font-bold">Pondok Pesantren Darul Musthafa</div>
                        <div className="text-xs hidden lg:flex">Jl. Raya Solo - Tawangmangu, Salam, Karangpandan, Karanganyar, Jawa Tengah, Surakarta, <br /> Indonesia, Central Java</div>
                    </div>
                    <div className="flex flex-col lg:hidden">

                        <button onClick={toggleMenu} className="text-white">
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col lg:hidden">

                </div>
                <div className={` lg:flex lg:items-center lg:w-auto ${isOpen ? 'flex' : 'hidden'}`}>
                    <ul className="flex mt-5 flex-col sm:flex-row gap-1 sm:gap-14 justify-center  ">
                        <li className="py-2 lg:py-0"><a href="#" className="">Beranda</a></li>
                        <li className="py-2 lg:py-0"><a href="#tentang" className="">Tentang Darul Musthafa</a></li>
                        <li className="py-2 lg:py-0"><a href="#gallery" className="">Info</a></li>
                        <li className="py-2 lg:py-0"><a href="#blog" className="">Blog & Event</a></li>
                        <li className="py-2 lg:py-0"><a href="#footer" className="">Kontak</a></li>
                        <li className="py-2 lg:py-0 lg:pl-9"><FontAwesomeIcon icon={faSearch} /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
