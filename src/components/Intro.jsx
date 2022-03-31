import React from 'react';

import '../css/intro.css';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

import Button from "./structural/Button";
import useWindowDimensions from "../js/useWindowDimensions";
import Social from "./Social";

import Bookmark from "../img/Fragments/Rect_Intro.svg"
import Modal from "./structural/Modal";
import Project from "./Project";
import ContactMe from "./ContactMe";
const Intro = ({img}) => {
    const { t, i18n } = useTranslation(['intro','header']); //t - основная функция для перевода
    const {width } = useWindowDimensions();
    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false);

    return(
        <section className="intro" >
                <img src={img} alt="Igor" className="intro-img"/>
            { width > 850 ?
                <img className="intro-svg" src={Bookmark} alt={"About me"}/>
                : ''}

            <div className="intro-bookmark">

                    <div className="intro-text">
                    <h1> {t("intro:hello")}</h1>
                    <p className="strikethrough light-neon">{t("strikethrough1")} </p>
                    <p className="strikethrough light-neon">{t("strikethrough2")} </p>
                    <p className="light-neon">{t("desc")} </p>
                </div>
                <div className="intro-contacts">
                    <div className="intro-buttons">
                        <Button className="intro-button" text={t("header:link_contact")}  handler={() => setModal(true)}></Button>
                        <a href="../files/CV.pdf" download className="intro-button intro-CV" > {t("header:link_CV")} </a>

                    </div>
                    <Modal
                        visible={isModal}
                        title={t("header:link_contact")}
                        content={
                            <ContactMe handlerClose={onClose}/>
                        }
                        footer={
                            ''
                        }
                        onClose={onClose}
                    />
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
