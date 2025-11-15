import React, {useEffect, useState} from 'react';
import s from './Surface.module.scss'
import {Link, useNavigate} from "react-router-dom";
import blankProfile from '../Images/blank-profile.webp'
import {SearchField} from "./SearchField";
import {MdAccountCircle, MdLogin} from "react-icons/md";
import {useAppSelector} from "../hooks";


export const Navigation = () => {

    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true)
    const cls = visible ? s.visible : s.hidden;
    const token = useAppSelector(state => state.auth.token)


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
            <a href={'/home'} className={s.logo}>
                <span className={s.logoAbr}>
                    GDB
                </span>
                <span>
                    game data base
                </span>
            </a>
            <div className={s.navigation}>
                <Link to="/games" className={s.link}>
                    <p>Games</p>
                </Link>
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
            <div className={s.account}>
                {
                    token
                        ? <a href="/profile">
                            <MdAccountCircle/>
                        </a>
                        : <a href="/auth">
                            <MdLogin/>
                        </a>
                }
            </div>
        </header>
    );
};

