import React, {useState} from 'react';
import s from "../Games.module.scss";
import {Select} from "../../../Common/Components/Select/Select";
import {BiSortAlt2} from "react-icons/bi";
import {orderOptions, platformsOptions, releasedOptions} from "../selectData";
import {changeGamesListProp} from "../Games";

interface props {
    changeGamesList: (prop: changeGamesListProp) => void
}

export const Filters: React.FC<props> = ({changeGamesList}) => {

    const [isReversed, setIsReversed] = useState(false)
    const [order, setOrder] = useState<string | undefined>()
    const [platforms, setPlatforms] = useState<string | undefined>()
    const [dates, setDates] = useState<string | undefined>()

    const onChangeOrdering = (value: string | undefined) => {
        setOrder(value)
        changeGamesList({order: value, isReversed, platforms, dates})
    }

    const sortOrder = (sortBy: boolean) => {
        changeGamesList({order, isReversed: sortBy, platforms, dates})
        setIsReversed(sortBy)
    }

    const onChangePlatform = (value: string | undefined) => {
        changeGamesList({order, isReversed, platforms: value, dates})
        setPlatforms(value)
    }
    const onChangeReleased = (value: string | undefined) => {
        changeGamesList({order, isReversed, platforms, dates: value})
        setDates(value)
    }

    return (
        <div className={s.filterBlock}>
            <div className={s.orderingSection}>
                <Select options={orderOptions} title={'Order by'} onChangeSelect={onChangeOrdering}/>
                <BiSortAlt2 className={s.sortButton} onClick={order ? () => sortOrder(!isReversed) : () => {
                }}
                            style={order
                                ? {
                                    background: isReversed ? '#f4f4f4' : '#292927',
                                    color: isReversed ? 'black' : 'white'
                                }
                                : {background: '#706f6f', color: '#fff', cursor: 'auto'}
                            }/>
            </div>
            <Select title={'platform'} options={platformsOptions} onChangeSelect={onChangePlatform}/>
            <Select title={'Released'} options={releasedOptions()}
                    onChangeSelect={onChangeReleased}/>
        </div>
    );
};

