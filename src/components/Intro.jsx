import React from 'react';

import '../css/intro.css';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

import hexes from "../img/Hexes.png"
import Button from "./structural/Button";
import useWindowDimensions from "../js/useWindowDimensions";
import Social from "./Social";

import Bookmark from "../img/Fragments/Rect_Intro.svg"
const Intro = ({img}) => {
    const { t, i18n } = useTranslation('intro'); //t - основная функция для перевода
    const { height, width } = useWindowDimensions();

    return(
        <section className="intro" >
            <img src={img} alt="My photo" className="intro-img"/>

            <div className="intro-bookmark">
                <img className="intro-svg" src={Bookmark} alt={"About me"}/>
                <div className="intro-text">
                    <h1> {t("hello")}</h1>
                    <p className="strikethrough">{t("strikethrough1")} </p>
                    <p className="strikethrough">{t("strikethrough2")} </p>
                    <p >{t("desc")} </p>
                </div>
                <div className="intro-contacts">
                    <div className="intro-buttons">
                        <Button className="intro-button" text={i18n.t("link_contact",{ns:"header"})}></Button>
                        <Button className="intro-button" text={i18n.t("link_CV",{ns:"header"})}></Button>
                    </div>
                   <Social/>
                </div>

            </div>

        </section>
    )
}

Intro.propTypes = {
    text: PropTypes.string,
    img:PropTypes.string,
};

export default Intro;
