import React, {Fragment} from 'react';
import {useTranslation} from "react-i18next";

import '../../css/header.css';
import Intro from "../Intro";
import Catalog from "../Catalog";

import myPhoto from "../../img/glitch.png"
import AboutMe from "../AboutMe";
import CV from "../CV";

const Content = () => {

    const { t } = useTranslation(['projects','main']); //t - основная функция для перевода
    const sortBy=t("types",{returnObjects:true});



    return(
        <Fragment>
            <Intro text={""} img={myPhoto}/>

            <AboutMe/>
            <Catalog header={ t("main:header-projects")} sortBy={sortBy}/>
            <CV header={ t("main:header-CV")}/>


        </Fragment>
    )

}
export default Content;
