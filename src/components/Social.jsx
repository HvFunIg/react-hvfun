import React from 'react';

import HexImage from "./structural/HexImage";

import vk from "../img/icons/VK.png"
import inst from "../img/icons/Insta.png"
import whatsapp from "../img/icons/Whatsapp.png"


const Social = () => {

    return(
        <div className="intro-social">
            <HexImage img={vk} className="hex-social" linkTo={"https://vk.com/justacl4ptr4p"}/>
            <HexImage img={inst} className="hex-social" linkTo={"https://www.instagram.com/hvfunzi/"}/>
            <HexImage img={whatsapp} className="hex-social" linkTo={"https://api.whatsapp.com/send?phone=79162621567&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83..."}/>
        </div>
    )

}
Social.propTypes = {

};
Social.defaultProps = {

};
export default Social;
