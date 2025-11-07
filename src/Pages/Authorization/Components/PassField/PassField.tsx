import React, {FC, useState} from 'react';
import s from "./passFiels.module.scss";
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";

interface props {
    value?: string
    placeholder?: string
    handleChange: any
    handleBlur: any
    fieldName: string
}

export const PassField: FC<props> = ({placeholder, value, handleChange, handleBlur, fieldName}) => {

    const [fieldType, setFieldType] = useState<'text' | 'password'>('password')

    const changePassType = () => {
        if (fieldType === 'password') {
            setFieldType('text')
        } else {
            setFieldType('password')
        }
    }

    return (
        <div className={s.passBlock}>
            <input name={fieldName} placeholder={placeholder} value={value}
                   onChange={handleChange} onBlur={handleBlur} className={s.textField} type={fieldType}/>
            {
                fieldType === 'text'
                    ? <IoEyeOffOutline className={s.showPass} onClick={changePassType}/>
                    : <IoEyeOutline className={s.showPass} onClick={changePassType}/>
            }
        </div>
    );
};

