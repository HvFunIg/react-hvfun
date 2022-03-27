import React from 'react';

import { ReactComponent as Vk } from "../img/icons/VK.svg";
import { ReactComponent as Inst } from "../img/icons/Inst.svg";
import { ReactComponent as Telegram } from "../img/icons/Telegram.svg";
import { ReactComponent as Git } from "../img/icons/Git.svg";
import { ReactComponent as Whatsapp } from "../img/icons/Whats.svg";
import PropTypes from "prop-types";

const Social = ({mod}) => {
    return(
        <div className={mod+"-social"}>
            <a href="https://vk.com/justacl4ptr4p"><Vk/></a>
            <a href="https://t.me/hvfunig"><Telegram/></a>
            <a href="https://github.com/HvFunIg"><Git/></a>
            <a href="https://api.whatsapp.com/send?phone=79162621567&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83..."><Whatsapp/></a>
            <a href="#"><Inst/></a>
        </div>
    )
}
Social.propTypes = {
    mod:PropTypes.string
};
Social.defaultProps = {
    mod:"intro"
}
export default Social;
