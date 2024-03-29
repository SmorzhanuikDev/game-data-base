import React, {useEffect} from 'react';
import s from './Surface.module.scss'
import {Outlet, redirect, useLocation, useNavigate} from "react-router-dom";

export const Content = () => {

    const location = useLocation()
    const navigate = useNavigate()


    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/home')
        }
    }, [location.pathname, navigate]);

    return (
        <div className={s.content}>
            <Outlet/>
        </div>
    );
};

