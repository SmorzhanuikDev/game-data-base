import React from 'react';
import onImage from '../../../Images/no-image.png'
import s from '../Games.module.scss'
import {gameType} from "../gamesTypes";
import {platform} from "node:os";
import {useNavigate} from "react-router-dom";

interface props {
    game: gameType
}

export const GameItem:React.FC<props> = ({game}) => {

    const navigate = useNavigate()

    return (
        <div className={s.gameItem}>
            <img onClick={() => navigate('games')} src={game.background_image} alt='gameImage'/>
            <div className={s.descBlock}>
                <div>
                    <a href={'games'} className={s.gameName}>{game.name}</a>
                </div>
                <div className={s.gameGenre}>
                    {game.genres.map(genre => <a href={'games'} key={genre.id}>{genre.name}</a> )   }
                </div>
                <div className={s.gamePlatforms}>
                    {game.platforms.map(({platform}) => <a href={'games'} key={platform.id}>
                        {platform.name}
                    </a>)}
                </div>

                <p>{game.released}</p>
                <p>5/{game.rating}</p>
            </div>
        </div>
    );
};

