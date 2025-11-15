import React, {useEffect} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {SingIn} from "./Components/SingIn";
import {SingUp} from "./Components/SingUp";
import {useNavigate} from "react-router-dom";
import {ShadowLoader} from "../../Surface/ShadowLoader/ShadowLoader";


export const Auth = () => {

    const {sendImage} = useBgImage()
    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.auth.token);
    const navigate = useNavigate()
    const isLoading = useAppSelector(state => state.auth.isLoading);

    useEffect(() => {
        sendImage(profileBGImage);
    }, [dispatch, sendImage]);


    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            navigate('/profile');
        }
    }, [navigate, token]);

    return (
        <div className={s.auth}>
            <ShadowLoader isLoading={isLoading} />
            <SingIn/>
            <SingUp/>
        </div>
    );
};

