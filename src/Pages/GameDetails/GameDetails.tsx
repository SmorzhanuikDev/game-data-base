import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchGameDetailsAction} from "./gameDetailsSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './GameDetails.module.scss'

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
        <div>
            <div className={s.baseInfo}>
                <p>{currentGame.released}</p>
                <p>average playtime:{currentGame.additions_count}</p>
            </div>
            <p className={s.gameName}>{currentGame.name}</p>
            <div className={s.ratingsBlock}>
                {currentGame.ratings
                    ? <div className={s.usersRating}>{currentGame?.ratings[0].title}</div>
                    : null
                }
            </div>
            <div>
            {currentGame?.platforms?.map(platform =>
                    <a href={`platform/${platform.platform.id}`} key={platform.platform.id}>
                        {platform.platform.name}
                    </a>
                )}
            </div>
        </div>
    );
};

export default GameDetails;