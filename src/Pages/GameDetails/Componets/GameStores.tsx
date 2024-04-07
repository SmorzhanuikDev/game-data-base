import React from 'react';
import {useAppSelector} from "../../../hooks";
import {storeItem} from "../gameDetailsTypes";
import s from '../GameDetails.module.scss'
import {BsPlaystation} from "react-icons/bs";
import {BsSteam} from "react-icons/bs";
import {BsXbox} from "react-icons/bs";
import {PiAppStoreLogoBold} from "react-icons/pi";
import {SiGogdotcom} from "react-icons/si";
import {BsNintendoSwitch} from "react-icons/bs";
import {FaGooglePlay} from "react-icons/fa6";
import {FaItchIo} from "react-icons/fa";
import {SiEpicgames} from "react-icons/si";

export const GameStores = () => {

    const gameStores = useAppSelector(state => state.gameDetails.gameStores)
    const storesList = useAppSelector(state => state.gameDetails.storesList)

    const putOutStoreName = (storeId: number, storesList: storeItem[]) => {
        let name
        let icon

        if (storesList) {
            name = storesList.find(store => store.id === storeId)?.name

            switch (name) {
                case "Steam":
                    icon = <BsSteam/>;
                    break
                case "PlayStation Store":
                    icon = <BsPlaystation/>;
                    break
                case "App Store":
                    icon = <PiAppStoreLogoBold/>;
                    break
                case "GOG":
                    icon = <SiGogdotcom/>;
                    break
                case "Nintendo Store":
                    icon = <BsNintendoSwitch/>;
                    break
                case "Xbox Store":
                case "Xbox 360 Store":
                    icon = <BsXbox/>;
                    break
                case "Google Play":
                    icon = <FaGooglePlay/>;
                    break
                case 'itch.io':
                    icon = <FaItchIo/>;
                    break
                case "Epic Games":
                    icon = <SiEpicgames/>;
                    break
            }
            return <div>
                <span>{name}</span>
                <span className={s.storeIcon}>{icon}</span>
            </div>
        }

        return 'some store'
    }

    return (
        <div className={s.storeList}>
            <h4>Where to buy</h4>
            {gameStores.results?.map(store => <a href={store.url} key={store.id}>
                {putOutStoreName(store.store_id, storesList.results)}
            </a>)}
        </div>
    );
};

