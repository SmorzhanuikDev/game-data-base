import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {accountAction} from "../../AccountSaga";
import s from './setting.module.scss'
import {CiWarning} from "react-icons/ci";
import {ProfileData} from "./Components/ProfileData";
import {ChangeName} from "./Components/ChangeName";
import {ChangePass} from "./Components/ChangePass";
import {ProfileLoader} from "../ProfileLoader/ProfileLoader";
import {DeleteAccount} from "./Components/DeleteAccount";
import {setToken} from "../../../Authorization/authSlice";
import {useNavigate} from "react-router-dom";


export const Setting = () => {

    const token = useAppSelector(state => state.auth.token);
    const isLoading = useAppSelector(state => state.accountData.isLoading);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(accountAction.fetchUser())
    }, [dispatch, token])

    const logOut = () => {
        localStorage.removeItem("token");
        dispatch(setToken(''));
        navigate('/home')
    }


    if(isLoading) return <ProfileLoader/>

    return (
        <div>
            <ProfileData logOut={logOut}/>
            <ChangeName/>
            <ChangePass/>
            <DeleteAccount logOut={logOut}/>
        </div>
    );
};
