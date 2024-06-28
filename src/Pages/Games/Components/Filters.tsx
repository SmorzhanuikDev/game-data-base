import React, {useState} from 'react';
import s from "../Games.module.scss";
import {ordering} from "../gamesTypes";
import {Select} from "../../../Common/Components/Select/Select";
import {BiSortAlt2} from "react-icons/bi";
import {orderOptions, platformsOptions} from "../selectData";

interface props {
    changeGamesList: (ordering: ordering | undefined, isReversed: boolean, platforms: string | undefined) => void
}

export const Filters: React.FC<props> = ({changeGamesList}) => {

    const [isReversed, setIsReversed] = useState(false)
    const [currentOrdering, setCurrentOrdering] = useState<string | undefined>()
    const [currentPlatform, setCurrentPlatform] = useState<string | undefined>()

    const onChangeOrdering = (value: string | undefined) => {
        setCurrentOrdering(value)
        changeGamesList(value, isReversed, currentPlatform)
    }

    const sortOrder = (sortBy: boolean) => {
        changeGamesList(currentOrdering, sortBy, currentPlatform)
        setIsReversed(sortBy)
    }

    const onChangePlatform = (value: string | undefined) => {
        changeGamesList(currentOrdering, isReversed, value)
        setCurrentPlatform(value)
    }

    return (
        <div className={s.filterBlock}>
            <div className={s.orderingSection}>
                <Select options={orderOptions} title={'Order by'} onChangeSelect={onChangeOrdering}/>
                <BiSortAlt2 className={s.sortButton} onClick={() => sortOrder(!isReversed)}
                            style={currentOrdering
                                ?{background: isReversed ? '#f4f4f4' : '#292927',
                                    color: isReversed ? 'black' : 'white'}
                                : {background: '#706f6f', color: '#fff', cursor: 'auto'}
                            }/>
            </div>
            <Select title={'platform'} options={platformsOptions} onChangeSelect={onChangePlatform}/>
        </div>
    );
};

