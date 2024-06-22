import React, {useEffect} from 'react';
import {fetchGenresAction} from "../../Genres/genresSaga";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import s from '../Games.module.scss'
import {useNavigate} from "react-router-dom";

export const GenresBlock = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const genres = useAppSelector(state => state.genresData.genres)

    useEffect(() => {
        dispatch(fetchGenresAction())
    }, [dispatch]);

    return (
        <div className={s.genresBlock}>
            <h5 className={s.blockName}>Genres</h5>
            {
                genres.results?.map(genre => <div key={genre.id} onClick={() => navigate(`/genre/${genre.id}`)} className={s.genresItem}>
                    <img src={genre.image_background} alt="genreImg"/>
                    <span>{genre.name}</span>
                </div>)
            }
        </div>
    );
};

