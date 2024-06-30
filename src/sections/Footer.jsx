import logo from "../assets/pictures/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faTelegram, faXTwitter, faJs, faHtml5, faCss3, faPhp, faPython, faNode, faWebAwesome, faMailchimp, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <div id="footer" className="bg-brwn text-white p-5">
            <div className="flex flex-col sm:flex-row gap-10 justify-around">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row  items-center">
                        <img src={logo} alt="" />
                        <div className="text-xs sm:text-base">Pondok Pesantrean <br /> Darul Musthofa</div>
                    </div>
                    <div className="text-xs sm:text-sm flex flex-col gap-3">Lorem ipsum dolor sit amet consectetur. Vitae <br />amet consequat dolor consequat. Vel tempus eu quam morbi integer.</div>
                    <div className="flex flex-row gap-5">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
                <div className="px-">
                    <h1 className="font-semibold">Darul Musthafa</h1>
                    <div className=" text-xs flex flex-col gap-3">
                        <div>Beranda</div>
                        <div>Tentang Darul Mustofa</div>
                        <div>Blog & Event</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold">About</h1>
                    <ul className=" text-xs flex flex-col gap-3">
                        <li>Privacy Policy</li>
                        <li>Term of service</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold">Address</h1>
                    <ul className=" text-xs flex flex-col gap-3">
                        <li>Jl. Raya Solo - Tawangmangu, Salam, <br />Karangpandan, Karanganyar, Jawa Tengah, <br /> Surakarta, Indonesia, Central Java
                        </li>
                        <li>darfalo@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className=" m-5 text-center text-sm font-thin">© 2023 All Rights Reserved</div>
        </div>
    )
}
export default Footer