import React, {Fragment} from 'react';
import {useTranslation} from "react-i18next";

import '../../css/header.css';
import Intro from "../Intro";
import IconsLine from "../IconsLine";
import Catalog from "../Catalog";
import CatalogItem from "../CatalogItem";

import myPhoto from "../../img/glitch.png"
import AboutMe from "../AboutMe";
import CV from "../CV";
const tempArray = [1,2,3,4,5]

const Content = () => {

    const { t, i18n } = useTranslation('projects'); //t - основная функция для перевода
    const sortBy=[
        t("projects-header-type2"),
        t("projects-header-type3")
    ]


    return(
        <Fragment>
            <Intro text={""} img={myPhoto}/>
            <Catalog header={ t("projects-header")} sortBy={sortBy}/>
            <CV/>
            <AboutMe/>

        </Fragment>
    )

}
export default Content;
