import React, {useEffect} from 'react';
import s from './profile.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'

export const Profile = () => {

    const {sendImage} = useBgImage()

    useEffect(() => {
        sendImage(profileBGImage);
    }, [sendImage]);

    return (
        <div className={s.profile}>
            <div className={s.authBlock}>
                <span className={s.title}>
                    Log in
                </span>
                <input placeholder={'Email'} className={s.textField} type="email"/>
                <input placeholder={'Password'} className={s.textField} type="password"/>
                <div className={s.logInBtn}>Log in</div>
            </div>
        </div>
    );
};

