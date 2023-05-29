const LoadingModalDetail = () => {
    return (
        <div className="w-full h-screen absolute inset-0 bg-zinc-950 bg-opacity-60 flex items-center justify-center z-50">
            <div className="max-w-5xl w-full max-h-[500px] h-auto flex gap-x-3 bg-white rounded-xl shadow-lg overflow-hidden relative">
                {/* gambar */}
                <div className="h-[500px] aspect-[4/3] flex items-center justify-center">
                    <div className="w-full h-full bg-zinc-300 animate-pulse"></div>
                </div>
                {/* content */}
                <div className="w-full flex-1 pr-3 py-2 overflow-y-auto scrollbar-thin flex flex-col">
                    <div className="flex-1">
                        {/* title */}
                        <div className="w-64 h-12 pr-5 bg-zinc-300 animate-pulse"></div>
                        <p className="w-20 h-8 mt-2 bg-zinc-300 animate-pulse"></p>
                        {/* deskripsi */}
                        <p className="w-full mt-2 h-5 bg-zinc-300 animate-pulse"></p>
                        <p className="w-full mt-2 h-5 bg-zinc-300 animate-pulse"></p>
                        <p className="w-full mt-2 h-5 bg-zinc-300 animate-pulse"></p>
                        <p className="w-full mt-2 h-5 bg-zinc-300 animate-pulse"></p>
                        <p className="w-full mt-2 h-5 bg-zinc-300 animate-pulse"></p>
                        <p className="w-1/2 mt-2 h-5 bg-zinc-300 animate-pulse"></p>
                    </div>
                    <div className="px-3 py-2 h-10 mb-3 w-full rounded bg-zinc-300 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingModalDetail;
