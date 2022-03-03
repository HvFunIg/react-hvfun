import React, {Fragment} from 'react';
import PropTypes from "prop-types";

const Icon = ({image,header,text}) => {
    return(
        <Fragment >
            <div className="icon temp-block">
                <img src={image} alt=""/>
                <div className="icon-text">
                    <h1 > {header} </h1>
                    <hr/>
                    <p>{text}</p>
                </div>

            </div>
        </Fragment>
    )
}
Icon.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    text: PropTypes.string,
};
Icon.defaultProps = {
    header: "Header",
    text: "There is no text",
};
export default Icon;
