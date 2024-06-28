import React, {useEffect} from 'react';
import {fetchPlatformsAction} from "./platformsSaga";
import {useAppDispatch, useAppSelector} from "../../hooks";

export const Platforms = () => {

    const dispatch = useAppDispatch()

    const platforms = useAppSelector(state => state.platformsData.platforms)

    useEffect(() => {
        dispatch(fetchPlatformsAction())
    }, [dispatch]);

    console.log(platforms.results?.map( item => ({title: item.name, value: item.id})))
    return (
        <div>
            platform
        </div>
    );
};


