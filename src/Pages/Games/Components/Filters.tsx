import React, {useState} from 'react';
import s from "../Games.module.scss";
import {ordering} from "../gamesTypes";
import Select from 'react-select'
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";


const orderOptions = [
    {value: 'name', label: 'Name'},
    {value: 'released', label: 'Released'},
    {value: 'rating', label: 'Rating'},
    {value: 'metacritic', label: 'Metacritic'},
    {value: undefined, label: 'Relevant'}
]
const platfonmOptions = [
    {value: '1', label: 'Nintendo Switch'},
    {value: '2', label: 'Xbox One'},
    {value: '3', label: 'PlayStation 4'},
    {value: '4', label: 'PC'},
    {value: 56, label: 'iOS'},
    {value: 5, label: 'Android'},
    {value: undefined, label: 'All'}
]

interface props {
    changeOrder: (ordering: ordering | undefined, isReversed: boolean) => void
}

export const Filters: React.FC<props> = ({changeOrder}) => {

    const [isReversed, setIsReversed] = useState(false)
    const [ordering, setOrdering] = useState<string | undefined>(undefined)

    const selectStyle: any = {
        control: (styles: any) => ({...styles, backgroundColor: '#0c0c0c', cursor: 'pointer'}),
        option: (styles: any) => ({...styles, color: '#0c0c0c', cursor: 'pointer'}),
        placeholder: (styles: any) => ({...styles, color: '#efecec'}),
        singleValue: (styles: any) => ({...styles, color: '#efecec'}),
    };

    const changeOrdering = (value: string) => {
        setOrdering(value)
        changeOrder(value, isReversed)
    }
    const changeRevers = () => {
        changeOrder(ordering, !isReversed)
        setIsReversed(!isReversed)
    }


    return (
        <div className={s.filterBlock}>
            <div className={s.ordering}>
                <span>Order by</span>
                <div className={s.orderingSelect}>
                    {/*@ts-ignore*/}
                    <Select onChange={e => changeOrdering(e.value)} options={orderOptions}
                            styles={selectStyle} defaultValue={orderOptions[4]}/>
                </div>
                <button disabled={!ordering} className={s.reversOrderingButton} onClick={changeRevers}>
                    {
                        isReversed ? <FaArrowUpWideShort/> : <FaArrowUpShortWide/>
                    }
                </button>
            </div>
            <div className={s.platform}>
                <span>Platforms</span>
                <div className={s.selectPlatform}>
                    <Select options={platfonmOptions}
                            styles={selectStyle} defaultValue={platfonmOptions[6]}/>
                </div>
            </div>
        </div>
    );
};

