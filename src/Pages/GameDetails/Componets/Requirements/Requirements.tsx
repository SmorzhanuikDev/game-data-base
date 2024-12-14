import React from 'react';
import {platform} from "../../../Games/gamesTypes";
import s from "./requirements.module.scss";
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading,} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {RequirementBody} from "./RequirementBody";

interface props {
    platforms: platform[]
}

export const Requirements: React.FC<props> = ({platforms}) => {

    const pullOutGameRequirements = (platforms: platform[] | undefined) => {
        if (platforms) {
            return platforms.filter(platform => platform.requirements?.minimum || platform.requirements?.recommended)
        }
    }

    return (
        <div>
            {pullOutGameRequirements(platforms)?.length
                ? <Accordion allowMultipleExpanded allowZeroExpanded>
                    <h4>System requirements</h4>
                    {pullOutGameRequirements(platforms)?.map(platformItem =>
                        <AccordionItem key={platformItem.platform.id}>
                            <AccordionItemHeading>
                                <AccordionItemButton className={s.platformName}>
                                    <span>{platformItem.platform.name}</span>
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <RequirementBody platformItem={platformItem}/>
                        </AccordionItem>)}
                </Accordion>
                : null
            }
        </div>
    );
};

