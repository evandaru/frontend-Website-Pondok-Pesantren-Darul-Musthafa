import gambarMasjid from '../assets/pictures/masjid.png'
import Line from "../assets/pictures/line.svg"
function About() {
    return (
        <div id='tentang' className='flex flex-col py-10 justify-around items-center md:text-sm sm:py-16 sm:flex-row '>
            <div className=' items-center flex flex-col gap-5'>
                <div className='font-bold text-coklattua text-xs sm:text-base'>Tentang Darul</div>
                <div className=' font-semibold text-base sm:text-2xl'>PONDOK PESANTREN DARUL MUSTHAFA</div>
                <div><img src={Line} alt="" /></div>
                <div className="max-w-3xl text-justify text-xs sm:text-base px-5">
                    Pondok Pesantren Darul Musthafa didirikan pada tahun 1999 oleh Al Habib Sholeh bin Muhammad Al Jufri dan Al Habib Abu Bakar bin Zen Al Habsyi sebagai respons terhadap kondisi keadaan yang memprihatinkan. Setelah beberapa diskusi dengan tokoh masyarakat, mereka mendirikan pondok pesantren sementara di rumah Al Habib Abu Bakar di Jakarta. Pada tanggal 12 Rabiul Awwal 1420 H, pondok resmi dimulai di Jawa Tengah.
                </div>
                <div className="flex flex-row justify-between w-full px-5 font-semibold  text-xs sm:text-lg">
                    <ul className="pl-4 list-disc list-outside text-brwn ">
                        <li>MONDOK & SEKOLAH</li>
                        <li>BAHASA INGGRIS</li>
                        <li>BAHASA ARAB</li>
                    </ul>
                    <ul className="list-disc list-outside text-brwn ">
                        <li>TAHFIDZ AL-QURAN</li>
                        <li>METODE ARBAIN</li>
                    </ul>
                </div>
            </div>
            <div className='px-5 mt-6'><img src={gambarMasjid} alt="" /></div>
        </div>
    )
}

export default About