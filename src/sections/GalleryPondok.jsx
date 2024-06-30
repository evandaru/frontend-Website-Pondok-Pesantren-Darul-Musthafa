import Button from "../components/Button"
import Sertif from "../assets/pictures/sertif.png"
import Ceramah1 from "../assets/pictures/ceramah1.png"
import Line from "../assets/pictures/line.svg"
import Ceramah from "../assets/pictures/ceramah.png"

function Gallery() {
    return (
        <div className="sm:py-14   items-center justify-center flex flex-col gap-5">
            <div className="font-bold text-coklattua">Galeri Santri</div>
            <div className=" font-medium text-sm text-center sm:text-2xl">Jejak-Jejak Kebaikan dalam Fotografi Galeri Santri</div>
            <div><img src={Line} alt="" /></div>
            <div className="text-xs sm:text-base text-center px-5">"Dalam lensa kamera, galeri santri mengabadikan jejak-jejak kebaikan melalui momen di galeri santri."</div>
            <div className="flex flex-col sm:flex-row gap-5 px-5">
                <div><img src={Sertif} alt="" /></div>
                <div className="flex flex-col gap-4">
                    <div><img src={Ceramah1} alt="" /></div>
                    <div><img src={Ceramah} alt="" /></div>
                </div>
            </div>
            <div>
                <Button tulisan="READ MORE" />
            </div>
        </div>
    )
}
export default Gallery