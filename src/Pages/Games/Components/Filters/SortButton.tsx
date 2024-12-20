import React from 'react';
import s from "./filters.module.scss";
import {BiSortAlt2} from "react-icons/bi";
import {useSearchParams} from "react-router-dom";

export const SortButton = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const ordering = searchParams.get('ordering')
    const reverse = searchParams.get('reverse')

    const direction = {
        background: reverse ? '#f4f4f4' : '#292927',
        color: reverse ? 'black' : 'white'
    }
    const directionDisable = {
        background: '#706f6f', color: '#fff', cursor: 'auto'
    }

    const style = ordering ? direction : directionDisable

    const setDirection = () => {
        if (ordering) {
            if (!reverse) {
                searchParams.set('reverse', 'true')
                setSearchParams(searchParams)
            } else {
                searchParams.delete('reverse')
                setSearchParams(searchParams)
            }
        }
    }

    return (
        <BiSortAlt2 className={s.sortButton} onClick={setDirection} style={style}/>
    );
};

