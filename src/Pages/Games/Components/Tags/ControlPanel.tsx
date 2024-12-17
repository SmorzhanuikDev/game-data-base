import React, {FC} from 'react';
import s from "./tags.module.scss";

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

