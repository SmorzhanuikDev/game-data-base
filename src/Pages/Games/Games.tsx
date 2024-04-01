import React, {useEffect} from 'react';
import {FETCH_GAME_LIST} from "./gamesTypes";
import {GameItem} from "./Components/GameItem";
import {fetchGamesAction} from "./gamesSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";

export const Games = () => {

    const dispatch = useAppDispatch()
    const gamesList = useAppSelector(state => state.games.gamesList)

    useEffect(() => {
        dispatch(fetchGamesAction({page: 3, page_size: 5}))
    }, [dispatch]);

    return (
        <div>
            <button onClick={()=> console.log(gamesList)}>test</button>
            {
                gamesList.results && gamesList.results.map(game => <GameItem key={game.id} game={game}/>)
            }
        </div>
    );
};

