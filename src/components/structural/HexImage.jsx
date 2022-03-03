import React from 'react';
import PropTypes from "prop-types";

const HexImage = ({img,className,linkTo}) => {
    //Если есть ссылка в свойствах, то сделать градиент поверх изображения
    return(
        <svg className={className} viewBox="-10 -10 230 230" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g filter="url(#filter0_d_914_264)">
                <path d="M108 0L198.067 53.75V161.25L108 215L17.9334 161.25V53.75L108 0Z" fill={"url(#pattern"+img+")"} shape-rendering="crispEdges"/>
                <path d="M19.9334 54.8855L108 2.32908L196.067 54.8855V160.114L108 212.671L19.9334 160.114V54.8855Z" stroke="#00ECFB" stroke-width="4" shape-rendering="crispEdges"/>
                {linkTo ?
                    <path d="M19.9334 54.8855L108 2.32908L196.067 54.8855V160.114L108 212.671L19.9334 160.114V54.8855Z" fill="url(#paint0_linear_914_264)" fill-opacity="0.63" shape-rendering="crispEdges"/>
                :''}
            </g>
            <a href={linkTo}>
                <image id={"image"+img} width="1600" height="900"
                       xlinkHref={img}  />
            </a>
            <defs>
                <filter id="filter0_d_914_264" x="0.933357" y="-16" width="216.133" height="251" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="5.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.924333 0 0 0 0 0.983333 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_956_245"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_956_245" result="shape"/> </filter>
                <pattern id={"pattern"+img} patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref={"#image"+img} transform="translate(-0.422644) scale(0.00115331)"/>
                    <linearGradient id="paint0_linear_914_264" x1="32.5" y1="20" x2="52.5" y2="155" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00FFFF"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                </pattern>


            </defs>

        </svg>


    )
}
HexImage.propTypes = {
    img: PropTypes.string.isRequired,
};
export default HexImage;
