import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {accountAction} from "../../AccountSaga";
import s from './setting.module.scss'
import {CiWarning} from "react-icons/ci";
import {ProfileData} from "./ProfileData";
import {ChangeName} from "./ChangeName";
import {ChangePass} from "./ChangePass";


export const Setting = () => {

    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.auth.token);

    useEffect(() => {
        dispatch(accountAction.fetchUser())
    }, [dispatch, token])

    return (
        <div>
            <ProfileData/>
            <ChangeName/>
            <ChangePass/>
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
