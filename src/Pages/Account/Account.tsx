import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks";
import {useNavigate} from "react-router-dom";

const Account = () => {

    const token = useAppSelector(state => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate(`/auth`);
        }
    }, [navigate, token]);

    return (
        <div>
            account
        </div>
    );
};

export default Account;