import React, {useEffect} from 'react';
import {GenreCard} from "./Components/GenreCard";
import s from "./Genres.module.scss";
import {fetchGenresAction} from "./genresSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";

export const Genres = () => {

    const dispatch = useAppDispatch()
    const genres = useAppSelector(state => state.genresData.genres)

    useEffect(() => {
        dispatch(fetchGenresAction())
    }, [dispatch]);

    return (
        <div className={s.container}>
            {
                genres.results?.map(genre => <GenreCard key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

