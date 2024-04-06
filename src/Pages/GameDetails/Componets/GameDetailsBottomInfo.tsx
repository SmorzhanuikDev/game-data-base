import React from 'react';
import s from "../GameDetails.module.scss";
import {gameAdditionsType, gameDetailsType, gameSeriesType} from "../gameDetailsTypes";

interface props {
    currentGame: gameDetailsType
    currentGameAdditions: gameAdditionsType
    currentGameSeries: gameSeriesType
}

export const GameDetailsBottomInfo: React.FC<props> = ({currentGameSeries, currentGameAdditions, currentGame}) => {
    return (
        <div>
            <div className={s.fullWidthElenet}>
                <h5>DLC's and editions</h5>
                {currentGameAdditions.results?.map(additions =>
                    <a href={'/game/' + additions.id} key={additions.id}>
                        {additions.name}
                    </a>)}
            </div>
            <div className={s.fullWidthElenet}>
                <h5>Other game in the series</h5>
                {currentGameSeries.results?.map(game =>
                    <a href={'/game/' + game.id} key={game.id}>
                        {game.name}
                    </a>)}
            </div>
            <div className={s.fullWidthElenet}>
                <h5>tags</h5>
                {currentGame.tags?.map(tag =>
                    <a href={'/game'} key={tag.id}>
                        {tag.name}
                    </a>)}
            </div>
        </div>
    );
};

