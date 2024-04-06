import React from 'react';
import ImageGallery from "react-image-gallery";
import {platform} from "../../Games/gamesTypes";
import {screenshotType} from "../gameDetailsTypes";
import s from "../GameDetails.module.scss";

interface props {
    screenshots: screenshotType[]
    platforms: platform[]
}

export const SideBarSliderAndRequirements: React.FC<props> = ({screenshots, platforms}) => {

    const formatScreenshot = (screenshot: screenshotType) => {
        return {
            original: screenshot.image,
            thumbnail: screenshot.image,
        }
    }

    const pullOutGameRequirements = (platforms: platform[] | undefined) => {
        if (platforms) {
            return platforms.filter(platform => platform.requirements?.minimum || platform.requirements?.recommended)
        }
    }

    const formatRequirements = (requirements: string) => {
        if (requirements) {
            return requirements.split('\n')
        }
        return undefined
    }

    return (
        <div className={s.rightSideBar}>
            <div>
                {screenshots
                    ? < ImageGallery showPlayButton={false}
                                     items={screenshots?.map(screenshot => formatScreenshot(screenshot))}/>
                    : null
                }
            </div>
            <div>
                <h4>System requirements</h4>
                {pullOutGameRequirements(platforms)?.map(platformItem =>
                    <div>
                        <h4>{platformItem.platform.name}</h4>
                        <div className={s.platformRequirements}>
                            {platformItem.platform.name === 'PC'
                                ? formatRequirements(platformItem.requirements.minimum)?.map(item =>
                                    <div className={s.requirements}>
                                        <span style={{fontWeight: "bold"}}>{item.split(':')[0]}:</span>
                                        <span>{item.split(':')[1]}</span>
                                    </div>
                                )
                                : < span>{platformItem.requirements.minimum}</span>}
                        </div>
                        <div className={s.platformRequirements}>
                            {platformItem.platform.name
                                ? formatRequirements(platformItem.requirements.recommended)?.map(item =>
                                    <div className={s.requirements}>
                                        <span style={{fontWeight: "bold"}}>{item.split(':')[0]}:</span>
                                        <span>{item.split(':')[1]}</span>
                                    </div>
                                )
                                : <span>{platformItem.requirements.minimum}</span>
                            }
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

