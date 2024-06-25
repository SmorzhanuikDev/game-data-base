import React from 'react';
import s from '../Games.module.scss'
import {gameType} from "../gamesTypes";
import noImage from '../../../Images/no-image.png'

interface props {
    game: gameType
}

export const GameItem: React.FC<props> = ({game}) => {

    return (
        <div className={s.gameItem}>
            <a href={`game/${game.id}`}>
                <img src={game.background_image || noImage} alt='gameImage'/>
            </a>
            <div className={s.descBlock}>
                <div>
                    <a href={`game/${game.id}`} className={s.gameName}>{game.name}</a>
                </div>
                <div className={s.gameGenre}>
                    {game.genres?.map(genre => <a href={'games'} key={genre.id}>{genre.name}</a>)}
                </div>
                <div className={s.gamePlatforms}>
                    {game.platforms?.map(({platform}) => <a href={'games'} key={platform.id}>
                        {platform.name}
                    </a>)}
                </div>
                <p className={s.gameRelease}>Released: {game.released}</p>
                <p className={s.gameRating}>5/{game.rating}</p>
            </div>
        </div>
    );
};

