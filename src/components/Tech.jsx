import React from 'react';
import PropTypes from "prop-types";


const Tech = ({icon,tech}) => {

    return(
        <section className="skill ">
            <div className="tech"> {tech}</div>
        </section>
    )
}
Tech.propTypes = {
    tech: PropTypes.string.isRequired,
};

export default Tech;
