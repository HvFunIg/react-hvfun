import React,{useState,useEffect} from 'react';

import '../css/catalog.css';
import useWindowDimensions from "../js/useWindowDimensions";
import SmallSelect from "./structural/SmallSelect";
import {useTranslation} from "react-i18next";

import {catalogItems} from '../js/data'
import CatalogItem from "./CatalogItem";

const Catalog = ({header,sortBy}) => {
    const [activeCategory,setActive ] = useState("all");
    const {  width } = useWindowDimensions();
    const { t, i18n } = useTranslation('projects'); //t - основная функция для перевода

    const onClickCategory = (cat) =>{
        //cat.target.value ? setActive(cat.target.value) : setActive(cat);
        console.log(cat)
        setActive(cat);
    }

    const onClickCategory2 = (es) =>{
        setActive(es.value);
        console.log(activeCategory);
    }
    const options = sortBy.map((item, index) => (
        {value:index,label:item}
    ));
    //Метод unshift вставляет переданные значения в начало массивоподобного объекта
    options.unshift({value:"all",label:t("projects-header-type1")})
    const sort = width > 1024 ?
        <div>
            <ul>
                <li
                    className={activeCategory === "all" ? "sort sort-active" : "sort"}
                    onClick={() => onClickCategory("all")}>
                    {t("projects-header-type1")}
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

        <section className="container-vertical catalog">
            <div className="catalog-fragment catalog-fragment--1"/>

            <h1 className="Michroma">{header}</h1>
            {sort}
            <div className={"catalog-items " + (activeCategory === "all" ? '' : " catalog-flex")} >
                {activeCategory === "all" ?
                    catalogItems.map((item,index) =>
                        <div className={"catalog-item"}>
                            <CatalogItem
                                key = {index}
                                img={item.img}
                                typeWord={t(`${item.desc}`)}
                                header={t(`${item.header}`)}
                                text={t(`${item.text}`)}
                                linkTo={item.linkTo}
                                type={item.type}
                                data={item.data}
                            />
                        </div>
                        )
                    :
                    catalogItems.map((item,index) =>{
                        return ( item.type.some((type)=> type === activeCategory) ?
                            <div className={"catalog-item"}>
                                <CatalogItem
                                    key = {index}
                                    img={item.img}
                                    typeWord={t(sortBy[item.type])}
                                    header={t(`${item.header}`)}
                                    text={t(`${item.text}`)}
                                    linkTo={item.linkTo}
                                    type={item.type}
                                    data={item.data}
                                />
                            </div>
                            : "")
                    })
                }
            </div>
            <div className="catalog-fragment catalog-fragment--2"/>
            <div className="catalog-fragment catalog-fragment--3"/>

        </section>
    )

}
export default Catalog;
