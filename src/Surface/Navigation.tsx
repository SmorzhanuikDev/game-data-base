import React, {useEffect, useRef, useState} from 'react';
import s from './Surface.module.scss'
import {useNavigate} from "react-router-dom";

export const Navigation = () => {

    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true)
    useEffect(()=> {
        const handleScroll = () => {
            let moving = window.pageYOffset

            setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    const cls = visible ? s.visible : s.hidden;


    const navigate = useNavigate()

    return (
        <header  onClick={() => navigate('/home')} className={cls}>
            <div className={s.logo}>
                <span className={s.logoAbr}>
                    GDB
                </span>
                <span>
                    game data base
                </span>
            </div>
            <div className={s.navigation}>
                <a href="/games" className={s.link}>
                    <p>Games</p>
                </a>
                <a href="/ganres" className={s.link}>
                    <p>Genres</p>
                </a>
                <a href="/developers" className={s.link}>
                    <p>Developers</p>
                </a>
                <a href="/platforms" className={s.link}>
                    <p>Platforms</p>
                </a>
            </div>
        </header>
    );
};

