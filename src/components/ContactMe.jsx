import React from "react";
import "../css/contactMe.css"
import {useTranslation} from "react-i18next";

const ContactMe = ({handlerContact}) => {
    const {t} = useTranslation('CV'); //t - основная функция для перевода

    return (
        <form onSubmit={handlerContact} className="contactForm">
            <div className="contact-line">
                <label>Ваше имя:</label>
                <input type = "text"
                       name="contact-text"
                       id="contact-text"
                       className="contact-line--input"
                       placeholder="Иван Иваненко"

                />
            </div>
            <div className="contact-line">
                <label>Email:</label>
                <input type = "text"
                       name="contact-email"
                       id="contact-email"
                       className="contact-line--input"
                       placeholder="youremail@gmail.com"
                />
            </div>
            <div className="contact-line">
                <label>Ваше сообщение</label>
                <textarea className="contact-line--input" rows={4}></textarea>
            </div>
            <input type="submit" value="Связаться" className="contact-button"/>
        </form>
    )
}
export default ContactMe;