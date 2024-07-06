import React from 'react';
import s from "../Games.module.scss";
import {Select} from "../../../Common/Components/Select/Select";
import {BiSortAlt2} from "react-icons/bi";
import {orderOptions, platformsOptions, releasedOptions} from "../selectData";

interface props {
    setOrder: (value: string | undefined) => void
    order: string | undefined
    isReversed: boolean
    setIsReversed: (value: boolean) => void
    setPlatforms: (value: string | undefined) => void
    setDates: (value: string | undefined) => void
}

export const Filters: React.FC<props> = (props) => {
    const {setDates, setIsReversed, isReversed, setPlatforms, setOrder, order} = props

    return (
        <div className={s.filterBlock}>
            <div className={s.orderingSection}>
                <Select options={orderOptions} title={'Order by'} onChangeSelect={setOrder}/>
                <BiSortAlt2 className={s.sortButton} onClick={order ? () => setIsReversed(!isReversed) : () => {
                }}
                            style={order
                                ? {
                                    background: isReversed ? '#f4f4f4' : '#292927',
                                    color: isReversed ? 'black' : 'white'
                                }
                                : {background: '#706f6f', color: '#fff', cursor: 'auto'}
                            }/>
            </div>
            <Select title={'platform'} options={platformsOptions} onChangeSelect={setPlatforms}/>
            <Select title={'Released'} options={releasedOptions()}
                    onChangeSelect={setDates}/>
        </div>
    );
};

