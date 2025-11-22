import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {accountAction} from "../../AccountSaga";
import s from './setting.module.scss'
import {CiWarning} from "react-icons/ci";
import {ProfileData} from "./ProfileData";
import {ChangeName} from "./ChangeName";


export const Setting = () => {

    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.auth.token);

    useEffect(() => {
        dispatch(accountAction.fetchUserAction())
    }, [dispatch, token])

    return (
        <div>
            <ProfileData/>
            <ChangeName/>
            <div className={s.profileBox}>
                <span className={s.desc}>Change password</span>
                <input className={s.profileInput} type="text"/>
                <input className={s.profileInput} type="text"/>
                <input className={s.profileInput} type="text"/>
                <button className={s.profileButton}>Change</button>
            </div>
            <div className={s.profileBox}>
                <div className={s.deleteInfo}>
                    <CiWarning className={s.warningIcon}/>
                    <span>
                        Once deleted, your game lists and ratings cannot be restored.
                    </span>
                </div>
                <button className={s.profileButton}>Delete account</button>
            </div>
        </div>
    );
};
