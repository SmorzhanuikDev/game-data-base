import React, {useState} from 'react';
import s from "../Games.module.scss";
import {ordering} from "../gamesTypes";
import {IoIosArrowDown} from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import {Select} from "../../../Common/Components/Select/Select";



const orderOptions = [
    {value: 'name', title: 'Name'},
    {value: 'released', title: 'Released'},
    {value: 'rating', title: 'Rating'},
    {value: 'metacritic', title: 'Metacritic', subOptions: [{value: 'released', title: 'Released'},
            {value: 'rating', title: 'Rating'},]},
]

interface props {
    changeOrder: (ordering: ordering | undefined, isReversed: boolean) => void
}

export const Filters: React.FC<props> = ({changeOrder}) => {

    const [isReversed, setIsReversed] = useState(false)
    const [ordering, setOrdering] = useState<string | undefined>(undefined)
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [showOption, setShowOption] = useState<null | string>()


    const changeOrdering = (value: string) => {
        setOrdering(value)
        changeOrder(value, isReversed)
    }
    const changeRevers = () => {
        changeOrder(ordering, !isReversed)
        setIsReversed(!isReversed)
    }

    const openSelect = () => {
        setIsSelectOpen(true)
    }
    const closeSelect = () => {
        setIsSelectOpen(false)
    }

    const showSubOption = (item: string | null) => {
        setShowOption(item)
    }
    const onChangeSelect = (value: string | undefined) => {
        console.log(value)
    }


    return (
        <div className={s.filterBlock}>
            <Select options={orderOptions} title={'platforms'} onChangeSelect={onChangeSelect}/>
        </div>
    );
};

