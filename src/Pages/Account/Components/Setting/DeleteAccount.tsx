import React from 'react';
import s from "./setting.module.scss";
import {CiWarning} from "react-icons/ci";

export const DeleteAccount = () => {

    const deleteAccount = () => {
        dispatch
    }

    return (
        <div className={s.profileBox}>
            <div className={s.deleteInfo}>
                <CiWarning className={s.warningIcon}/>
                <span>
                    Once deleted, your game lists and ratings cannot be restored.
                </span>
            </div>
            <button className={s.profileButton}>Delete account</button>
        </div>
    );
};

