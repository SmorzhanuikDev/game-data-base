import React, {useState} from 'react';
import s from "../Games.module.scss";
import {Select} from "../../../Common/Components/Select/Select";
import {BiSortAlt2} from "react-icons/bi";
import {orderOptions, platformsOptions, releasedOptions} from "../selectData";
import {useSearchParams} from "react-router-dom";
import {IoCloseOutline} from "react-icons/io5";
import {IoIosCloseCircle} from "react-icons/io";

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
    const [isTagOpen, setIsTagOpen] = useState(false)

    const cleanSearch = () => {
        searchParams.delete('search')
        setSearchParams(searchParams)
    }

    const setPlatforms = (value: string | undefined) => {
        if (value) {
            setSearchParams({platform: value})
        } else {
            searchParams.delete('platform')
            setSearchParams(searchParams)
        }
    }

    return (
        <div>
            <div className={s.filterBlock}>
                <div className={s.orderingSection}>
                    <Select options={orderOptions} title={'Order by'} onChangeSelect={setOrder} value={order}/>
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
                <Select title={'platform'} options={platformsOptions} onChangeSelect={setPlatforms} value={platforms}/>
                <Select title={'Released'} options={releasedOptions()} value={dates}
                        onChangeSelect={setDates}/>
                {
                    search
                        ? <div className={s.deleteSearch} onClick={cleanSearch}>
                            <div>
                                <span>{'Search: '}</span>
                                <span className={s.searchContent}>{search}</span>
                            </div>

                            <IoIosCloseCircle className={s.icon}/>
                        </div>
                        : null
                }
            </div>
            <div className={s.tagsBlock}>
                <div className={s.tagSelect} onClick={() => setIsTagOpen(true)}>
                    Tags:
                </div>
                <div className={s.tagsList}>
                    <span className={s.tag}>tag</span>
                    <span className={s.tag}>tag</span>
                    <span className={s.tag}>tag</span>
                </div>
                <div className={s.tagsModal} hidden={!isTagOpen}>
                    <div className={s.tagModalHead}>
                        <span>Select tags</span>
                        <IoCloseOutline className={s.closeIcon} onClick={() => setIsTagOpen(false)}/>
                    </div>
                    <span className={s.tag}>tag</span>
                    <span className={s.tag}>tag</span>
                    <span className={s.tag}>tag</span>
                </div>
            </div>
        </div>
    );
};

