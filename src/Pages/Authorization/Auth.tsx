import React, {useEffect} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import {useAppDispatch} from "../../hooks";
import {SingInForm} from "./Components/SingInForm";
import {PassField} from "./Components/PassField/PassField";
import {SingUp} from "./Components/SingUp";


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
            <SingUp/>
        </div>
    );
};

