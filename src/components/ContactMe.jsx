import React from "react";
import {useTranslation} from "react-i18next";

const ContactMe = ({handlerContact}) => {
    const {t} = useTranslation('CV'); //t - основная функция для перевода

    return (
        <form onSubmit={handlerContact} className="contact-form">
            <label>Ваше имя:</label>
            <input type = "text"
                   name="contact-text"
                   id="contact-text"
            />
            <label>Email:</label>
            <input type = "text"
                   name="contact-email"
                   id="contact-email"
            />
            <label>Ваше сообщение</label>
            <textarea rows={4}></textarea>
            <input type="submit" value="Связаться" className="contact-modal-button"/>
        </form>
    )
}
export default ContactMe;