import React from 'react';
import { LuSearchX as NoResIcon } from "react-icons/lu";
import s from './gameList.module.scss'

export const NoResult = () => {
    return (
        <div className={s.noResult}>
            <NoResIcon className={s.noResIcon}/>
            <span className={s.noResText}>
                No results found for you request
            </span>
        </div>
    );
};

