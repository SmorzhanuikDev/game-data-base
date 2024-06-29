import React, {useEffect, useState} from 'react';
import {fetchPlatformsAction} from "./platformsSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from "./Platforms.module.scss";
import mainS from '../../main.module.scss'
import {CommonCard} from "../../Common/Components/CommonCard/CommonCard";

export const Platforms = () => {

    const dispatch = useAppDispatch()

    const platforms = useAppSelector(state => state.platformsData.platforms)
    const [fetching, setFetching] = useState(false)


    useEffect(() => {
        if (fetching) {
            dispatch(fetchPlatformsAction(2))
        }

    }, [dispatch, fetching]);

    useEffect(() => {
        dispatch(fetchPlatformsAction(1))
    }, [dispatch]);

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)
            setFetching(true)
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    return (
        <div>
            <h3 className={mainS.pageTitle}>Platforms</h3>
            <div className={s.container}>

                {
                    platforms.results?.map(platform => <CommonCard
                        key={platform.name} games={platform.games}
                        gameCount={platform.games_count} title={platform.name} bgImage={platform.image_background}
                    />)
                }
            </div>
            {
                fetching ? null : <div className={s.loader}></div>
            }
        </div>
    );
};


