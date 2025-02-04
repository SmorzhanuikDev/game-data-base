import React, {useEffect} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'

export const Auth = () => {

    const {sendImage} = useBgImage()

    useEffect(() => {
        sendImage(profileBGImage);
    }, [sendImage]);

    return (
        <div className={s.auth}>
            <div className={s.logIn}>
                <span className={s.title}>
                    Log in
                </span>
                <input placeholder={'Username'} className={s.textField} type="text"/>
                <input placeholder={'Password'} className={s.textField} type="password"/>
                <div className={s.logInBtn}>Log in</div>
            </div>
            <div className={s.logIn}>
                <span className={s.title}>
                    Log in
                </span>
                <input placeholder={'Username'} className={s.textField} type="text"/>
                <input placeholder={'Password'} className={s.textField} type="password"/>
                <div className={s.logInBtn}>Log in</div>
            </div>
        </div>
    );
};

