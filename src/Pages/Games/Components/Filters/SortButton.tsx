import React from 'react';
import s from "./filters.module.scss";
import {BiSortAlt2} from "react-icons/bi";

interface props {
    order: string | undefined
    isReversed: boolean
    setIsReversed: (isReversed: boolean) => void
}


export const SortButton: React.FC<props> = ({setIsReversed, isReversed, order}) => {

    const orderTrue = {
        background: isReversed ? '#f4f4f4' : '#292927',
        color: isReversed ? 'black' : 'white'
    }
    const orderFalse = {
        background: '#706f6f', color: '#fff', cursor: 'auto'
    }

    return (
        <BiSortAlt2 className={s.sortButton} onClick={order ? () => setIsReversed(!isReversed) : () => null}
                    style={order ? orderTrue : orderFalse}/>
    );
};

