import React from 'react';
import s from './commonCard.module.scss'
import {gameSmallData} from "../../../Pages/Genres/genresTypes";
import {FaRegUser} from "react-icons/fa";


interface props {
    title: string
    gameCount: number
    games: gameSmallData[]
    bgImage: string | null
}


export const CommonCard: React.FC<props> = ({title, gameCount, games, bgImage}) => {

    const style = {
        background: `linear-gradient(180deg, rgba(39, 37, 37, 0.7411415249693627) 0%,
            rgba(20, 18, 18, 0.9288165949973739) 37%, rgba(20, 18, 18, 1) 62%),
            url(${bgImage}) no-repeat 50% 50%`,
        backgroundSize: 'cover'

    }

    return (
        <div className={s.card} style={style}>
            <div className={s.cardInner}>
                <a href="/public">
                    {title}
                </a>
                <div className={s.popularGameContainer}>
                    <div className={s.popularGameTitle}>
                        <span>Popular item</span>
                        <div className={s.gameCount}>
                            <span>{gameCount}</span>
                            <FaRegUser/>
                        </div>
                    </div>
                    {
                        games.slice(-6, -3).map(game => <div className={s.gameItem} key={game.id}>
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

