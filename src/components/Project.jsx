import React from "react";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import '../css/projects.css'
import fragment from "../img/Fragments/Modal.svg"
import hex from "../img/Fragments/Hex.svg"
import RateBlock from "./structural/RateBlock";
import useWindowDimensions from "../js/useWindowDimensions";

const Project = ({title,stack,img,longDesc,link}) => {
    const {  width } = useWindowDimensions();
    const {t} = useTranslation('projects,CV'); //t - основная функция для перевода
    const rate = (rate,main="white",secondary="black") => {
        let rateArray = [];
        for (let i = 0; i<rate; i++){
            rateArray.push(<RateBlock key={i} main={main} secondary={secondary}/>)
        }
        return rateArray;
    }

    return (
        <>
            <div className="project">
                {width > 956 ?
                    <img className="project-fragment" src={fragment} alt=""/>
                    : ''
                }

                <div className="project-info">
                    <img className="project-img" src={img} alt={title}/>
                    <div className="project-tech-panel">
                        {stack.map((tech,index1)=>
                            <div className="project-techs" key={index1}>
                                <h3 className="light-neon">{t(`CV:${tech.type}`)}</h3>
                                {tech.techArray.map((item,index2) =>
                                    <div className="project-tech" key={index1+index2}>
                                        <p>{item.name}</p>
                                        <div className="project-rate">
                                            {rate(item.rate,item.main,item.secondary)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="project-hexes">
                    <img src={hex} alt=""/>
                    <img src={hex} alt=""/>
                    <img src={hex} alt=""/>
                </div>
                <p className="project-text">
                    {longDesc}
                </p>
            </div>
        </>
    )
}
Project.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    link: PropTypes.string,
    desc: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.object).isRequired,
};
Project.defaultProps = {
    stack:[]
}
export default Project;