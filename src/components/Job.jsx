import React from 'react';
import PropTypes from "prop-types";


const Job = ({period,place}) => {

    return(
        <section className="skill">
            <div className="job-content-period">{period}</div>
            <div className="job-content-place">  {place}</div>
        </section>
    )
}
Job.propTypes = {
    header: PropTypes.string,
    period: PropTypes.string.isRequired,
    place: PropTypes.string,
};

export default Job;
