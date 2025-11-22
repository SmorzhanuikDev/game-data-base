import React from 'react';
import s from "./setting.module.scss";
import {setToken} from "../../../Authorization/authSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../hooks";

export const ProfileData = () => {

    const navigate = useNavigate();
    const user = useAppSelector(state => state.accountData.currentUser);
    const dispatch = useAppDispatch();


    const logOut = () => {
        localStorage.removeItem("token");
        dispatch(setToken(''));
        navigate('/home')
    }


    return (
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
    );
};

