import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Line from "../assets/pictures/line.svg"
import Akun from "../assets/pictures/profile.png"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
function Ulasan() {
    return (
        <div className="flex flex-row justify-between items-center bg-coklatmuda py-16">
            <div className="px-10"><FontAwesomeIcon icon={faArrowLeft} /></div>
            <div className="flex flex-col justify-center items-center gap-5">
                <div className=" font-medium text-base sm:text-2xl" >Darul Ulasan</div>
                <div><img src={Line} alt="" /></div>
                <div className="text-center px-5 text-xs sm:text-base text-brwn">Lorem ipsum dolor sit amet consectetur. Vel et pretium feugiat duis potenti. Interdum non vel posuere orci <br /> tellus lobortis nam amet nunc. Sagittis ligula donec vitae odio. Odio at bibendum</div>
                <div className="flex flex-col items-center gap-2 justify-center">
                    <img src={Akun} alt="" />
                    <div className="text-xs sm:text-base text-brwn">Neha Poetri</div>
                </div>
            </div>
            <div className="px-10"><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
    )
}
export default Ulasan