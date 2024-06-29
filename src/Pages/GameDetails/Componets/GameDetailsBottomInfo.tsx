import React from 'react';
import s from "../GameDetails.module.scss";
import {gameDetailsType, gameListType} from "../gameDetailsTypes";

interface props {
    currentGame: gameDetailsType
    currentGameAdditions: gameListType
    currentGameSeries: gameListType
}

export const GameDetailsBottomInfo: React.FC<props> = ({currentGameSeries, currentGameAdditions, currentGame}) => {
    return (
        <div>
            {
                currentGameAdditions.results?.length
                    ? <div className={s.fullWidthElement}>
                        <h5>DLC's and editions</h5>
                        {currentGameAdditions.results?.map(additions =>
                            <a className={s.link} href={'/game/' + additions.id} key={additions.id}>
                                {additions.name}
                            </a>)}
                    </div>
                    : null
            }
            {
                currentGameSeries.results?.length
                    ? <div className={s.fullWidthElement}>
                        <h5>Other game in the series</h5>
                        {currentGameSeries.results?.map(game =>
                            <a className={s.link} href={'/game/' + game.id} key={game.id}>
                                {game.name}
                            </a>)}
                    </div>
                    : null
            }
            {
                currentGame.tags?.length
                    ? <div className={s.fullWidthElement}>
                        <h5>tags</h5>
                        {currentGame.tags?.map(tag =>
                            <a className={s.link} href={'/game'} key={tag.id}>
                                {tag.name}
                            </a>)}
                    </div>
                    : null
            }
        </div>
    );
};

