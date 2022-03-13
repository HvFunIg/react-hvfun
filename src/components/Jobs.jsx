import React from 'react';
import PropTypes from "prop-types";
import Tech from "./Tech";
import {useTranslation} from "react-i18next";
import Job from "./Job";


const Jobs = ({header,stack}) => {
    const {t} = useTranslation('CV'); //t - основная функция для перевода

    return <>
        <h3 className="skill-header">{header}</h3>
        <div className="skill-block">
            {stack.map((tech) =>  <Job period={tech.period} place={tech.place}/>)}
        </div>
    </>

}
Jobs.propTypes = {
    header: PropTypes.string,
    stack:PropTypes.arrayOf(PropTypes.object)
};

export default Jobs;
