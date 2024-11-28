import React, {useEffect, useRef} from 'react';
import s from "./select.module.scss";
import {IoMdClose} from "react-icons/io";
import {SelectOption} from "./SelectOption";
import {option} from "./Select";
import {useSearchParams} from "react-router-dom";

interface props {
    currentValue: string | undefined
    closeSelect: (value: string | undefined, title: string | undefined) => void
    setIsSelectOpen: (isOpen: boolean) => void
    options: option[],
    title: string
}

export const SelectList: React.FC<props> = ({currentValue, setIsSelectOpen, closeSelect, options, title}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const selectRef = useRef<HTMLDivElement>(null)

    const clearSelect = () => {
        closeSelect(undefined, undefined)
        searchParams.delete('platform')
        setSearchParams(searchParams)
    }

    const handleClick = (event: any) => {
        if (selectRef.current && !selectRef.current.contains(event.target))
        console.log('click')
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, []);

    return (
        <>
            <div className={s.shadow}><div>test</div></div>
            <div className={s.selectList} ref={selectRef}>
                <div className={s.selectListTitleContainer}>
                    <div>
                        <div className={s.selectListTitle}>{title}</div>
                        {
                            currentValue
                                ? <div className={s.selectClearButton}
                                       onClick={clearSelect}>clear</div>
                                : null
                        }
                    </div>
                    <IoMdClose className={s.selectCloseIcon} onClick={() => setIsSelectOpen(false)}/>
                </div>
                <hr className={s.border}/>
                <div className={s.selectListContainer}>
                    {
                        options.map(option => <SelectOption key={option.value} closeSelect={closeSelect}
                                                            option={option}/>)
                    }
                </div>
            </div>
        </>

    );
};

