import React from 'react';
import PropTypes from "prop-types";
import '../css/header.css';
import InProgress from "./structural/InProgress";

const Jobs = ({children}) => {
    return(
        <section>
            {children}
            <InProgress/>
        </section>
    )
}
Jobs.propTypes = {

};
Jobs.defaultProps = {

};
export default Jobs;
