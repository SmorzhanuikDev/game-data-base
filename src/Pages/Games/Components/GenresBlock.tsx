import React, {useEffect} from 'react';
import s from '../Games.module.scss'
import {useNavigate} from "react-router-dom";
import {setIsAppLoading} from "../../../appSlice";
import {fetchGenresAction} from "../../Genres/genresSaga";
import {useAppDispatch, useAppSelector} from "../../../hooks";


export const GenresBlock: React.FC = React.memo( () => {

    const dispatch = useAppDispatch()
    const genres = useAppSelector(state => state.genresData.genres)


    useEffect(() => {
        dispatch(setIsAppLoading(true))
        dispatch(fetchGenresAction())
    }, [dispatch]);

    useEffect(() => {
        if (genres.results)
            dispatch(setIsAppLoading(false))
    }, [dispatch, genres.results]);



    const navigate = useNavigate()

    return (
        <div className={s.gameNavBar}>
            <div className={s.genresBlock}>
                <h5 className={s.blockName}>Genres</h5>
                {
                    genres.results?.map(genre => <div key={genre.id} onClick={() => navigate(`/genre/${genre.id}`)}
                                                      className={s.genresItem}>
                        <img src={genre.image_background} alt="genreImg"/>
                        <span>{genre.name}</span>
                    </div>)
                }
            </div>
        </div>
    );
})

