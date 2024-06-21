import React from 'react';
import s from '../Genres.module.scss'
import {genreType} from "../genresTypes";

interface props {
    genre: genreType
}

export const GenreCard:React.FC<props> = ({genre}) => {
    return (
        <div className={s.card}>
            <div className={s.cardInner}>
                <a href="/">
                    {genre.name}
                </a>
            </div>
        </div>
    );
};

