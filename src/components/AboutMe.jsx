import React from 'react';
import '../css/about.css';
import {useTranslation} from "react-i18next";
import Jobs from "./Jobs";
import AboutPhoto from "../img/About.jpg"

const AboutMe = () => {
    const {t} = useTranslation('about'); //t - основная функция для перевода

    return(
        <section className="aboutBlock" id="aboutme">
            <div className="about-ice">
                <h2>{t("header")}</h2>
                <div className="about-content">
                    <img className="about-img" src={AboutPhoto} alt=""/>
                    <p>
                        {t("bio")}
                    </p>
                </div>
                <div className="about-factsBlock">
                    <h3>{t("header-facts")}</h3>
                    <hr/>
                    <ul className="about-facts">
                        {t("facts", {returnObjects:true}).map((fact,id)=><li key={id}>{fact}</li>)}
                    </ul>
                </div>
            </div>
            <div className="about-education">
                {t("JobsArray", {returnObjects:true}).map((job, index) =>
                    <Jobs key={index} header={t(job.type)} stack={job.stack}/>
                )}
            </div>
        </section>
    )
}


export default AboutMe;
