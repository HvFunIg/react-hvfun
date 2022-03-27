import React from 'react';

import '../../css/footer.css';
import Social from "../Social";
const Footer = () => {
    return(
        <footer>
            <Social mod={"footer"}/>
            <div className="copyright">
                <hr/>
                &copy; 2022 - Developed by
                <b> Zykov Igor</b>
            </div>
        </footer>
    )

}
export default Footer;
