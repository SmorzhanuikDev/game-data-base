import React, {useEffect} from 'react';
import {fetchPlatformsAction} from "./platformsSaga";
import {useAppDispatch} from "../../hooks";

export const Platforms = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPlatformsAction())
    }, [dispatch]);

    return (
        <div>
            platform
        </div>
    );
};

