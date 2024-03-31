import React from 'react';
import {gameAPI} from "../../API/gameAPI";
import {useDispatch} from "react-redux";
import {GAMES_FETCH_SUCCEEDED} from "./types";

export const Games = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>dispatch({type: GAMES_FETCH_SUCCEEDED})}>test</button>
        </div>
    );
};

