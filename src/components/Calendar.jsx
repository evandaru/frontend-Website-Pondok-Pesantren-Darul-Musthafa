function Calendar() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 my-7">
            <div className="bg-brwn flex flex-col py-3 px-5 w-full sm:w-fit rounded-lg  items-center text-white">
                <h1 className="font-bold text-2xl">24</h1>
                <h1>Sept</h1>
            </div>
            <div className="flex flex-col  text-coklattua">
                <div className="font-bold">Ahad Pon spesial maulid Nabi</div>
                <div>Detail...</div>
            </div>
        </div>
    )
}
export default Calendar