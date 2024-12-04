const Header = () => {
    return (
        <div className="md:h-screen sticky top-0 left-0 right-0 bottom-0 z-50 md:p-4">
            <div className="bg-slate-800 h-full md:rounded-lg px-4 py-5 flex md:flex-col gap-10 items-center">
                {/* Logo Section */}
                <div className="text-center text-4xl">
                    <i className="text-red-400 fa-solid fa-clapperboard"></i>
                </div>

                {/* Navigation Icons */}
                <div className="flex md:flex-col md:justify-start justify-center text-xl gap-5 grow">
                    <div className="text-center cursor-pointer">
                        <i className="text-slate-400 fa-solid fa-house"></i>
                    </div>
                    <div className="text-center cursor-pointer">
                        <i className="text-slate-400 fa-solid fa-film"></i>
                    </div>
                    <div className="text-center cursor-pointer">
                        <i className="text-slate-400 fa-solid fa-tv"></i>
                    </div>
                    <div className="text-center cursor-pointer">
                        <i className="text-slate-400 fa-solid fa-bookmark"></i>
                    </div>
                </div>

                {/* User Profile Section */}
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://via.placeholder.com/50/777777" alt="" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Header;
