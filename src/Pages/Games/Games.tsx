import React, {useEffect, useState} from 'react';
import {GameItem} from "./Components/GameItem";
import {fetchGamesAction} from "./gamesSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './Games.module.scss'
import {GenresBlock} from "./Components/GenresBlock";
import {Filters} from "./Components/Filters";
import {gamesListType, ordering} from "./gamesTypes";
import {setGamesList} from "./gamesSlice";
import {Pagination} from "./Components/Pagination";
import {Loader} from "../../Common/Components/Loader";

export interface changeGamesListProp {
    order: ordering | undefined,
    isReversed: boolean,
    platforms: string | undefined,
    dates: string | undefined
}

interface gamesParams {
    isReversed: boolean,
    order: string | undefined,
    platforms: string | undefined,
    dates: string | undefined,
}

export const Games = () => {

    const dispatch = useAppDispatch()
    const gamesList = useAppSelector(state => state.games.gamesList)
    const [isGameLoading, setIsGameLoading] = useState(false)
    const [gamesParams, setGamesParams] = useState<gamesParams>({
        isReversed: false,
        order: undefined,
        platforms: undefined,
        dates: undefined,
    })
    const {order, isReversed, platforms, dates} = gamesParams
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        setIsGameLoading(true)
        dispatch(setGamesList({} as gamesListType))
        const ordering = isReversed ? '-' + order : order
        dispatch(fetchGamesAction({page, page_size: 10, ordering, platforms, dates}))
    }, [dispatch, page]);

    useEffect(() => {
        if (gamesList.results)
            setIsGameLoading(false)
    }, [dispatch, gamesList.results, isGameLoading]);

    const changeGamesList = ({dates, platforms, order, isReversed}: changeGamesListProp) => {
        setGamesParams({
            order,
            isReversed,
            dates,
            platforms,
        })
        const ordering = isReversed ? '-' + order : order
        dispatch(setGamesList({} as gamesListType))
        setIsGameLoading(true)
        dispatch(fetchGamesAction({page: 1, page_size: 10, ordering, platforms, dates}))
    }


    return (
        <div className={s.gamePageContainer}>
            <div className={s.sideBar}>
                <GenresBlock/>
            </div>
            <div>
                <Filters changeGamesList={changeGamesList}/>
                {isGameLoading
                    ? <Loader/>
                    : gamesList.results && gamesList.results.map(game => <GameItem key={game.id} game={game}/>)
                }
            </div>
            <Pagination page={page} setPage={setPage} lastPage={Math.ceil(gamesList.count / 10)}/>
        </div>
    );
};

