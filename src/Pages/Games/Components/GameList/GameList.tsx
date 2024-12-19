import React, {FC, useEffect} from 'react';
import {Loader} from "../../../../Common/Components/Loader";
import {GameItem} from "./GameItem";
import {gameType} from "../../gamesTypes";
import {useAppDispatch} from "../../../../hooks";
import {NoResult} from "./NoResult";
import s from './gameList.module.scss'

interface props {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    gamesList: gameType[]
}

export const GameList: FC<props> = ({isLoading, gamesList, setIsLoading}) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (gamesList)
            setIsLoading(false)
    }, [dispatch, gamesList, setIsLoading]);

    if (isLoading) return <Loader/>
    return (
        <div>
            {gamesList?.length
                ? gamesList?.map(game => <GameItem key={game.id} game={game}/>)
                : <NoResult/>
            }
        </div>
    );
};

