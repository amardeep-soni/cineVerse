export const Home = () => {
    return (
        <div className="min-h-screen px-3 pt-9 text-white homeCont">
            <div className="flex justify-start items-center border-2 border-slate-400 py-2 px-3 rounded-lg">
                <i className="fa-solid fa-search mr-3 text-2xl"></i>
                <input type="text" className="outline-none px-3 text-xl py-1 w-full bg-transparent" placeholder="Search for movies or TV Series" />
            </div>

            <div>
                <h1 className="text-3xl py-8">Trending</h1>
                <div>
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
                        {[0, 1, 2, 3].map((i) => (
                            <div key={i} className="rounded-lg overflow-hidden relative w-full h-[200px]">
                                <img src="https://via.placeholder.com/400X200/777777" alt="Movie Poster" className="w-full h-full object-cover" />
                                <div className="absolute bottom-8 left-8">
                                    <p className="flex items-center text-ms gap-2">
                                        <span>2019</span>
                                        <span className="w-1 h-1 bg-white rounded-full"></span>
                                        <span><i className="fa-solid fa-film mr-1"></i> Movie</span>
                                        <span className="w-1 h-1 bg-white rounded-full"></span>
                                        <span>PG</span>
                                    </p>
                                    <p className="text-2xl font-bold">Beyond Earth</p>
                                </div>
                                <div className="bg-slate-600 absolute top-4 right-4 w-9 h-9 rounded-full flex justify-center items-center text-sm">
                                    <i className="fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-3xl py-8">Recommended for you</h1>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-8">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <div className="w-full" key={i}>
                            <div className="relative rounded-lg overflow-hidden w-full h-[170px]">
                                <img src="https://via.placeholder.com/270X170/777777" alt="" className="w-full h-full object-cover" />
                                <div className="bg-slate-600 absolute top-4 right-4 w-9 h-9 rounded-full flex justify-center items-center text-sm">
                                    <i className="fa-regular fa-bookmark"></i>
                                </div>
                            </div>

                            <div>
                                <p className="flex items-center text-ms gap-2 mt-2">
                                    <span>2019</span>
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                    <span><i className="fa-solid fa-film mr-1"></i> Movie</span>
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                    <span>PG</span>
                                </p>
                                <p className="text-2xl font-bold">Beyond Earth</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
