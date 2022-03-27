import React from 'react';
import PropTypes from "prop-types";

const Technologies = ({header,stack,grid,alter}) => {

    return(
        <div key={header} className={`about-ice  about-ice--skill skill-${grid}`}>
            <h3 className={"skill-header " + (alter ? "skill-alter--header" : "")}>{header}</h3>
            {alter ?
                <div className="skill-alter-imgBox">
                    {alter}
                </div> :
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
