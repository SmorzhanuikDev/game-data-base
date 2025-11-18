import React, {useEffect} from 'react';
import {setToken} from "../../../Authorization/authSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {useNavigate} from "react-router-dom";
import {accountAction} from "../../AccountSaga";
import s from './account.module.scss'

export const Setting = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useAppSelector(state => state.auth.token);
    const user = useAppSelector(state => state.accountData.currentUser);

    const logOut = () => {
        localStorage.removeItem("token");
        dispatch(setToken(''));
        navigate('/home')
    }

    useEffect(() => {
        dispatch(accountAction.fetchUserAction())
    }, [dispatch, token])

    return (
        <div>
            <div className={s.profileBox}>
                <div className={s.dataString}>
                    <span className={s.desc}>
                        Login:
                    </span>
                    <span>
                        {user?.login}
                    </span>
                </div>
                <div className={s.dataString}>
                    <span className={s.desc}>
                        Name:
                    </span>
                    <span className={s.userName}>
                        {user?.name}
                    </span>
                </div>
                <button className={s.profileButton} onClick={logOut}>Log out</button>
            </div>
            <div className={s.profileBox}>
                <span className={s.desc}>Change name</span>
                <input type="text"/>
                <button className={s.profileButton}>Change</button>
            </div>
            <div className={s.profileBox}>
                <span className={s.desc}>Change password</span>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button className={s.profileButton}>Change</button>
            </div>
            <button className={s.profileButton}>Delete account</button>
        </div>
    );
};
