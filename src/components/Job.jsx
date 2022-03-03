import React from 'react';
import PropTypes from "prop-types";
import '../css/header.css';
import {useTranslation} from "react-i18next";
import NavLinks from "./NavLinks";

const Job = ({header,date,place}) => {

    return(
        <section className={"job"}>
            <h1> {header} </h1>
            <div className="job-content">
                <div> {date} </div>
                <div> {place}</div>
            </div>
        </section>
    )
}
Job.propTypes = {
    header: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    place: PropTypes.string,
};

export default Job;
