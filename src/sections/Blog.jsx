import Button from "../components/Button"
import FrameGallery from "../components/Gallery"
import Masjid3 from "../assets/pictures/masjid3.png"
import Line from "../assets/pictures/line.svg"

function Blog() {
    return (
        <div id="blog" className="flex flex-col justify-center items-center py-16 px-1 sm:px-32 gap-9 sm:flex-row">
            <img className="px-5" src={Masjid3} alt="" />
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="font-bold text-coklattua">Blog</div>
                <div className=" font-semibold text-xs sm:text-2xl">Cerita dan Memori Darul Musthafa</div>
                <div><img src={Line} alt="" /></div>
                <div className="flex flex-col sm:flex-row gap-9">
                    <FrameGallery />
                    <FrameGallery />
                </div>
            </div>
        </div>
    )
}
export default Blog