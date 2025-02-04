import React, {useEffect, useRef} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import descImage from '../../Images/authDescImage.jpg'


export const Auth = () => {

    const {sendImage} = useBgImage()
    const ref = useRef<HTMLDivElement>(null)

    const click = () => {
        if (ref.current) {
            ref.current.style.right = '-20%'
        }
    }

    useEffect(() => {
        sendImage(profileBGImage);
    }, [sendImage]);

    return (
        <div className={s.auth}>
            <div className={s.logIn}>
                <div className={s.description} ref={ref} onClick={click}>
                    <img className={s.image} src={descImage} alt="desc"/>
                    <div className={s.gradient}/>
                </div>
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
                <input placeholder={'Password'} className={s.textField} type="password"/>
                <input placeholder={'Password'} className={s.textField} type="password"/>
                <div className={s.logInBtn}>Log in</div>
            </div>
        </div>
    );
};

