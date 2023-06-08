const LoadingAdminMenuList = () => {
    return (
        <div className="w-full h-20 flex items-center flex-1 rounded-lg shadow-md overflow-hidden border border-transparent bg-white">
            {/* image */}
            <div className="h-full aspect-[4/3] flex items-center justify-center">
                <div className="w-full h-full bg-zinc-300 animate-pulse"></div>
            </div>
            {/* content */}
            <div className="px-3 py-2 flex items-center gap-x-3 flex-1 justify-between">
                <div className="w-auto">
                    <div className="h-4 w-32 bg-zinc-300 animate-pulse"></div>
                    <div className="w-24 h-5 mt-2 bg-zinc-300 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingAdminMenuList;
