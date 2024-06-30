import Navbar from "../components/Navbars";
import backgroundImage from "../assets/pictures/masjid1.png";
import Button from "../components/Button";
import Line from "../assets/pictures/line.svg";

function Hero() {
    return (
        <div className="">
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-20">
                    <Navbar />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8">
                    <div className="mt-14 flex flex-col p-4 sm:p-6 lg:p-8 rounded max-w-3xl mx-auto items-center justify-center gap-6 sm:gap-8 lg:gap-10">
                        <div>
                            <img src={Line} alt="line" className="" />
                        </div>
                        <div className=" font-light sm:text-lg sm:font-medium text-xs">Dengan bangga, kami membuka pintu untuk menemukan generasi penerus yang bersemangat dan penuh potensi. Jadilah bagian dari keluarga besar pesantren Darul Mustahafa yang kaya akan ilmu, akhlak mulia, dan kebersamaan yang erat</div>
                        <div>
                            <Button tulisan="Daftar Sekarang" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
