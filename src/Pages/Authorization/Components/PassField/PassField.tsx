import React, {FC, useState} from 'react';
import s from "./passFiels.module.scss";
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";

interface props {
    placeholder?: string;
}

export const PassField:FC<props> = ({placeholder}) => {

    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password')

    const changePassType = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    return (
        <div className={s.passBlock}>
            <input placeholder={placeholder || 'Password'} className={s.textField} type={passwordType}/>
            {
                passwordType === 'text'
                    ? <IoEyeOffOutline className={s.showPass} onClick={changePassType}/>
                    : <IoEyeOutline className={s.showPass} onClick={changePassType}/>
            }
        </div>
    );
};

