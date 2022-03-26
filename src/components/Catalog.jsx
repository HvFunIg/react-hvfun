import React,{useState} from 'react';

import '../css/catalog.css';
import useWindowDimensions from "../js/useWindowDimensions";
import SmallSelect from "./structural/SmallSelect";
import {useTranslation} from "react-i18next";

import {catalogItems} from '../js/data'
import CatalogItem from "./CatalogItem";
import Button from "./structural/Button";
import Modal from "./structural/Modal";

const Catalog = ({header,sortBy}) => {
    const [activeCategory,setActive ] = useState("all");
    const {  width } = useWindowDimensions();
    const { t } = useTranslation('projects'); //t - основная функция для перевода

    const onClickCategory = (cat) =>{
        //cat.target.value ? setActive(cat.target.value) : setActive(cat);
        setActive(cat);
    }

    const onClickCategory2 = (es) =>{
        setActive(es.value);
    }
    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)
    const options = sortBy.map((item, index) => (
        {value:index,label:item}
    ));
    //Метод unshift вставляет переданные значения в начало массивоподобного объекта
    options.unshift({value:"all",label:t("projects-all")})
    const sort = width > 1024 ?
        <div className="sort-main">
            <ul>
                <li
                    className={activeCategory === "all" ? "sort sort-active" : "sort"}
                    onClick={() => onClickCategory("all")}>
                    {t("projects-all")}
                </li>
                {sortBy &&
                sortBy.map((item, index) => (
                    <li
                        className={activeCategory === index ? "sort sort-active" : "sort"}
                        onClick={() => onClickCategory(index)}
                        key={`${item}_${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
        :
        <SmallSelect onChange={onClickCategory2}
                     options={options}/>

    return(

        <section className="container-vertical " id="portfolio" name="portfolio">
            <div className="catalog">
                <a id="portfolio" name="portfolio"></a>
                <h1  className={"Michroma " + "catalog-header"}>{header}</h1>
                {sort}
                <div className={"catalog-items " + (activeCategory === "all" ? '' : " catalog-flex")} >
                    {activeCategory === "all" ?
                        catalogItems.map((item,index) =>
                            <div className={"catalog-item"} key={"cat-item"+index}>

                                <CatalogItem
                                    key = {index}
                                    {...item}
                                    typeWord={t(`type.${item.type}`)}
                                    title={t(`projects.${item.header}.title`)}
                                    longDesc={t(`projects.${item.header}.longDesc`)}
                                    shortDesc={t(`projects.${item.header}.shortDesc`)}
                                />

                            </div>
                        )
                        :
                        catalogItems.map((item,index) =>{
                            return ( item.type.some((type)=> type === activeCategory) ?
                                <div className={"catalog-item"}>
                                    <CatalogItem
                                        key = {index}
                                        {...item}
                                        typeWord={t(sortBy[item.type])}
                                        title={t(`projects.${item.header}.title`)}
                                        longDesc={t(`projects.${item.header}.longDesc`)}
                                        shortDesc={t(`projects.${item.header}.shortDesc`)}
                                    />
                                </div>
                                : "")
                        })
                    }
                </div>
            </div>


        </section>
    )

}
export default Catalog;
