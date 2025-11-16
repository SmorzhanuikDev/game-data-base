import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setToken} from "../Authorization/authSlice";
import {accountAction} from "./AccountSaga";

const Account = () => {

    const token = useAppSelector(state => state.auth.token)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!token) {
            navigate(`/auth`);
        }
    }, [navigate, token]);

    const logOut = () => {
        localStorage.removeItem("token");
        dispatch(setToken(''));
    }

    useEffect(() => {
        dispatch(accountAction.fetchUserAction())
    }, []);

    return (
        <div>
            account
            <button onClick={logOut}>log out</button>
        </div>
    );
};

export default Account;