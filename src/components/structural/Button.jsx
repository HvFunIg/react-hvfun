import React from 'react';


const Button = ({className,text,handler}) => {
    return(
        <button className={className} onClick={handler}>{text} </button>
    )

}
export default Button;
