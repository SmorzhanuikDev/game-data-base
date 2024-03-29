import React from 'react';
import s from './Surface.module.scss'
import {useNavigate} from "react-router-dom";
export const Navigation = () => {

    let lastscroll = 0
    const defoultOffset = 300
    const header = document.getElementById('header')
    console.log(header)

    // const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
    // const containHide = () => header.classList.contains('hide')
    //
    // window.addEventListener('scroll', () => {
    //     if (scrollPosition() > lastscroll && !containHide() && scrollPosition() > defoultOffset) {
    //         header.classList.add('hide')
    //     }
    //     else if (scrollPosition() < lastscroll && containHide()) {
    //         header.classList.remove('hide')
    //     }
    //     lastscroll = scrollPosition()
    // })

    const navigate = useNavigate()

    return (
        <div id='header' onClick={()=>navigate('/home')} className={s.header}>
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
        </div>
    );
};

