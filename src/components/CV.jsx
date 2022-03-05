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
    const { t, i18n } = useTranslation('CV'); //t - основная функция для перевода

    return(
        <section>
            <h1> {t("test_message")} </h1>
            <div>
                <Jobs>
                    {t("JobsArray", {returnObjects:true}).map((job, id) =>{
                        return <Job period={job.period} header={job.type} place={job.place}/>
                    })}

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
