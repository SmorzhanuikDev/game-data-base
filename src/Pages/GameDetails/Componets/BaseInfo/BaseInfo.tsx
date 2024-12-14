import React from 'react';
import s from "./baseInfo.module.scss";
import {formatDate} from "../../../../Common/commonFunctions";
import {gameDetailsType} from "../../gameDetailsTypes";
import {usersRatings} from "../../../Games/gamesTypes";

interface props {
    currentGame: gameDetailsType
}

export const BaseInfo:React.FC<props> = ({currentGame}) => {

    const ratingsColors = ['#6cb76c', '#465d94', '#f8ec5d', '#e84545']

    const sortRating = (ratings: usersRatings[]) => {
        const ddf = [...ratings]
        return ddf.sort((a, b) => {
            if (a.percent > b.percent) {
                return -1
            } else if (a.percent < b.percent) {
                return 1
            }
            return 0
        })
    }

    return (
        <div>
            <div className={s.baseInfo}>
                <p className={s.gameReleasedHead}>
                    {formatDate(currentGame.released)}
                </p>
                <p className={s.averagePlaytime}>
                    average playtime: {currentGame.additions_count} hours
                </p>
            </div>
            <p className={s.gameName}>
                {currentGame.name}
            </p>
            <div className={s.ratingsPercentsBlock}>
                {currentGame.ratings
                    ? sortRating(currentGame.ratings).map((rating, index) =>
                        <div key={rating.id} className={s.ratingPercentsItem}
                             style={{
                                 width: `${rating.percent}%`,
                                 background: ratingsColors[index]
                             }}>
                        </div>
                    )
                    : null}
            </div>
            <div className={s.ratingDetails}>
                {currentGame?.ratings?.map((rating, index) =>
                    <div key={rating.id}
                         style={{borderLeft: `solid 7px ${ratingsColors[index]}`, paddingLeft: 5}}>
                        <div>
                            <span>{rating.title}: </span>
                            <span>{rating.percent}%</span>
                        </div>
                        <span>Votes: {rating.count}</span>
                    </div>)}
            </div>
        </div>
    );
};

