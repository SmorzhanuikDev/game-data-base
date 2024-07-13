import React, {useEffect, useState} from 'react';
import {GameItem} from "./Components/GameItem";
import {fetchGamesAction, fetchGenresDetailsAction} from "./gamesSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './Games.module.scss'
import {GenresBlock} from "./Components/GenresBlock";
import {Filters} from "./Components/Filters";
import {gamesListType, genresDetailType} from "./gamesTypes";
import {setGamesList, setGenreDetails} from "./gamesSlice";
import {Pagination} from "./Components/Pagination";
import {Loader} from "../../Common/Components/Loader";
import {useLocation, useParams} from "react-router-dom";
import {GenreDetails} from "./Components/GenreDetails";

export function useSearch() {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
export const Games = () => {

    const dispatch = useAppDispatch()
    const gamesList = useAppSelector(state => state.games.gamesList)
    const [isGameLoading, setIsGameLoading] = useState(false)
    const [page, setPage] = useState<number>(1)
    const search = useSearch().get('search')
    const platform = useSearch().get('platform')
    const [isReversed, setIsReversed] = useState(false)
    const [order, setOrder] = useState<string | undefined>()
    const [platforms, setPlatforms] = useState<string | undefined>()
    const [dates, setDates] = useState<string | undefined>()
    const {genreId} = useParams()
    const [genre, setGenre] = useState<string | undefined>(undefined)

    console.log(platforms)

    useEffect(() => {
        setIsGameLoading(true)
        dispatch(setGamesList({} as gamesListType))
        const ordering = isReversed ? '-' + order : order
        dispatch(fetchGamesAction({page, page_size: 10, ordering, platforms, dates, search, genres: genre}))
    }, [dates, dispatch, isReversed, order, page, platforms, search, genre]);

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
            setGenre(undefined)
        }
    }, [dispatch, search]);

    useEffect(() => {
        setPlatforms(platform || undefined)
    }, [platform]);

    useEffect(() => {
        if (genreId) {
            dispatch(fetchGenresDetailsAction(genreId))
            setGenre(genreId)
            setPage(1)
        }
        return () => {
            dispatch(setGenreDetails({} as genresDetailType))
        }
    }, [dispatch, genreId]);


    return (
        <div className={s.gamePageContainer}>
            <div className={s.sideBar}>
                <GenresBlock activeGenre={genre} setGenre={setGenre}/>
            </div>
            <div>
                <div hidden={!genre}>
                    <GenreDetails/>
                </div>
                <Filters setOrder={setOrder} order={order} platforms={platforms} dates={dates} isReversed={isReversed}
                         setIsReversed={setIsReversed} setPlatforms={setPlatforms} setDates={setDates} search={search}/>
                {isGameLoading
                    ? <Loader/>
                    : gamesList.results && gamesList.results.map(game => <GameItem key={game.id} game={game}/>)
                }
            </div>
            <Pagination page={page} setPage={setPage} lastPage={Math.ceil(gamesList.count / 10)}/>
        </div>
    );
};

