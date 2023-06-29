import { PropTypes } from "prop-types";
import { memo } from "react";

const DashboardCard = (props) => {
    return (
        <div className="flex items-center justify-between rounded-md shadow-md px-8 py-5 flex-1 bg-white">
            <div className="box">
                <p className="text-2xl font-bold text-emerald-600">{props.count}</p>
                <h3 className="font-semibold">{props.label}</h3>
            </div>
            <div className="text-4xl">{props.icon}</div>
        </div>
    );
};

DashboardCard.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
};

export default memo(DashboardCard);
