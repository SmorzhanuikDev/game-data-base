import React from 'react';
import s from './Surface.module.scss'
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

    return (
        <div id='header' className={s.navigation}>
nas
        </div>
    );
};

