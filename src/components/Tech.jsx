import React from 'react';
import PropTypes from "prop-types";


const Tech = ({icon,tech}) => {

    return(
        <section className="skill tech">
            <img className="tech-img" src={icon} alt=""/>
            <div> {tech}</div>
        </section>
    )
}
Tech.propTypes = {
    icon: PropTypes.string,
    tech: PropTypes.string.isRequired,
};

export default Tech;
