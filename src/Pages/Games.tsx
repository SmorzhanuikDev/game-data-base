import React from 'react';
import {gameAPI} from "../API/gameAPI";

export const Games = () => {
    return (
        <div>
            <button onClick={() => gameAPI.getGames()}>test</button>
        </div>
    );
};

