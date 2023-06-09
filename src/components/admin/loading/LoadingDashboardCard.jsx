const LoadingDashboardCard = () => {
    return (
        <div className="flex items-center justify-between rounded-md shadow-md px-8 py-5 flex-1 bg-white">
            <div className="box">
                <div className="h-7 w-20 bg-zinc-300 animate-pulse"></div>
                <h3 className="h-5 w-10 bg-zinc-300 animate-pulse mt-2"></h3>
            </div>
            <div className="h-9 w-9 bg-zinc-300 animate-pulse"></div>
        </div>
    );
};

export default LoadingDashboardCard;
