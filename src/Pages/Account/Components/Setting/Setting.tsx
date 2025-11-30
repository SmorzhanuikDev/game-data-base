import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {accountAction} from "../../AccountSaga";
import s from './setting.module.scss'
import {CiWarning} from "react-icons/ci";
import {ProfileData} from "./ProfileData";
import {ChangeName} from "./ChangeName";
import {ChangePass} from "./ChangePass";
import {ProfileLoader} from "../ProfileLoader/ProfileLoader";
import {DeleteAccount} from "./DeleteAccount";


export const Setting = () => {

    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.auth.token);
    const isLoading = useAppSelector(state => state.accountData.isLoading);

    useEffect(() => {
        dispatch(accountAction.fetchUser())
    }, [dispatch, token])


    if(isLoading) return <ProfileLoader/>

    return (
        <div>
            <ProfileData/>
            <ChangeName/>
            <ChangePass/>
            <DeleteAccount/>
        </div>
    );
};
