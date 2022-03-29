import React,{useRef} from "react";
import emailjs from '@emailjs/browser';

import "../css/contactMe.css"
import { ReactComponent as Radar } from "../img/Contacts.svg";
import {useTranslation} from "react-i18next";
import useWindowDimensions from "../js/useWindowDimensions";

const ContactMe = ({handlerClose}) => {
    const {t} = useTranslation('contacts'); //t - основная функция для перевода

    const form = useRef();
    const {width } = useWindowDimensions();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'Bsk24w9Osbjei2Nmv')
            .then((result) => {
                console.log(result.text);
                handlerClose();
            }, (error) => {
                console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contactForm">
            <div className="contact-line">
                <label>{t("contacts-name")}</label>
                <input type = "text"
                       name="user_name"
                       className="contact-line--input"
                       placeholder="Иван Иваненко"
                       required

                />
            </div>
            <div className="contact-line">
                <label>{t("contacts-email")}</label>
                <input type = "email"
                       name="user_email"
                       className="contact-line--input"
                       placeholder="youremail@gmail.com"
                       required
                />
            </div>
            <div className="contact-line">
                <div className="contact-line--message">
                    <label>{t("contacts-message")}</label>
                    { width > 650 ?
                        <Radar/>
                        :''}

                </div>
                <textarea name="message"
                          required
                          className="contact-line--input"
                          rows={4}></textarea>
            </div>
            <input type="submit" value={t("contacts-send")} className="contact-button Michroma"/>
        </form>
    )
}
export default ContactMe;