import React from 'react';
import PropTypes from "prop-types";

const HexImage = ({img,className,linkTo}) => {
    //Если есть ссылка в свойствах, то сделать градиент поверх изображения
    return(
        <>
            <img src={img} alt=""/>
            </>



    )
}
HexImage.propTypes = {
    img: PropTypes.string.isRequired,
};
export default HexImage;
