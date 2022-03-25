import React from 'react';

import { ReactComponent as Vk } from "../img/icons/VK.svg";
import { ReactComponent as Inst } from "../img/icons/Inst.svg";
import { ReactComponent as Telegram } from "../img/icons/Telegram.svg";
import { ReactComponent as Git } from "../img/icons/Git.svg";
import { ReactComponent as Whatsapp } from "../img/icons/Whats.svg";

const Social = () => {
    return(
        <div className="intro-social">
            <a href="https://vk.com/justacl4ptr4p"><Vk/></a>
            <a href=""><Telegram/></a>
            <a href=""><Git/></a>
            <a href=""><Whatsapp/></a>
            <a href=""><Inst/></a>
        </div>
    )
}
export default Social;
