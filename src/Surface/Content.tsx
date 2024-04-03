import React, {useEffect} from 'react';
import s from './Surface.module.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useAppSelector} from "../hooks";
import {RotatingSquare} from "react-loader-spinner";

export const Content = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const isAppLoading = useAppSelector(state => state.appData.isAppLoading)

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/home')
        }
    }, [location.pathname, navigate]);

    return (
        <div className={s.content}>
            <div hidden={!isAppLoading}>
                <div className={s.loader}>
                    <RotatingSquare
                        visible={true}
                        height="200"
                        width="200"
                        color="#fff"
                        ariaLabel="rotating-square-loading"
                        wrapperStyle={{marginTop: '110px'}}
                        wrapperClass=""
                    />
                </div>
            </div>
            <div hidden={isAppLoading}>
                <Outlet/>
            </div>
        </div>
    );
};

