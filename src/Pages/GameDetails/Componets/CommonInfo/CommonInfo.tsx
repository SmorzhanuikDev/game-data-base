import React from 'react';
import s from "./commonInfo.module.scss";
import {formatDate, formatESRBRating} from "../../../../Common/commonFunctions";
import {gameDetailsType} from "../../gameDetailsTypes";
import {AdditionalInfo} from "../AdditionalInfo/AdditionalInfo";
import {InfoItem} from "./InfoItem";
import {platform} from "../../../Games/gamesTypes";

interface props {
    currentGame: gameDetailsType
}

const formatPlatformsArray = (platformsArray: platform[]) => {
    return platformsArray?.map((platform) => platform.platform)
}

export const CommonInfo: React.FC<props> = ({currentGame}) => {
    return (
        <div>
            <div className={s.commonInfo}>
                <AdditionalInfo title={'genres'} additionsData={formatPlatformsArray(currentGame.platforms)}
                                route={'/games?platform='}/>
                <AdditionalInfo title={'genres'} additionsData={currentGame.genres} route={'/genre/'}/>
                <InfoItem title={'metascore'} content={
                    <span className={s.metacriticScore}>{currentGame.metacritic || 'No rate'}</span>
                }/>
                <InfoItem title={'release date'} content={
                    <p className={s.releaseDate}>{formatDate(currentGame.released)}</p>
                }/>
                <AdditionalInfo title={'developers'} additionsData={currentGame.developers} route={'/developer/'}/>
                <AdditionalInfo title={'publisher'} additionsData={currentGame.publishers} route={'/publisher/'}/>
                <InfoItem title={'age rating'} content={
                    <span className={s.esrbRating}>{formatESRBRating(currentGame.esrb_rating)}</span>
                }/>
                <InfoItem title={'website'} content={
                    <a href={currentGame.website}>{currentGame.website}</a>
                }/>
            </div>

        </div>
    )
        ;
};

