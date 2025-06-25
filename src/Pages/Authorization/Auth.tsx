import React, {useEffect, useRef, useState} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import descImage from '../../Images/authDescImage.jpg'


export const Auth = () => {

    const {sendImage} = useBgImage()
    const descBlock = useRef<HTMLDivElement>(null)
    const singUp = useRef<HTMLDivElement>(null)
    const logIn = useRef<HTMLDivElement>(null)
    const [activeOption, setActiveOption] = useState<'singUp' | 'logIn'>('logIn')

    const click = () => {
        if (descBlock.current && singUp.current && logIn.current) {
            if (activeOption === 'logIn') {
                descBlock.current.style.right = '-20%'
                singUp.current.style.left = '1px'
                logIn.current.style.left = '100vw'
                setActiveOption('singUp')
            } else {
                setActiveOption('logIn')
                descBlock.current.style.right = '-195%'
                singUp.current.style.left = '-100vw'
                logIn.current.style.left = '1px'

            }
        }
    }

    useEffect(() => {
        sendImage(profileBGImage);
    }, [sendImage]);

    return (
        <div className={s.auth}>
            <div className={s.singUp}>
                <div className={s.description} ref={descBlock}>
                    <div className={s.descText} ref={singUp}>
                        <h3>Authorization allow you:</h3>
                        <div className={s.listItem}>&#x2022; Create lists of games for any needs</div>
                        <div className={s.listItem}>&#x2022; Rate games for share your impressions</div>
                        <div className={s.listItem}>&#x2022; Get access to your lists and rates on other device</div>
                        <div className={s.switchOption}>
                            <span className={s.text}>Have an account?&nbsp;</span>
                            <span className={s.link}  onClick={click}>Log in</span>
                        </div>
                    </div>
                    <div className={s.descText2} ref={logIn}>
                        <h3>Authorization allow you:</h3>
                        <div className={s.listItem}>&#x2022; Create lists of games for any needs</div>
                        <div className={s.listItem}>&#x2022; Rate games for share your impressions</div>
                        <div className={s.listItem}>&#x2022; Get access to your lists and rates on other device</div>
                        <div className={s.switchOption}>
                            <span className={s.text}>Don't have an account?&nbsp;</span>
                            <span className={s.link}  onClick={click}>Sing up</span>
                        </div>
                    </div>
                    <img className={s.image} src={descImage} alt="desc"/>
                    <div className={s.gradient}/>
                </div>
                <span className={s.title}>
                    Log in
                </span>
                <input placeholder={'Login'} className={s.textField} type="text"/>
                <input placeholder={'Password'} className={s.textField} type="password"/>
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

