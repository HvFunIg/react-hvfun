import React from 'react';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import useWindowDimensions from "../js/useWindowDimensions";

import {stack} from "../js/data"

import FrameLeft from "../img/Fragments/Frame line left.svg"
import FrameRight from "../img/Fragments/Frame line right.svg"
import Panel from "./Panel";
import Stack from "./Stack";
import Job from "./Job";
import Tech from "./Tech";
import Technologies from "./Technologies";
import Jobs from "./Jobs";

const CV = ({header}) => {
    const { t, i18n } = useTranslation('CV'); //t - основная функция для перевода
    const {  width } = useWindowDimensions();

    return(
        <section className="skills">
            {width > 480 ?
                <>
                    <div className="skills-frame skills-frame--left"><img src={FrameLeft} alt=""/></div>
                    <div className="skills-frame skills-frame--right"><img src={FrameRight} alt=""/></div>
                </>
                :''
            }

            <h1 > {header} </h1>
            <div className="panels">

                <Panel header={t("education")}>
                    {t("JobsArray", {returnObjects:true}).map((job, id) =>{
                        return <Jobs header={t(job.type)} stack={job.stack}/>
                    })}
                </Panel>
                <Panel header={t("stack")}>
                    {stack.map((tech, id) =>{
                        return <Technologies header={t(tech.header)} stack={tech.stack}/>
                    })}
                </Panel>
                <Stack>

                </Stack>
            </div>
        </section>
    )
}
CV.propTypes = {
    header: PropTypes.string,
};

export default CV;
