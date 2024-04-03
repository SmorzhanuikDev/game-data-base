import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchGameDetailsAction} from "./gameDetailsSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './GameDetails.module.scss'
import {format} from "date-fns";

const GameDetails = () => {

    const {gameId} = useParams()
    const dispatch = useAppDispatch()
    const currentGame = useAppSelector(state => state.gameDetails.currentGame)

    useEffect(() => {
        if (gameId) {
            dispatch(fetchGameDetailsAction(Number(gameId)))
        }
    }, [dispatch, gameId]);



    return (
        <div className={s.pageWrapper}>
            <div>
                <div className={s.baseInfo}>
                    <p className={s.gameReleasedHead}>
                        {currentGame.released && format(new Date(currentGame.released), "MMM dd, yyyy")}
                    </p>
                    <p className={s.averagePlaytime}>
                        average playtime: {currentGame.additions_count} hours
                    </p>
                </div>
                <p className={s.gameName}>{currentGame.name}</p>
                <div className={s.ratingsBlock}>
                    {currentGame.ratings
                        ? <div className={s.usersRating}>{currentGame?.ratings[0].title}</div>
                        : null
                    }
                </div>
                <div>{currentGame.description_raw}</div>
                <hr/>
                <div className={s.commonInfo}>
                    <div> {currentGame?.platforms?.map(platform =>
                        <a href={`platform/${platform.platform.id}`} key={platform.platform.id}>
                            {platform.platform.name}
                        </a>
                    )}</div>
                    <div>{currentGame.genres?.map(genre =>
                        <a href={`genre/${genre.id}`} key={genre.id}>
                            {genre.name}
                        </a>
                    )}</div>
                    <div>{currentGame.metacritic}</div>
                    <div>released: {currentGame.released}</div>
                    <div>developer: {currentGame.developers?.map(developers =>
                        <a href={`developer/${developers.id}`} key={developers.id}>
                            {developers.name}
                        </a>
                    )}</div>
                    <div>publisher: {currentGame.publishers?.map(publisher =>
                        <a href={`publisher/${publisher.id}`} key={publisher.id}>
                            {publisher.name}
                        </a>
                    )}</div>
                    <p>age rating: {currentGame.esrb_rating?.name}</p>
                </div>
            </div>
            <div>right side</div>
        </div>
    );
};

export default GameDetails;