import React from 'react';
import PropTypes from "prop-types";
import Tech from "./Tech";
import {useTranslation} from "react-i18next";


const Technologies = ({header,stack,grid,alter}) => {
    const {t} = useTranslation('CV'); //t - основная функция для перевода

    return(
        <div className={`about-ice about-ice--alter about-ice--skill skill-${grid}`}>
            <h3 className={"skill-header " + (alter ? "skill-alter--header" : "")}>{header}</h3>
            {alter ?
                <img  className="skill-alter--img" src={alter} alt="cat"/> :
                stack.map((tech) =>  <Tech tech={tech.tech}  />)

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
