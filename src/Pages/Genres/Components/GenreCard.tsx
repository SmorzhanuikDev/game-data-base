import React from 'react';
import s from '../Genres.module.scss'
import {genreType} from "../genresTypes";
import {FaRegUser} from "react-icons/fa";


interface props {
    genre: genreType
}


export const GenreCard: React.FC<props> = ({genre}) => {

    const style ={
        background: `linear-gradient(180deg, rgba(39, 37, 37, 0.7411415249693627) 0%,
            rgba(20, 18, 18, 0.9288165949973739) 37%, rgba(20, 18, 18, 1) 62%),
            url(${genre.image_background}) no-repeat 50% 50%`,
        backgroundSize: 'cover'

    }

    return (
        <div className={s.card} style={style}>
            <div className={s.cardInner}>
                <a href="/">
                    {genre.name}
                </a>
                <div className={s.popularGameContainer}>
                    <div className={s.popularGameTitle}>
                        <span>Popular item</span>
                        <div className={s.gameCount}>
                            <span>{genre.games_count}</span>
                            <FaRegUser/>
                        </div>
                    </div>
                    {
                        genre.games.slice(-6, -3).map(game => <div className={s.gameItem} key={game.id}>
                            <div className={s.gameName}>
                                <a href={`game/${game.id}`}>
                                    {game.name}
                                </a>
                            </div>

                            <div className={s.gameAdded}>
                                    <span>
                                        {game.added}
                                    </span>
                                <FaRegUser/>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

