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
    order: string | undefined
    isReversed: boolean
    search: string | null
    setIsReversed: (value: boolean) => void
    setDates: (value: string | undefined) => void
    setOrder: (value: string | undefined) => void
}

export const Filters: React.FC<props> = (props) => {

    const {setDates, setIsReversed, isReversed, setOrder, order, dates, platforms, search} = props
    const [searchParams, setSearchParams] = useSearchParams()

    const cleanSearch = () => {
        searchParams.delete('search')
        setSearchParams(searchParams)
    }

    const setPlatforms = (value: string | undefined) => {
        if (value) {
            if (searchParams.has('platform')) {
                searchParams.set('platform', value)
            }
            searchParams.append('platform', value)
            setSearchParams(searchParams)
        } else {
            searchParams.delete('platform')
            setSearchParams(searchParams)
        }
    }

    return (
        <div className={s.filterBlock}>
            <div className={s.orderingSection}>
                <Select options={orderOptions} title={'Order by'} onChangeSelect={setOrder} value={order} pathParam={'ordering'}/>
                <SortButton isReversed={isReversed} setIsReversed={setIsReversed} order={order}/>
            </div>
            <Select title={'platform'} options={platformsOptions} onChangeSelect={setPlatforms} value={platforms} pathParam={'platform'}/>
            <Select title={'Released'} options={releasedOptions()} value={dates} onChangeSelect={setDates} pathParam={'date'}/>
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

