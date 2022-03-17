import React from 'react';
import PropTypes from "prop-types";
import Tech from "./Tech";
import {useTranslation} from "react-i18next";
import Job from "./Job";


const Jobs = ({header,stack}) => {
    const {t} = useTranslation('CV'); //t - основная функция для перевода

    return <div className="about-ice">
        <h3 >{header}</h3>
        <hr/>
            {stack.map((job) =>  <Job period={job.period} place={job.place}/>)}
    </div>

}
Jobs.propTypes = {
    header: PropTypes.string,
    stack:PropTypes.arrayOf(PropTypes.object)
};

export default Jobs;
