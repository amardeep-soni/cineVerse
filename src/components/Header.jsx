const Header = () => {
    return (
        <div className="h-screen sticky left-0 w-[110px] p-5 top-0 bottom-0">
            <div className="bg-slate-800 h-full rounded-lg p-5">
                <div className="text-center text-4xl pb-8">
                    <i className="text-red-400 fa-solid fa-clapperboard"></i>
                </div>
                <div className="text-center text-xl py-3">
                    <i className="text-slate-400 fa-solid fa-house"></i>
                </div>
                <div className="text-center text-xl py-3">
                    <i className="text-slate-400 fa-solid fa-film"></i>
                </div>
                <div className="text-center text-xl py-3">
                    <i className="text-slate-400 fa-solid fa-tv"></i>
                </div>
                <div className="text-center text-xl py-3">
                    <i className="text-slate-400 fa-solid fa-bookmark"></i>
                </div>
            </div>
        </div>
    )
}

export default Header