import React, {FC} from 'react';
import s from "./requirements.module.scss";
import {AccordionItemPanel} from "react-accessible-accordion";
import {platform} from "../../../Games/gamesTypes";

interface props {
    platformItem: platform
}

export const RequirementBody:FC<props> = ({platformItem}) => {

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

