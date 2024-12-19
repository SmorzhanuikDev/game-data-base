import React, {useEffect, useState} from 'react';
import {fetchGamesAction, fetchGenresDetailsAction} from "./gamesSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './Games.module.scss'
import {GenresBlock} from "./Components/GenresBlock/GenresBlock";
import {Filters} from "./Components/Filters/Filters";
import {gamesListType, genresDetailType} from "./gamesTypes";
import {setGamesList, setGenreDetails} from "./gamesSlice";
import {Pagination} from "./Components/Pagination/Pagination";
import {useSearchParams} from "react-router-dom";
import {GenreDetails} from "./Components/GenreDetails/GenreDetails";
import {Tags} from "./Components/Tags/Tags";
import {DevBlock} from "./Components/DevBlock/DevBlock";
import {GameList} from "./Components/GameList/GameList";


export const Games = () => {

    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch()
    const gamesList = useAppSelector(state => state.games.gamesList)
    const [isLoading, setIsLoading] = useState(false)
    const search = searchParams.get('search')
    const platforms = searchParams.get('platform')
    const tags = searchParams.get('tags')
    const [isReversed, setIsReversed] = useState(false)
    const genreId = searchParams.get('genre')
    const devId = searchParams.get('dev') || undefined
    const dates = searchParams.get('date') || undefined
    const ordering = searchParams.get('ordering')
    const page = Number(searchParams.get('page')) || 1

    useEffect(() => {
        setIsLoading(true)
        dispatch(setGamesList({} as gamesListType))
        const pathOrdering = isReversed ? '-' + ordering : ordering
        const parsedTags = tags?.split(' ').join()
        dispatch(fetchGamesAction({
            page,
            page_size: 20,
            ordering: pathOrdering || undefined,
            platforms,
            dates,
            search,
            genres: genreId,
            tags: parsedTags,
            developers: devId
        }))
    }, [dates, dispatch, isReversed, page, platforms, search, genreId, tags, devId, ordering]);

    useEffect(() => {
        if (gamesList.results)
            setIsLoading(false)
    }, [dispatch, gamesList.results, isLoading]);

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
                <Filters order={ordering} platforms={platforms || undefined} dates={dates}
                         isReversed={isReversed}
                         setIsReversed={setIsReversed} search={search}/>
                <Tags/>
                <DevBlock devId={devId}/>
                <GameList isLoading={isLoading} gamesList={gamesList} setIsLoading={setIsLoading}/>
            </div>
            {gamesList.results?.length
                ? <Pagination page={page} lastPage={Math.ceil(gamesList.count / 20)}/>
                : null
            }
        </div>
    );
};

