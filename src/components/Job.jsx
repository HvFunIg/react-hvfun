import React from 'react';
import PropTypes from "prop-types";


const Job = ({period,place}) => {

    return(
        <div className="job">
            <div className="job-period">{period}</div>
            <div className="job-place">  {place}</div>
        </div>
    )
}
Job.propTypes = {
    header: PropTypes.string,
    period: PropTypes.string.isRequired,
    place: PropTypes.string,
};

export default Job;
