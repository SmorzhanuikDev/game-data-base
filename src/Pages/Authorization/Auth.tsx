import React, {useEffect, useState} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {Opportunities} from "./Components/Opportunities/Opportunities";
import {PassField} from "./Components/PassField/PassField";


export const Auth = () => {

    const {sendImage} = useBgImage()


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
                <PassField/>
                <div className={s.logInBtn}>
                    Log in
                </div>
            </div>
            <div className={s.singUp}>
                <span className={s.title}>
                    Sing up
                </span>
                <input placeholder={'Name'} className={s.textField} type="text"/>
                <input placeholder={'Login'} className={s.textField} type="email"/>
                <PassField/>
                <PassField placeholder={'Confirm password'}/>
                <div className={s.logInBtn}>
                    Sing up
                </div>
            </div>
        </div>
    );
};

