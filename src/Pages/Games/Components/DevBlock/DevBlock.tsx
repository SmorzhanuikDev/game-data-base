import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {fetchDeveloperAction} from "../../gamesSaga";
import {IoClose} from "react-icons/io5";
import s from './devBlock.module.scss'
import {useSearchParams} from "react-router-dom";


interface props {
    devId: string | undefined;
}

export const DevBlock: FC<props> = ({devId}) => {

    const dispatch = useAppDispatch();
    const developer = useAppSelector(state => state.games.developer);
    const [searchParams, setSearchParams] = useSearchParams()

    const removeDev = () => {
        searchParams.delete('dev')
        setSearchParams(searchParams)
    }

    useEffect(() => {
        if (devId) {
            dispatch(fetchDeveloperAction(Number(devId)))
        }
    }, [devId, dispatch]);

    if (!devId) return null;
    return (
        <div className={s.devButton} onClick={removeDev}>
            <div>
                <span className={s.beforeTitle}>Games developed by:</span>
                <span className={s.title}>{developer.name}</span>
            </div>
            <div className={s.closeButton}>
                <span className={s.closeText}>Remove developer</span>
                <IoClose className={s.closeIcon}/>
            </div>
        </div>
    );

};

