import React from "react";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import '../css/projects.css'

const Project = ({title,stack,images,desc,link}) => {
    const {t} = useTranslation('projects,CV'); //t - основная функция для перевода

    return (
        <div className="project">
            {t(`projects:projects.${title}.title`,{returnObjects: true})}
            {stack.map(tech=>
                <div>
                    <h3>{t(`CV:${tech.type}`)}</h3>
                    {tech.techArray.map(item =>
                        <div className="project-tech">
                            <p>{item.name}</p>
                        </div>
                    )}

                </div>
            )}
        </div>
    )
}
Project.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    link: PropTypes.string,
    desc: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.object),
};

export default Project;