import React from 'react';
import PropTypes from "prop-types";
import Tech from "./Tech";
import {useTranslation} from "react-i18next";


const Technologies = ({header,stack}) => {
    const {t} = useTranslation('CV'); //t - основная функция для перевода

    return <>
        <h3 className="skill-header">{header}</h3>
            <div className="skill-block">
                {stack.map((tech) =>  <Tech tech={tech.tech}  icon={tech.icon}/>)}
            </div>
        </>

}
Technologies.propTypes = {
    header: PropTypes.string,
    stack:PropTypes.arrayOf(PropTypes.object)
};

export default Technologies;
