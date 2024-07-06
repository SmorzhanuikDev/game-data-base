import React, {useEffect, useState} from 'react';
import {GameItem} from "./Components/GameItem";
import {fetchGamesAction} from "./gamesSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './Games.module.scss'
import {GenresBlock} from "./Components/GenresBlock";
import {Filters} from "./Components/Filters";
import {gamesListType} from "./gamesTypes";
import {setGamesList} from "./gamesSlice";
import {Pagination} from "./Components/Pagination";
import {Loader} from "../../Common/Components/Loader";
import {useLocation} from "react-router-dom";

function useSearch() {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Games = () => {

    const dispatch = useAppDispatch()
    const gamesList = useAppSelector(state => state.games.gamesList)
    const [isGameLoading, setIsGameLoading] = useState(false)
    const [page, setPage] = useState<number>(1)
    const search = useSearch().get('search')
    const [isReversed, setIsReversed] = useState(false)
    const [order, setOrder] = useState<string | undefined>()
    const [platforms, setPlatforms] = useState<string | undefined>()
    const [dates, setDates] = useState<string | undefined>()

    useEffect(() => {
        setIsGameLoading(true)
        dispatch(setGamesList({} as gamesListType))
        const ordering = isReversed ? '-' + order : order
        dispatch(fetchGamesAction({page, page_size: 10, ordering, platforms, dates}))
    }, [dates, dispatch, isReversed, order, page, platforms]);

    useEffect(() => {
        if (gamesList.results)
            setIsGameLoading(false)
    }, [dispatch, gamesList.results, isGameLoading]);

    useEffect(() => {
        if (search) {
            dispatch(fetchGamesAction({page: 1, page_size: 10, search}))
            setIsReversed(false)
            setOrder(undefined)
            setPlatforms(undefined)
            setDates(undefined)
        }
    }, [dispatch, search]);

    return (
        <div className={s.gamePageContainer}>
            <div className={s.sideBar}>
                <GenresBlock/>
            </div>
            <div>
                <Filters setOrder={setOrder} order={order} isReversed={isReversed} setIsReversed={setIsReversed}
                         setPlatforms={setPlatforms} setDates={setDates}/>
                {isGameLoading
                    ? <Loader/>
                    : gamesList.results && gamesList.results.map(game => <GameItem key={game.id} game={game}/>)
                }
            </div>
            <Pagination page={page} setPage={setPage} lastPage={Math.ceil(gamesList.count / 10)}/>
        </div>
    );
};

