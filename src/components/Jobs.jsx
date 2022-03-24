import React from 'react';
import PropTypes from "prop-types";
import Job from "./Job";


const Jobs = ({header,stack}) => {
    return <div className="about-ice">
        <h3 >{header}</h3>
        <hr/>
            {stack.map((job,index) =>  <Job key={index} period={job.period} place={job.place}/>)}
    </div>

}
Jobs.propTypes = {
    header: PropTypes.string,
    stack:PropTypes.arrayOf(PropTypes.object)
};

export default Jobs;
