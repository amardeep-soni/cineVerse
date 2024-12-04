const MovieCard = () => {
    return (
        <div className="w-full">
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
    )
}

export default MovieCard