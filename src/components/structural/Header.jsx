import React from 'react';
import { stack as Menu } from 'react-burger-menu'
import { useTranslation } from 'react-i18next';

import useWindowDimensions from '../../js/useWindowDimensions';
import '../../css/header.css';
import '../../css/burger.css';

import NavLinks from "../NavLinks";
import {Link} from "react-router-dom";
import Button from "./Button";
import Profile from "../Profile";
import LangChanger from "../LangChanger";

/**  Бургер из модуля react-burger-menu **/


const linksTo = ["link1","link2"];
const Header = () => {
    const { height, width } = useWindowDimensions();
    const { t, i18n } = useTranslation("header"); //t - основная функция для перевода
    const links = [t("link_about",),t("link_works"),t("link_contact")];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)

        // Для корректной замены шрифтов
        let html = document.querySelector('html');
        html.setAttribute("lang",lng)
    };

    if (width > 1024)
        return(
            <header>
                <Profile name={t("name")} about={" AR, Frontend"}/>
                <NavLinks links={links} linksTo={linksTo}/>
                <LangChanger />
            </header>
        )
    else
        return(
            <header>
                <Menu right>
                    {links.map((link,index) =>
                        <Link to={linksTo[index]} className="menu-item" key={index}> {link}</Link>)}
                </Menu>
            <LangChanger />

            </header>
        )
}
export default Header;

