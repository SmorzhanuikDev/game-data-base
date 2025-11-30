import React from 'react';
import {IoIosCheckmarkCircle} from "react-icons/io";
import s from '../setting.module.scss'

interface props {
    logOut: () => void;
}

export const Success:React.FC<props> = ({logOut}) => {

    setTimeout( logOut, 3000);

    return (
        <div className={s.successRes}>
            <IoIosCheckmarkCircle className={s.successIcon}/>
            <span>
                Account was successfully deleted.
            </span>
        </div>
    );
};
