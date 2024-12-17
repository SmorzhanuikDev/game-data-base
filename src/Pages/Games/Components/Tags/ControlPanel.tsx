import React, {FC, useState} from 'react';
import s from "./tags.module.scss";
import {FaCheckSquare, FaSquare} from "react-icons/fa";

interface props {
    submitModal: (ids: number[]) => void
    activeTags: number[]
}

export const ControlPanel: FC<props> = ({submitModal, activeTags}) => {

    return (
        <div className={s.controlPanel}>
            <div className={s.tagModalBtn} onClick={() => submitModal([])}>
                Clear all tags
            </div>
            <div className={s.tagModalBtn} onClick={() => submitModal(activeTags)}>
            Search
            </div>
        </div>
    );
};

