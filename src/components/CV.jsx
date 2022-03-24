import React from 'react';
import {useTranslation} from "react-i18next";

import {stack} from "../js/data"
import '../css/skills.css';
import Cat from "../img/cat.png"

import Technologies from "./Technologies";

const CV = () => {
    const { t} = useTranslation('CV'); //t - основная функция для перевода

    return(
        <section className="skills">
            <h2 className="skill-base about-ice about-ice--skill">{t("stack")}</h2>
            {stack.map((tech, id) =>{
                return <Technologies key={id} grid={id} header={t(tech.header)} stack={tech.stack} />
            })}
            <Technologies grid={6} header={t("stack-cat")} alter={Cat}/>
        </section>
    )
}

export default CV;
