const LoadingMenuCard = () => {
    return (
        <div className="w-full flex flex-col h-auto flex-1 rounded-lg shadow-md overflow-hidden border border-transparent bg-white">
            {/* image */}
            <div className="w-full aspect-[4/3] flex items-center justify-center">
                <div className="w-full h-full bg-zinc-300 animate-pulse"></div>
            </div>
            {/* content */}
            <div className="px-3 py-2 flex flex-col flex-1">
                <div className="flex-1">
                    <div className="h-4 flex-1 w-full bg-zinc-300 animate-pulse"></div>
                    <div className="h-6 w-20 mt-1 bg-zinc-300 animate-pulse"></div>
                </div>
                <div className="flex items-center gap-x-2 mt-3 h-fit">
                    <div className="px-6 py-4 rounded flex-1 w-full bg-zinc-300 animate-pulse"></div>
                    <div className="px-6 py-4 rounded flex-1 w-full bg-zinc-300 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingMenuCard;
