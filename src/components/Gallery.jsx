import Button from "./Button"
import sajadah from "../assets/pictures/sajadah.png"

function FrameGallery() {
    return (
        <div id="gallery" className="px-5 flex flex-col gap-1 wit">
            <img src={sajadah} className="w-screen" alt="" />
            <div className="font-medium text-sm sm:text-base">DIANTARA KEUTAMAAN HARI
                <br /> 'ASYURO' (10 Muharram)</div>
            <div className="text-gray-500 text-xs sm:text-sm">oleh admin, 27 Februari 2023</div>
            <div className="max-w-xs font-light text-sm sm:text-base">Bulan Muharram adalah bulan yang mulia disisi Allah SWT, karena di dalamnya ada satu hari yang mana....</div>
            <Button tulisan="READ MORE" />
        </div>
    )
}
export default FrameGallery