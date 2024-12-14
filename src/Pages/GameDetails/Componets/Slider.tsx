import React, {FC} from 'react';
import ImageGallery from "react-image-gallery";
import {screenshotType} from "../gameDetailsTypes";

interface props {
    screenshots: screenshotType[]
}

const formatScreenshot = (screenshot: screenshotType) => {
    return {
        original: screenshot.image,
        thumbnail: screenshot.image,
    }
}

export const Slider: FC<props> = ({screenshots}) => {

    return (
        <div>
            {screenshots
                ? < ImageGallery showPlayButton={false}
                                 items={screenshots?.map(screenshot => formatScreenshot(screenshot))}/>
                : null
            }
        </div>
    );
};

