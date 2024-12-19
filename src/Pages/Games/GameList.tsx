import React, {FC, useEffect} from 'react';
import {Loader} from "../../Common/Components/Loader";
import {GameItem} from "./Components/GameList/GameItem";
import {gameType} from "./gamesTypes";
import {useAppDispatch} from "../../hooks";

interface props {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    gamesList: gameType[]
}

export const GameList:FC<props> = ({isLoading, gamesList, setIsLoading}) => {

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (gamesList)
            setIsLoading(false)
    }, [dispatch, gamesList, isLoading, setIsLoading]);

    return (
        <div>
            {isLoading
                ? <Loader/>
                : gamesList && gamesList.map(game => <GameItem key={game.id} game={game}/>)
            }
        </div>
    );
};

