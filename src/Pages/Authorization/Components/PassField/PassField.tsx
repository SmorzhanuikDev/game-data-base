import React, {FC, useState} from 'react';
import s from "./passFiels.module.scss";
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";

interface props {
    value?: string
    placeholder?: string
    handleChange: any
    handleBlur: any
}

export const PassField: FC<props> = ({placeholder, value, handleChange, handleBlur}) => {

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
            <input name='password' placeholder={placeholder || 'Password'} value={value}
                   onChange={handleChange} onBlur={handleBlur} className={s.textField} type={passwordType}/>
            {
                passwordType === 'text'
                    ? <IoEyeOffOutline className={s.showPass} onClick={changePassType}/>
                    : <IoEyeOutline className={s.showPass} onClick={changePassType}/>
            }
        </div>
    );
};

