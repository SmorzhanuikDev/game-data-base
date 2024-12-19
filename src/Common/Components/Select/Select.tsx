import React, {useCallback, useEffect, useState} from 'react';
import s from "./select.module.scss";
import {IoIosArrowDown} from "react-icons/io";
import {SelectList} from "./SelectList";
import {useSearchParams} from "react-router-dom";

interface props {
    title: string
    options: option[],
    onChangeSelect: (value: string | undefined) => void
    value: string | undefined
    pathParam: string
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

export const Select: React.FC<props> = ({options, onChangeSelect, title, value, pathParam}) => {

    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [currentTitle, setCurrentTitle] = useState<string | undefined>(undefined)
    const [searchParams, setSearchParams] = useSearchParams()


    const openSelect = () => {
        setIsSelectOpen(true)
    }
    const closeSelect = (value: string | undefined, title: string | undefined) => {
        console.log(value, title)
        onChangeSelect(value)
        setIsSelectOpen(false)
        if (value && searchParams.has(pathParam)) {
            searchParams.set(pathParam, value)
        } else if (!value) {
            searchParams.delete(pathParam)
        } else {
            searchParams.append(pathParam, value)
        }
        setSearchParams(searchParams)
        setCurrentTitle(title)
    }

    const findOption = useCallback( (options:option[], value: string):string | undefined => {
        if (options.length === 1 && options[0].value !== value) {
            return undefined
        } else if (options[0].value === value) {
            return options[0].title
        } else if (options[0].subOptions) {
            return findOption([...options.slice(1), ...options[0].subOptions], value)
        }else {
            return findOption( options.slice(1), value)
        }
    }, [])

    useEffect(() => {
        if (!value) {
            setCurrentTitle(undefined)
        } else {
            setCurrentTitle(findOption(options, value))
        }

    }, [findOption, options, value]);

    useEffect(() => {
        if (isSelectOpen) {
            document.body.style.overflow = 'hidden'
        } else document.body.style.overflow = 'auto'
    }, [isSelectOpen]);

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

