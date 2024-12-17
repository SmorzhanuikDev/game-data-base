import React, {FC, useState} from 'react';
import s from "./tags.module.scss";
import {FaCheckSquare, FaSquare} from "react-icons/fa";

interface props {
    submitModal: (ids: number[]) => void
    activeTags: number[]
}

export const ControlPanel: FC<props> = ({submitModal, activeTags}) => {

    const [isExact, setIsExact] = useState<boolean>(false)

    return (
        <div className={s.controlPanel}>
            <div className={s.tagModalBtn} onClick={() => setIsExact(!isExact)}>
                {isExact
                    ? <FaCheckSquare className={s.checkBox}/>
                    : <FaSquare className={s.checkBox}/>
                }
                <span>Exact search</span>
            </div>
            <div className={s.tagModalBtn} onClick={() => submitModal(activeTags)}>
                Clear all tags
            </div>
            <div className={s.tagModalBtn} onClick={() => submitModal(activeTags)}>
                Search
            </div>
        </div>
    );
};

