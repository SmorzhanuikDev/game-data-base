import React from 'react';
import s from './gameList.module.scss'
import {gameType} from "../../gamesTypes";
import noImage from '../../../../Images/no-image.png'
import {useSearchParams} from "react-router-dom";

interface props {
    game: gameType
}

export const GameItem: React.FC<props> = ({game}) => {

    const [searchParams, setSearchParams] = useSearchParams()

    const handleClick = (platform: string) => {
        if (searchParams.has('platform')) {
            searchParams.set('platform', platform)
            setSearchParams(searchParams)
        }
        searchParams.append('platform', platform)
        setSearchParams(searchParams)
    }

    return (
        <div className={s.gameItem}>
            <a href={`/game/${game.id}`}>
                <img src={game.background_image || noImage} alt='gameImage'/>
            </a>
            <div className={s.descBlock}>
                <div>
                    <a href={`/game/${game.id}`} className={s.gameName}>{game.name}</a>
                </div>
                <div className={s.gameGenre}>
                    {game.genres?.map(genre => <a href={`/genre/${genre.id}`} key={genre.id}>{genre.name}</a>)}
                </div>
                <div className={s.gamePlatforms}>
                    {game.platforms?.map(({platform}) =>
                        <span onClick={() => handleClick(String(platform.id))} key={platform.id}>
                            {platform.name}
                        </span>)}
                </div>
                <p className={s.gameRelease}>Released: {game.released}</p>
                {game.rating
                    ? <p className={s.gameRating}>{game.rating}/5</p>
                    : <p className={s.gameRating}>No rate</p>
                }
            </div>
        </div>
    );
};

