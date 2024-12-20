import React from 'react';
import s from "./filters.module.scss";
import {Select} from "../../../../Common/Components/Select/Select";
import {orderOptions, platformsOptions, releasedOptions} from "../../selectData";
import {useSearchParams} from "react-router-dom";
import {IoIosCloseCircle} from "react-icons/io";
import {SortButton} from "./SortButton";

interface props {
    platforms: string | undefined
    dates: string | undefined
    order: string | null
    isReversed: boolean
    search: string | null
    setIsReversed: (value: boolean) => void
}

export const Filters: React.FC<props> = (props) => {

    const {setIsReversed, isReversed, order, dates, platforms, search} = props
    const [searchParams, setSearchParams] = useSearchParams()

    const cleanSearch = () => {
        searchParams.delete('search')
        searchParams.delete('page')
        setSearchParams(searchParams)
    }

    return (
        <div className={s.filterBlock}>
            <div className={s.orderingSection}>
                <Select options={orderOptions} title={'Order by'} value={order} pathParam={'ordering'}/>
                <SortButton isReversed={isReversed} setIsReversed={setIsReversed} order={order}/>
            </div>
            <Select title={'platform'} options={platformsOptions} value={platforms} pathParam={'platform'}/>
            <Select title={'Released'} options={releasedOptions()} value={dates} pathParam={'date'}/>
            {search
                ? <div className={s.deleteSearch} onClick={cleanSearch}>
                    <div>
                        <span>{'Search: '}</span>
                        <span className={s.searchContent}>{search}</span>
                    </div>
                    <IoIosCloseCircle className={s.icon}/>
                </div>
                : null}
        </div>
    );
};

