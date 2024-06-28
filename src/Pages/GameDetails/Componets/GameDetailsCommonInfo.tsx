import React from 'react';
import s from "../GameDetails.module.scss";
import {formatDate, formatESRBRating} from "../../../Common/commonFunctions";
import {gameDetailsType} from "../gameDetailsTypes";

interface props {
    currentGame: gameDetailsType
}

export const GameDetailsCommonInfo: React.FC<props> = ({currentGame}) => {
    return (
        <div>
            <div className={s.commonInfo}>
                <div>
                    <h5>Platforms</h5>
                    <div> {currentGame?.platforms?.map(platform =>
                        <a href={`/platform/${platform.platform.id}`} key={platform.platform.id}>
                            {platform.platform.name}
                        </a>
                    )}</div>
                </div>
                <div>
                    <h5>genres</h5>
                    <div>{currentGame.genres?.map(genre =>
                        <a href={`/genre/${genre.id}`} key={genre.id}>
                            {genre.name}
                        </a>
                    )}</div>
                </div>
                <div>
                    <h5>metascore</h5>
                    <span className={s.metacriticScore}>
                            {currentGame.metacritic || 'No rate'}
                        </span>
                </div>
                <div>
                    <h5>release date</h5>
                    <p className={s.releaseDate}>
                        {formatDate(currentGame.released)}
                    </p>
                </div>
                <div>
                    <h5>developers</h5>
                    <div>
                        {currentGame.developers?.map(developers =>
                            <a href={`/developer/${developers.id}`} key={developers.id}>
                                {developers.name}
                            </a>
                        )}
                    </div>
                </div>
                {
                    currentGame.publishers.length
                        ? <div>
                            <h5>publisher</h5>
                            <div>
                                {currentGame.publishers?.map(publisher =>
                                    <a href={`/publisher/${publisher.id}`} key={publisher.id}>
                                        {publisher.name}
                                    </a>
                                )}
                            </div>
                        </div>
                        : null
                }
                {
                    currentGame.esrb_rating
                        ? <div>
                            <h5>age rating</h5>
                            <span className={s.esrbRating}>{formatESRBRating(currentGame.esrb_rating)}</span>
                        </div>
                        : null
                }
                {
                    currentGame.website
                        ? <div>
                            <h5>website</h5>
                            <a href={currentGame.website}>{currentGame.website}</a>
                        </div>
                        : null
                }
            </div>

        </div>
    )
        ;
};

