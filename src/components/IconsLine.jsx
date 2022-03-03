import React from 'react';

import '../css/iconsLine.css';
import icon1 from '../img/icons/Clock.png'
import icon2 from '../img/icons/Clock.png'
import icon3 from '../img/icons/Clock.png'
import icon4 from '../img/icons/Clock.png'

import Icon from "./Icon";


const iconItems = [
    {
        header:"Header1",
        text:"Cum sociis natoque penatibus et magnis dis.",
        image:icon1
    },
    {
        header:"Header2",
        text:"Cum sociis natoque penatibus et magnis dis.",
        image:icon2
    },
    {
        header:"Header3",
        text:"Cum sociis natoque penatibus et magnis dis.",
        image:icon3
    },
    {
        header:"Header4",
        text:"Cum sociis natoque penatibus et magnis dis.",
        image:icon4
    },
]
const IconsLine = () => {
    return(
        <section className="iconsLine" >
            {iconItems.map((icon,index) =>
                <Icon image={icon.image}
                      header={icon.header}
                      text={icon.text}
                      key = {index}/>
            )}
        </section>
    )

}
export default IconsLine;
