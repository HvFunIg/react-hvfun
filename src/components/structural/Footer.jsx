import React from 'react';

import '../../css/footer.css';
const Footer = () => {
    return(
        <footer>
            <div className="container-wide">
                <address className="left">
                    <h2>Тел/факс</h2>
                    <h1>Офис</h1>
                    <p>88888</p>
                </address>
                <address className="right">
                    <h2>Тел/факс</h2>
                    <h1>Офис</h1>
                    <p>88888</p>
                </address>

            </div>

        <div className="copyright">
            <hr/>
            Дизайн и создание сайта :
            <b> Zykov Igor</b>
        </div>
        </footer>
    )

}
export default Footer;
