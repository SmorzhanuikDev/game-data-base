import React, {useState} from 'react';
import {FieldBlock} from "./FieldBlock";
import {IoEye} from "react-icons/io5";
import {IoEyeOff} from "react-icons/io5";
import s from '../setting.module.scss'


interface props {
    error: string | undefined;
    isLoading: boolean;
    name: string;
}

export const AccountPassField: React.FC<props> = ({error, isLoading, name}) => {

    const [inputType, setInputType] = useState<'password' | 'text'>('password');

    const changeType = () => {
        if (inputType=== 'text') {
            setInputType('password');
        } else {
            setInputType('text');
        }
    }

    return (
        <div className={s.passWrapper}>
            <FieldBlock isLoading={isLoading} type={inputType} name={name} error={error}/>
            {inputType === 'password'
                ? <IoEye className={s.showPassIcon} onClick={changeType}/>
                : <IoEyeOff className={s.showPassIcon} onClick={changeType}/>
            }
        </div>
    );
};

