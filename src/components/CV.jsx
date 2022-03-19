import React from 'react';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import useWindowDimensions from "../js/useWindowDimensions";

import {stack} from "../js/data"
import '../css/skills.css';
import Cat from "../img/cat.png"

import Tech from "./Tech";
import Technologies from "./Technologies";

const CV = () => {
    const { t, i18n } = useTranslation('CV'); //t - основная функция для перевода
    const {  width } = useWindowDimensions();

    return(
        <section className="skills">
            <h2 className="skill-base about-ice about-ice--skill">{t("stack")}</h2>
            {stack.map((tech, id) =>{
                return <Technologies grid={id} header={t(tech.header)} stack={tech.stack} />
            })}
            <Technologies grid={6} header={t("stack-cat")} alter={Cat}/>
        </section>
    )
}

export default CV;
