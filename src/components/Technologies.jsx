import React from 'react';
import PropTypes from "prop-types";

const Technologies = ({header,stack,grid,alter}) => {

    return(
        <div key={header} className={`about-ice about-ice--alter about-ice--skill skill-${grid}`}>
            <h3 className={"skill-header " + (alter ? "skill-alter--header" : "")}>{header}</h3>
            {alter ?
                <img  className="skill-alter--img" src={alter} alt="cat"/> :
                stack.map((tech,index) =>
                    <div className="tech" key={index}> {tech.tech}</div>
                )
            }
        </div>
    )

}
Technologies.propTypes = {
    header: PropTypes.string,
    stack:PropTypes.arrayOf(PropTypes.object),
    id:PropTypes.number,
    alter:PropTypes.string
};

export default Technologies;
