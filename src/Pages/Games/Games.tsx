import React, {useEffect, useState} from 'react';
import {GameItem} from "./Components/GameItem/GameItem";
import {fetchGamesAction, fetchGenresDetailsAction} from "./gamesSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './Games.module.scss'
import {GenresBlock} from "./Components/GenresBlock/GenresBlock";
import {Filters} from "./Components/Filters/Filters";
import {gamesListType, genresDetailType} from "./gamesTypes";
import {setGamesList, setGenreDetails} from "./gamesSlice";
import {Pagination} from "./Components/Pagination/Pagination";
import {Loader} from "../../Common/Components/Loader";
import {useSearchParams} from "react-router-dom";
import {GenreDetails} from "./Components/GenreDetails/GenreDetails";
import {Tags} from "./Components/Tags/Tags";
import {DevBlock} from "./Components/DevBlock/DevBlock";


export const Games = () => {

    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch()
    const gamesList = useAppSelector(state => state.games.gamesList)
    const [isGameLoading, setIsGameLoading] = useState(false)
    const [page, setPage] = useState<number>(1)
    const search = searchParams.get('search')
    const platforms = searchParams.get('platform')
    const tags = searchParams.get('tags')
    const [isReversed, setIsReversed] = useState(false)
    const [order, setOrder] = useState<string | undefined>()
    const [dates, setDates] = useState<string | undefined>()
    const genreId = searchParams.get('genre')
    const devId = searchParams.get('dev') || undefined

    useEffect(() => {
        setIsGameLoading(true)
        dispatch(setGamesList({} as gamesListType))
        const ordering = isReversed ? '-' + order : order
        const parsedTags = tags?.split(' ').join()
        dispatch(fetchGamesAction({
            page,
            page_size: 20,
            ordering,
            platforms,
            dates,
            search,
            genres: genreId,
            tags: parsedTags,
            developers: devId
        }))
    }, [dates, dispatch, isReversed, order, page, platforms, search, genreId, tags, devId]);

    useEffect(() => {
        if (gamesList.results)
            setIsGameLoading(false)
    }, [dispatch, gamesList.results, isGameLoading]);

    useEffect(() => {
        if (genreId) {
            dispatch(fetchGenresDetailsAction(genreId))
        }
        return () => {
            dispatch(setGenreDetails({} as genresDetailType))
        }
    }, [dispatch, genreId]);
    return (
        <div className={s.gamePageContainer}>
            <GenresBlock activeGenre={genreId}/>
            <div>
                <div hidden={!genreId}>
                    <GenreDetails/>
                </div>
                <Filters setOrder={setOrder} order={order} platforms={platforms || undefined} dates={dates}
                         isReversed={isReversed}
                         setIsReversed={setIsReversed} setDates={setDates} search={search}/>
                <Tags/>
                <DevBlock devId={devId}/>
                {isGameLoading
                    ? <Loader/>
                    : gamesList.results && gamesList.results.map(game => <GameItem key={game.id} game={game}/>)
                }
            </div>
            <Pagination page={page} setPage={setPage} lastPage={Math.ceil(gamesList.count / 10)}/>
        </div>
    );
};

