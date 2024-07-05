import React, {useEffect} from 'react';
import s from '../Games.module.scss'
import {useNavigate} from "react-router-dom";
import {setIsAppLoading} from "../../../appSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {fetchContentAction} from "../../CommonPage/commonPageSaga";


export const GenresBlock: React.FC = React.memo(() => {

    const dispatch = useAppDispatch()
    const genres = useAppSelector(state => state.commonPageData.content)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setIsAppLoading(true))
        dispatch(fetchContentAction(1, '/genres'))
    }, [dispatch]);

    useEffect(() => {
        if (genres.results)
            dispatch(setIsAppLoading(false))
    }, [dispatch, genres.results]);

    return (
        <div className={s.genresBlock}>
            <h5 className={s.blockName}>Genres</h5>
            {
                genres.results?.map(genre => <div key={genre.id} onClick={() => navigate(`/genre/${genre.id}`)}
                                                  className={s.genresItem}>
                    <img src={genre.image_background || ''} alt="genreImg"/>
                    <span>{genre.name}</span>
                </div>)
            }
        </div>
    );
})

