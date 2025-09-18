import React, {useEffect, useState} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {Opportunities} from "./Components/Opportunities/Opportunities";


export const Auth = () => {

    const {sendImage} = useBgImage()
    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password')


    const changePassType = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    useEffect(() => {
        sendImage(profileBGImage);
    }, [sendImage]);

    return (
        <div className={s.auth}>
            <div className={s.singUp}>
                <Opportunities/>
                <span className={s.title}>
                    Log in
                </span>
                <input placeholder={'Login'} className={s.textField} type="text"/>
                <div className={s.passBlock}>
                    <input placeholder={'Password'} className={s.textField} type={passwordType}/>
                    {
                        passwordType === 'text'
                            ? <IoEyeOffOutline className={s.showPass} onClick={changePassType}/>
                            : <IoEyeOutline className={s.showPass} onClick={changePassType}/>
                    }
                </div>

                <div className={s.logInBtn}>Log in</div>
            </div>
            <div className={s.singUp}>
                <span className={s.title}>
                    Sing up
                </span>
                <input placeholder={'Name'} className={s.textField} type="text"/>
                <input placeholder={'Login'} className={s.textField} type="email"/>
                <input placeholder={'Password'} className={s.textField} type="password"/>
                <input placeholder={'Confirm password'} className={s.textField} type="password"/>
                <div className={s.logInBtn}>Sing up</div>
            </div>
        </div>
    );
};

