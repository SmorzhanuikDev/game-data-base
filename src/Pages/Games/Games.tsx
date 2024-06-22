import React, {useEffect} from 'react';
import {GameItem} from "./Components/GameItem";
import {fetchGamesAction} from "./gamesSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './Games.module.scss'
import {GenresBlock} from "./Components/GenresBlock";

export const Games = () => {

    const dispatch = useAppDispatch()
    const gamesList = useAppSelector(state => state.games.gamesList)

    useEffect(() => {
        dispatch(fetchGamesAction({page: 1, page_size: 5}))
    }, [dispatch]);

    return (
        <div className={s.gamePageContainer}>
            <div className={s.gameNavBar}>
                <GenresBlock/>
            </div>
            <div>
                {
                    gamesList.results && gamesList.results.map(game => <GameItem key={game.id} game={game}/>)
                }
            </div>
        </div>
    );
};

