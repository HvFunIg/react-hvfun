import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import NavLinks from "./NavLinks";
import {useTranslation} from "react-i18next";
import Button from "./structural/Button";
import HexImage from "./structural/HexImage";
import useWindowDimensions from "../js/useWindowDimensions";



const CatalogItem = ({header,text,img,linkTo,typeWord,data}) => {
    const { t, i18n } = useTranslation('projects'); //t - основная функция для перевода
    const {  width } = useWindowDimensions();

    return(
        <div className={"catalog-item-content"}>
            <div className="catalog-item--main">
                <HexImage img={img} className="hex-catalog"/>
                <div className="catalog-item--text">
                    <h3 className="Michroma light-neon"> {header}</h3>
                    {(width < 1441 && width > 550) ? <p>{text}</p> : ''}
                    <h3 className="Michroma light-neon"> {data}</h3>
                </div>


            </div>
            <div className="container-wide catalog-item--footer">
                <h3 className="Michroma light-neon"> {typeWord}</h3>

                <Button className={"button-transparent"} text={t("more")}  > </Button>
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
