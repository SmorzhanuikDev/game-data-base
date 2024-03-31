import React from 'react';
import {gameAPI} from "../../API/gameAPI";
import {useDispatch} from "react-redux";
import {FETCH_GAME_LIST} from "./types";

export const Games = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>dispatch({type: FETCH_GAME_LIST})}>test</button>
        </div>
    );
};

