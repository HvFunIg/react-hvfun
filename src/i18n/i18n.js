import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import  header_ru  from "./ru/header_ru.json";
import  header_en  from "./en/header_en.json";
import  intro_en  from "./en/intro_en.json";
import  intro_ru  from "./ru/intro_ru.json";
import projects_en from "./en/projects_en.json"
import projects_ru from "./ru/projects_ru.json"
/**TODO - Разбить переводы на 2 файла **/

i18n.use (initReactI18next)
    .init({

        resources:{
            en:{
                header:header_en,
                intro:intro_en,
                projects:projects_en
            },
            ru:{
                header:header_ru,
                intro:intro_ru,
                projects:projects_ru
            }
        },

        lng: "en", // if you're using a language detector, do not define the lng option
        debug: true,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;