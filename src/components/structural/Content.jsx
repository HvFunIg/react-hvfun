import React, {Fragment} from 'react';
import {useTranslation} from "react-i18next";

import '../../css/header.css';
import Intro from "../Intro";
import Catalog from "../Catalog";

import myPhoto from "../../img/glitch.png"
import AboutMe from "../AboutMe";
import CV from "../CV";
import Project from "../Project";
import {projects} from "../../js/data";

const Content = () => {

    const { t, i18n } = useTranslation(['projects','main']); //t - основная функция для перевода
    const sortBy=[
        t("projects-header-type2"),
        t("projects-header-type3")
    ]


    return(
        <Fragment>
            <Intro text={""} img={myPhoto}/>
            <AboutMe/>
            <Catalog header={ t("main:header-projects")} sortBy={sortBy}/>
            <CV header={ t("main:header-CV")}/>
            {projects.map((project,index) =>(
                <Project key={index} {...project}/>
                )
            )
            }

        </Fragment>
    )

}
export default Content;
