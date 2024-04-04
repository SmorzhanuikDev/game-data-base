import React, {useEffect, useState} from 'react';
import s from './Surface.module.scss'
import {Outlet, useLocation, useNavigate, useOutletContext} from "react-router-dom";
import {useAppSelector} from "../hooks";
import {RotatingSquare} from "react-loader-spinner";
import image from '../Images/no-image.png'


type ContextType = { sendImage: (image: string) => void };

export const Content = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [bgImage, setBgImage] = useState<string>('')
    const isAppLoading = useAppSelector(state => state.appData.isAppLoading)

    const sendImage = (image: string) => {
        setBgImage(image)
    }


    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/home')
        }
    }, [location.pathname, navigate]);

    return (
        <div className={s.content} style={{
            backgroundImage: `linear-gradient(rgba(33, 32, 24, 0.9), rgba(11, 8, 0, 1)), url("${bgImage}")`
        }}>
            <div hidden={!isAppLoading}>
                <div className={s.loader}>
                    <RotatingSquare
                        visible={true}
                        height="200"
                        width="200"
                        color="#fff"
                        ariaLabel="rotating-square-loading"
                        wrapperStyle={{marginTop: '110px'}}
                    />
                </div>
            </div>
            <div hidden={isAppLoading}>
                <Outlet context={{sendImage}}/>
            </div>
        </div>
    );
};

export function useBgImage() {
    return useOutletContext<ContextType>();
}

