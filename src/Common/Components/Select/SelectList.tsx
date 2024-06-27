import React from 'react';
import s from "./select.module.scss";
import {IoMdClose} from "react-icons/io";
import {SelectOption} from "./SelectOption";
import {option} from "./Select";

interface props {
    currentValue: string | undefined
    closeSelect: (value: string | undefined, title: string | undefined) => void
    setIsSelectOpen: (isOpen: boolean) => void
    options: option[],
    title: string
}

export const SelectList: React.FC<props> = ({currentValue, setIsSelectOpen, closeSelect, options, title}) => {

    return (
        <div className={s.selectList}>
            <div className={s.selectListTitleContainer}>
                <div>
                    <div className={s.selectListTitle}>{title}</div>
                    {
                        currentValue
                            ? <div className={s.selectClearButton}
                                   onClick={() => closeSelect(undefined, undefined)}>clear</div>
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
    );
};

