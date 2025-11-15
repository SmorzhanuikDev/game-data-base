import React, {useEffect, useRef, useState} from 'react';
import s from "./opportunities.module.scss";
import descImage from "../../../../Images/authDescImage.jpg";
import {useAppDispatch} from "../../../../hooks";
import {setError} from "../../authSlice";



export const Opportunities: React.FC = () => {

    const opportunitiesRef = useRef<HTMLDivElement>(null)
    const singUp = useRef<HTMLDivElement>(null)
    const logIn = useRef<HTMLDivElement>(null)
    const [activeOption, setActiveOption] = useState<'singUp' | 'logIn'>('logIn')
    const dispatch = useAppDispatch()

    const changeAuthOption = () => {
        dispatch(setError(''))
        if (opportunitiesRef.current && singUp.current && logIn.current) {
            if (activeOption === 'logIn') {
                opportunitiesRef.current.style.right = '-20%'
                singUp.current.style.left = '1px'
                logIn.current.style.left = '100vw'
                setActiveOption('singUp')
            } else {
                setActiveOption('logIn')
                opportunitiesRef.current.style.right = '-195%'
                singUp.current.style.left = '-100vw'
                logIn.current.style.left = '1px'

            }
        }
    }

    useEffect(() => {
        localStorage.setItem('option', activeOption)
    }, [activeOption]);

    return (
        <div className={s.opportunities} ref={opportunitiesRef}>
            <div className={s.logInText} ref={singUp}>
                <h3>Authorization allow you:</h3>
                <div className={s.listItem}>&#x2022; Create lists of games for any needs</div>
                <div className={s.listItem}>&#x2022; Rate games for share your impressions</div>
                <div className={s.listItem}>&#x2022; Get access to your lists and rates on other device</div>
                <div className={s.switchOption}>
                    <span className={s.text}>Have an account?&nbsp;</span>
                    <span className={s.link} onClick={changeAuthOption}>Log in</span>
                </div>
            </div>
            <div className={s.SingInText} ref={logIn}>
                <h3>Authorization allow you:</h3>
                <div className={s.listItem}>&#x2022; Create lists of games for any needs</div>
                <div className={s.listItem}>&#x2022; Rate games for share your impressions</div>
                <div className={s.listItem}>&#x2022; Get access to your lists and rates on other device</div>
                <div className={s.switchOption}>
                    <span className={s.text}>Don't have an account?&nbsp;</span>
                    <span className={s.link} onClick={changeAuthOption}>Sing up</span>
                </div>
            </div>
            <img className={s.image} src={descImage} alt="desc"/>
            <div className={s.gradient}/>
        </div>
    );
};