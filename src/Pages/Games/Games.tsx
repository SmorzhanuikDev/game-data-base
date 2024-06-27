import React, {useEffect, useState} from 'react';
import {GameItem} from "./Components/GameItem";
import {fetchGamesAction} from "./gamesSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './Games.module.scss'
import {GenresBlock} from "./Components/GenresBlock";
import {Filters} from "./Components/Filters";
import {gamesListType, ordering} from "./gamesTypes";
import {setGamesList} from "./gamesSlice";
import {RotatingSquare} from "react-loader-spinner";

export const Games = () => {

    const dispatch = useAppDispatch()
    const gamesList = useAppSelector(state => state.games.gamesList)
    const [isGameLoading, setIsGameLoading] = useState(false)

    useEffect(() => {
        setIsGameLoading(true)
        dispatch(fetchGamesAction({page: 1, page_size: 10, platforms: '4'}))
    }, [dispatch]);

    useEffect(() => {
        if (gamesList.results)
            setIsGameLoading(false)
    }, [dispatch, gamesList.results, isGameLoading]);

    const changeOrder = (order: ordering | undefined, isRevered: boolean) => {
        const ordering = isRevered ? '-' + order : order
        dispatch(setGamesList({} as gamesListType))
        setIsGameLoading(true)
        dispatch(fetchGamesAction({page: 1, page_size: 10, platforms: '1', ordering: ordering, metacritic: '1,100'}))
    }


    return (
        <div className={s.gamePageContainer}>
            <GenresBlock/>
            <div>
                <Filters changeOrder={changeOrder}/>
                {isGameLoading
                    ? <div hidden={!isGameLoading}>
                        <div className={s.loader}>
                            <RotatingSquare
                                visible={true}
                                height="200"
                                width="200"
                                color="#fff"
                                ariaLabel="rotating-square-loading"
                                wrapperStyle={{marginTop: '110px'}}
                            />
                        </div>
                    </div>
                    : gamesList.results && gamesList.results.map(game => <GameItem key={game.id} game={game}/>)
                }
            </div>
        </div>
    );
};

