import React, {useEffect} from 'react';
import {CommonCard} from "../../Common/Components/CommonCard/CommonCard";
import s from "./Genres.module.scss";
import mainS from  '../../main.module.scss'
import {fetchGenresAction} from "./genresSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setIsAppLoading} from "../../appSlice";

export const Genres = () => {

    const dispatch = useAppDispatch()
    const genres = useAppSelector(state => state.genresData.genres)

    useEffect(() => {
        dispatch(fetchGenresAction())
    }, [dispatch]);

    useEffect(() => {
        if (genres.results?.length) {
            dispatch(setIsAppLoading(false))
        }
    }, [genres, dispatch]);

    return (
        <div>
            <h3 className={mainS.pageTitle}>Genres</h3>
            <div className={s.container}>

                {
                    genres.results?.map(genre => <CommonCard
                        key={genre.id} games={genre.games}
                        gameCount={genre.games_count} title={genre.name} bgImage={genre.image_background}
                    />)
                }
            </div>
        </div>

    );
};

