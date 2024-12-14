import React, {FC} from 'react';
import s from "./requirements.module.scss";
import {AccordionItemPanel} from "react-accessible-accordion";
import {platform} from "../../../Games/gamesTypes";

interface props {
    platformItem: platform
}

const formatRequirements = (requirements: string) => {
    if (requirements) {
        console.log(requirements)
        return requirements.split('\n')
    }
    return undefined
}

export const RequirementBody:FC<props> = ({platformItem}) => {

    console.log(platformItem.requirements)


    return (
        <AccordionItemPanel>
            <div className={s.platformRequirements}>
                {
                    platformItem.requirements.recommended
                    ? <div>{platformItem.requirements.recommended} <hr/></div>
                    : null
                }
                {platformItem.requirements.minimum}
            </div>
        </AccordionItemPanel>
    );
};

