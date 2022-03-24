import React from 'react';
import { useTranslation } from 'react-i18next';

const LangChanger = () => {
    //Переключатель между русским и английским
    const {i18n } = useTranslation("header"); //t - основная функция для перевода

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        // Для корректной замены шрифтов
        let html = document.querySelector('html');
        html.setAttribute("lang",lng)
    };
    return(
        <div className="lang">
            <button className="lang-button"
                    type="button"
                    onClick={() => changeLanguage('ru')}
                    lang="en">
                ru
            </button>
            /
            <button
                className="lang-button"
                type="button"
                onClick={() => changeLanguage('en')}
                lang="en">
                en
            </button>
        </div>
    )
}
export default LangChanger;

