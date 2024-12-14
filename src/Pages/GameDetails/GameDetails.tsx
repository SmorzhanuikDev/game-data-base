import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {
    fetchGameAdditionsAction,
    fetchGameDetailsAction,
    fetchGameScreenshotsAction,
    fetchGameSeriesAction,
    fetchGameStoresAction, fetchStoresListAction
} from "./gameDetailsSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from './GameDetails.module.scss'
import {useBgImage} from "../../Surface/Content";
import "react-image-gallery/styles/scss/image-gallery.scss";
import {setIsAppLoading} from "../../appSlice";
import {BaseInfo} from "./Componets/BaseInfo/BaseInfo";
import {GameDetailsCommonInfo} from "./Componets/GameDetailsCommonInfo";
import {AdditionalInfo} from "./Componets/AdditionalInfo/AdditionalInfo";
import {GameDetailsDesc} from "./Componets/GameDetailsDesc";
import {SideBarSliderAndRequirements} from "./Componets/SideBarSliderAndRequirements";
import {GameStores} from "./Componets/GameStores";

const GameDetails = () => {

    const {sendImage} = useBgImage()
    const {gameId} = useParams()
    const dispatch = useAppDispatch()
    const currentGame = useAppSelector(state => state.gameDetails.currentGame)
    const currentGameAdditions = useAppSelector(state => state.gameDetails.additionalContent)
    const currentGameSeries = useAppSelector(state => state.gameDetails.gameSeries)
    const gameScreenshots = useAppSelector(state => state.gameDetails.gameScreenshots)

    useEffect( () => {
        if (gameId) {
             dispatch(setIsAppLoading(true))
            dispatch(fetchGameDetailsAction(Number(gameId)))
            dispatch(fetchGameAdditionsAction(Number(gameId)))
            dispatch(fetchGameSeriesAction(Number(gameId)))
            dispatch(fetchGameScreenshotsAction(Number(gameId)))
            dispatch(fetchGameStoresAction(Number(gameId)))
            dispatch(fetchStoresListAction())
        }
    }, [dispatch, gameId]);

    useEffect(() => {
        if (gameScreenshots.results && currentGame.name && currentGameAdditions.results && currentGameSeries.results) {
            dispatch(setIsAppLoading(false))
        }
    }, [currentGame, currentGameAdditions, currentGameSeries, dispatch, gameScreenshots]);

    useEffect(() => {
        if (currentGame.background_image || currentGame.background_image_additional) {
            sendImage(currentGame.background_image || currentGame.background_image_additional)
        }
    }, [currentGame.background_image, currentGame.background_image_additional, sendImage]);


    return (
        <div className={s.pageWrapper} style={{backgroundImage: `url:(${currentGame.background_image})`}}>
            <div>
                <BaseInfo currentGame={currentGame}/>
                <GameDetailsDesc desc={currentGame.description_raw}/>
                <GameDetailsCommonInfo currentGame={currentGame}/>
                <AdditionalInfo additionsData={currentGame.tags} title={'Tags'}/>
                <AdditionalInfo additionsData={currentGameAdditions.results} title={'DLC\'s and editions'}/>
                <AdditionalInfo additionsData={currentGameSeries.results} title={'Other game in the series'}/>
            </div>
            <div>
                <SideBarSliderAndRequirements platforms={currentGame.platforms} screenshots={gameScreenshots.results}/>
                <GameStores/>
            </div>
        </div>
    );
};

export default GameDetails;