import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchGameDetailsAction} from "./gameDetailsSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";

const GameDetails = () => {

    const {gameId} = useParams()
    const dispatch = useAppDispatch()
    const gameDetails = useAppSelector(state => state.gameDetails.currentGame)

    useEffect(() => {
        if (gameId) {
            dispatch(fetchGameDetailsAction(Number(gameId)))
        }
    }, [dispatch, gameId]);

    console.log(gameDetails)

    return (
        <div>
            gameDetails
        </div>
    );
};

export default GameDetails;