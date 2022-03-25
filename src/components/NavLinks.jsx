import React, {Fragment} from 'react';
import {HashLink} from "react-router-hash-link";

import PropTypes from "prop-types";
import '../css/header.css';

const NavLinks = ({links,linksTo}) => {
    return(
        <Fragment>
            <nav className="container ">
                {links.map((link,index) =>
                    <HashLink to={linksTo[index]} className="navLink" key={index}> {link}</HashLink>)}
            </nav>

        </Fragment>
    )
}
NavLinks.propTypes = {
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
    linksTo: PropTypes.arrayOf(PropTypes.string),
};
NavLinks.defaultProps = {
    links: ["Link"],
    linksTo: ["#"],
};
export default NavLinks;
