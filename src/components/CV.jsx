import React from 'react';
import PropTypes from "prop-types";
import '../css/header.css';
import InProgress from "./structural/InProgress";
import {useTranslation} from "react-i18next";
import Button from "./structural/Button";
import Jobs from "./Jobs";
import Stack from "./Stack";
import Job from "./Job";

const CV = () => {
    const { t, i18n } = useTranslation(); //t - основная функция для перевода

    return(
        <section>
            <h1> {t("test_message")} </h1>
            <div>
                <Jobs>
                    <Job date={"12.12.12"} header={"Temp"}/>
                </Jobs>
                <Stack>

                </Stack>
            </div>
        </section>
    )
}
CV.propTypes = {

};
CV.defaultProps = {

};
export default CV;
