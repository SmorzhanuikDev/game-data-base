import React, {useEffect} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import {useAppDispatch} from "../../hooks";
import {SingInForm} from "../Account/Components/SingInForm";


export const Auth = () => {

    const {sendImage} = useBgImage()
    const dispatch = useAppDispatch();

    useEffect(() => {
        sendImage(profileBGImage);
    }, [dispatch, sendImage]);


    // 'testUser', '324e2342'

    return (
        <div className={s.auth}>
            <SingInForm/>
            <div className={s.authForm}>
                <span className={s.title}>
                    Sing up
                </span>
                <div className={s.FieldBox}>
                    <input placeholder={'Name'} className={s.textField} type="text"/>
                </div>
                <div className={s.FieldBox}>
                    <input placeholder={'Login'} className={s.textField} type="email"/>
                </div>
                {/*<PassField/>*/}
                {/*<PassField placeholder={'Confirm password'}/>*/}
                <div className={s.logInBtn}>
                    Sing up
                </div>
            </div>
        </div>
    );
};

