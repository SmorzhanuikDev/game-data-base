import React, {useEffect, useState} from 'react';
import s from './Surface.module.scss'
import {useNavigate} from "react-router-dom";
import blankProfile from '../Images/blank-profile.webp'
import {SearchField} from "./SearchField";

export const Navigation = () => {

    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true)
    const cls = visible ? s.visible : s.hidden;
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset
            setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <header className={cls}>
            <div onClick={() => navigate('/home')} className={s.logo}>
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
                <a href="/genres" className={s.link}>
                    <p>Genres</p>
                </a>
                <a href="/developers" className={s.link}>
                    <p>Developers</p>
                </a>
                <a href="/platforms" className={s.link}>
                    <p>Platforms</p>
                </a>
            </div>
            <SearchField/>
            <div onClick={() => navigate('/profile')} className={s.avatarLink}>
                <img src={blankProfile} alt="avatar"/>
            </div>
        </header>
    );
};

