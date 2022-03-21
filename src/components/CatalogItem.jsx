import React, {useState} from 'react';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import Button from "./structural/Button";
import useWindowDimensions from "../js/useWindowDimensions";
import Modal from "./structural/Modal";
import ContactMe from "./ContactMe";
import Project from "./Project";



const CatalogItem = ({header,text,img,linkTo,typeWord,data}) => {
    const { t, i18n } = useTranslation('projects'); //t - основная функция для перевода
    const {  width } = useWindowDimensions();
    const [isModal, setModal] = React.useState(false)

    const onClose = () => setModal(false)

    const handlerContact = (e) =>{
        alert("Сообщение должно быть отправлено");
    }
    return(
        <div className={"catalog-item-content"}>
            <div className="catalog-item--main">
                {(width < 856) ? <p >{text}</p> : ''}

                <img src={img} className="catalog-item--img"/>
                <div className="catalog-item--text">
                    <h3 className="Michroma light-neon"> {header}</h3>
                    {(width > 855) ? <p>{text}</p> : ''}
                    <h3 className="Michroma light-neon"> {data}</h3>
                </div>


            </div>
            <div className="container-wide catalog-item--footer">
                {(width > 450) ?
                    <h3 className="Michroma light-neon"> {typeWord}</h3>
                    : ''}


                <Button className={"button-transparent"}
                        text={t("more")}
                        handler={() => setModal(true)}
                > </Button>
                <Modal
                    visible={isModal}
                    title='header'
                    content={
                        <Project/>}
                    footer={
                        ''
                    }
                    onClose={onClose}
                />
            </div>
        </div>


    )

}
CatalogItem.propTypes = {
    img: PropTypes.arrayOf(PropTypes.string),
    header: PropTypes.string.isRequired,
    text: PropTypes.string,
    linkTo: PropTypes.string.isRequired,
    className: PropTypes.string,
    typeWord: PropTypes.string,
    data: PropTypes.number
};
CatalogItem.defaultProps = {
    linksTo: ["#"],
    header:"Header",
    typeWord:"No type"
};
export default CatalogItem;
