import React, {useState} from 'react';
import s from "../Games.module.scss";
import {ordering} from "../gamesTypes";
import {Select} from "../../../Common/Components/Select/Select";
import {BiSortAlt2} from "react-icons/bi";

const orderOptions = [
    {value: 'name', title: 'Name'},
    {value: 'released', title: 'Released'},
    {value: 'rating', title: 'Rating'},
    {value: 'metacritic', title: 'Metacritic'},
    {value: 'added', title: 'date added'},
]

interface props {
    changeOrder: (ordering: ordering | undefined, isReversed: boolean) => void
}

export const Filters: React.FC<props> = ({changeOrder}) => {

    const [isReversed, setIsReversed] = useState(false)
    const [currentOrderingValue, setCurrentOrderingValue] = useState<string | undefined>()

    const onChangeOrdering = (value: string | undefined) => {
        setCurrentOrderingValue(value)
        changeOrder(value, false)
    }

    const sortOrder = (sortBy: boolean) => {
        changeOrder(currentOrderingValue, sortBy)
        setIsReversed(sortBy)
    }

    return (
        <div className={s.filterBlock}>
            <Select options={orderOptions} title={'Order by'} onChangeSelect={onChangeOrdering}/>
            <BiSortAlt2 className={s.sortButton} onClick={() => sortOrder(!isReversed)}
                        style={currentOrderingValue
                            ?{background: isReversed ? '#f4f4f4' : '#292927',
                            color: isReversed ? 'black' : 'white'}
                            : {background: '#706f6f', color: '#fff', cursor: 'auto'}
            }/>
        </div>
    );
};

