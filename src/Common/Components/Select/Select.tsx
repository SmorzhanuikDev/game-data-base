import React, {useEffect, useState} from 'react';
import s from "./select.module.scss";
import {IoIosArrowDown} from "react-icons/io";
import {SelectList} from "./SelectList";

interface props {
    title: string
    options: option[],
    onChangeSelect: (value: string | undefined) => void
    value: string | undefined
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

export const Select: React.FC<props> = ({options, onChangeSelect, title, value}) => {

    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [currentTitle, setCurrentTitle] = useState<string | undefined>(undefined)

    const openSelect = () => {
        setIsSelectOpen(true)
    }
    const closeSelect = (value: string | undefined, title: string | undefined) => {
        onChangeSelect(value)
        setIsSelectOpen(false)
        setCurrentTitle(title)
    }

    useEffect(() => {
        if (!value) {
            setCurrentTitle(undefined)
        }
    }, [value]);

    return (
        <div className={s.selectContainer}>
            <div className={s.select} style={currentTitle ? whiteBG : blackBG} onClick={openSelect}>
                <span className={s.selectCurrentItem}>{currentTitle || title}</span>
                <IoIosArrowDown className={s.selectIcon}/>
            </div>
            {
                isSelectOpen
                    ? <SelectList title={title} closeSelect={closeSelect} setIsSelectOpen={setIsSelectOpen}
                                  options={options}
                                  currentValue={currentTitle}/>
                    : null
            }
        </div>
    );
};

