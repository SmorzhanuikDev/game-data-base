import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {setIsAppLoading} from "../../../../appSlice";
import SmallLoader from "../../../../Common/Components/SmallLoader";
import {fetchDeveloperAction} from "../../gamesSaga";

interface props {
    devId: string | undefined;
}

export const DevBlock:FC<props> = ({devId}) => {

    const dispatch = useAppDispatch();
    const developer = useAppSelector(state => state.games.developer);
    
    useEffect(() => {
        if (devId) {
            dispatch(fetchDeveloperAction(Number(devId)))
        }
    }, [devId, dispatch]);

        return (
            <div>
                {developer.name}
            </div>
        );

};

