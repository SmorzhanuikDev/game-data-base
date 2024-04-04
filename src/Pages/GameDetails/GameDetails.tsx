import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchGameDetailsAction} from "./gameDetailsSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './GameDetails.module.scss'
import {format} from "date-fns";
import {usersRatings} from "./gameDetailsTypes";
import {formatDate, formatESRBRating} from "../../Common/commonFunctions";

const GameDetails = () => {

    const {gameId} = useParams()
    const dispatch = useAppDispatch()
    const currentGame = useAppSelector(state => state.gameDetails.currentGame)
    const ratingsColors = ['#6cb76c', '#465d94', '#f8ec5d', '#e84545']

    useEffect(() => {
        if (gameId) {
            dispatch(fetchGameDetailsAction(Number(gameId)))
        }
    }, [dispatch, gameId]);

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
        <div className={s.pageWrapper}>
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
                <hr/>
                <div className={s.description}>
                    <h4>About</h4>
                    <p>
                        {currentGame.description_raw}
                    </p>
                </div>
                <hr/>

                <div className={s.commonInfo}>
                    <div>
                        <h5>Platforms</h5>
                        <div> {currentGame?.platforms?.map(platform =>
                            <a href={`/platform/${platform.platform.id}`} key={platform.platform.id}>
                                {platform.platform.name}
                            </a>
                        )}</div>
                    </div>

                    <div>
                        <h5>
                            genres
                        </h5>
                        <div>{currentGame.genres?.map(genre =>
                            <a href={`/genre/${genre.id}`} key={genre.id}>
                                {genre.name}
                            </a>
                        )}</div>
                    </div>

                    <div>
                        <h5>metascore</h5>
                        <span className={s.metacriticScore}>
                            {currentGame.metacritic}
                        </span>
                    </div>
                    <div>
                        <h5>release date</h5>
                        <p className={s.releaseDate}>
                           {formatDate(currentGame.released)}
                        </p>
                    </div>

                    <div>
                        <h5>developers</h5>
                        <div>
                            {currentGame.developers?.map(developers =>
                                <a href={`/developer/${developers.id}`} key={developers.id}>
                                    {developers.name}
                                </a>
                            )}
                        </div>
                    </div>
                    <div>
                        <h5>publisher</h5>
                        <div>
                            {currentGame.publishers?.map(publisher =>
                                <a href={`/publisher/${publisher.id}`} key={publisher.id}>
                                    {publisher.name}
                                </a>
                            )}
                        </div>
                    </div>
                    <div>
                        <h5>age rating</h5>
                        <span className={s.esrbRating}>{formatESRBRating(currentGame.esrb_rating)}</span>
                    </div>
                </div>
            </div>
            <div>right side</div>
        </div>
    );
};

export default GameDetails;