import React, {useState} from 'react';
import s from "./select.module.scss";
import {IoIosArrowDown} from "react-icons/io";
import {SelectList} from "./SelectList";

interface props {
    title: string
    options: option[],
    onChangeSelect: (value: string | undefined) => void
}

export type option = {
    value: string
    title: string
    subOptions?: Array<{ value: string, title: string }>
}

const blackBG = {
    background: '#292927',
    color: 'white'
}
const whiteBG = {
    background: '#f1f1f1',
    color: 'black'
}

export const Select: React.FC<props> = ({options, onChangeSelect, title}) => {

    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState<string | undefined>(undefined)

    const openSelect = () => {
        setIsSelectOpen(true)
    }
    const closeSelect = (value: string | undefined) => {
        onChangeSelect(value)
        setIsSelectOpen(false)
        setCurrentValue(value)
    }

    return (
        <div className={s.selectContainer}>
            <div className={s.select} style={currentValue ? whiteBG : blackBG} onClick={openSelect}>
                <span className={s.selectCurrentItem}>{currentValue || title}</span>
                <IoIosArrowDown className={s.selectIcon}/>
            </div>
            {
                isSelectOpen
                    ? <SelectList title={title} closeSelect={closeSelect} setIsSelectOpen={setIsSelectOpen} options={options}
                                  currentValue={currentValue}/>
                    : null
            }
        </div>
    );
};

