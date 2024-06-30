import Line from "../assets/pictures/line.svg"
import masjid2 from "../assets/pictures/masjid2.png"
import Calendar from "../components/Calendar"
function Event() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-around py-16 gap-4">
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="font-bold text-coklattua text-xs sm:text-base">Event</div>
                <div className=" font-semibold text-xs sm:text-2xl">Upcoming Event</div>
                <img className="w-2/3" src={Line} alt="" />
                <div>
                    <Calendar />
                    <Calendar />
                    <Calendar />
                </div>
            </div>
            <div className="px-5"><img src={masjid2} alt="" /></div>

        </div>
    )
}
export default Event