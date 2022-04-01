import React from 'react';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import Button from "./structural/Button";
import useWindowDimensions from "../js/useWindowDimensions";
import Modal from "./structural/Modal";
import Project from "./Project";



const CatalogItem = ({
     title,
     longDesc,
     shortDesc,
     img,
     images,
     linkTo,
     typeWord,
     date,
     stack,
     list
}) => {
    const {t} = useTranslation('projects'); //t - основная функция для перевода
    const {  width } = useWindowDimensions();

    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)


    return(
        <div className={"catalog-item-content"} onClick={() => setModal(true)}>

            <div className="catalog-item--main">
                {(width < 856) ? <p >{shortDesc}</p> : ''}

                <img alt={title} src={img} className="catalog-item--img"/>
                <div className="catalog-item--text">
                    <h3 className="Michroma catalog-item--header"> {title}</h3>
                    {(width > 855) ? <p>{shortDesc}</p> : ''}
                    <time className="Michroma catalog-item--header"> {date}</time>
                </div>


            </div>
            <div className="container-wide catalog-item--footer">
                {(width > 450) ?
                    <h3 className="Michroma light-neon"> {typeWord}</h3>
                    : ''}
                <Button className={"button-transparent"}
                        text={t("more")}
                        handler={() => setModal(true)}> </Button>
                <Modal
                    visible={isModal}
                    title={title}
                    content={
                        <Project title={title} list={list} img={images} stack={stack} longDesc={longDesc}/>}
                    footer={
                        linkTo ?
                        <div className="project-footer">
                            <a className="button-transparent" href={linkTo}> {t("project-footer")}</a>
                        </div>
                            :null
                    }
                    onClose={onClose}
                />
            </div>
        </div>


    )

}
CatalogItem.propTypes = {
    typeWord: PropTypes.string,
    date: PropTypes.number,
    title:PropTypes.string,
    longDesc:PropTypes.string,
    shortDesc:PropTypes.string,
    img:PropTypes.string,
    images:PropTypes.string,
    linkTo:PropTypes.string,
    stack:PropTypes.arrayOf(PropTypes.object),
};
CatalogItem.defaultProps = {
    linksTo: ["#"],
    header:"Header",
    typeWord:"No type",
    stack:[]
};
export default CatalogItem;
