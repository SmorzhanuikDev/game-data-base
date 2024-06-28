import React, {useState} from 'react';
import s from "./select.module.scss";
import {IoIosArrowForward} from "react-icons/io";
import {option} from "./Select";

interface props {
    option: option
    closeSelect: (value: string | undefined, title: string | undefined) => void
}

export const SelectOption: React.FC<props> = ({option, closeSelect}) => {

    const [showOption, setShowOption] = useState<null | string>()

    const showSubOption = (item: string | null) => {
        setShowOption(item)
    }

    return (
        <div onMouseLeave={() => showSubOption(null)}
             onMouseEnter={() => showSubOption(option.value)}
             className={s.selectListItem}>
            <div className={s.option} onClick={() => closeSelect(option.value, option.title)}>
                {option.title}
            </div>
            {option.subOptions ? <IoIosArrowForward className={s.subOptionArrow}/> : null}
            {
                option.subOptions
                    ?
                    <div hidden={!(showOption === option.value)}
                         className={s.selectSubOptions}>
                        {
                            option.subOptions.map(subOption =>
                                <div key={subOption.value}
                                     onClick={() => closeSelect(subOption.value, subOption.title)}>
                                    {subOption.title}
                                </div>)
                        }
                        <hr/>
                        <div onClick={() => closeSelect(option.value, option.title)} className={s.selectAllSubOption}>
                            select all
                        </div>
                    </div>
                    : null
            }
        </div>

    );
};

