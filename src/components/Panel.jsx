import React from 'react';
import PropTypes from "prop-types";
import '../css/skills.css';
import InProgress from "./structural/InProgress";

const Panel = ({header,children}) => {
    return(
        <section className="panel">
            <h2 className="Michroma">{header}</h2>
            {children}
        </section>
    )
}
Panel.propTypes = {

};
Panel.defaultProps = {

};
export default Panel;
