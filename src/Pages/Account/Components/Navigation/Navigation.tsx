import React from 'react';
import s from "./navigation.module.scss";
import {Link} from "react-router-dom";

interface props {
    chapter: string | undefined;
}

type navItem = 'account' | 'lists' | 'ratings'

export const ProfileNav: React.FC<props> = ({chapter}) => {

    const chooseActiveStyle = (navName: navItem) => {
        if (chapter === navName) {
            return s.activeNavItem
        } else {
            return s.navItem
        }
    }

    return (
        <div className={s.accountNav}>
            <Link to={'/profile/account'} className={chooseActiveStyle('account')}>
                <span className={s.navText}>Account</span>
                <div className={s.linkBG}></div>
            </Link>
            <Link to={'/profile/lists'} className={chooseActiveStyle('lists')}>
                <span className={s.navText}>Game lists</span>
                <div className={s.linkBG}></div>
            </Link>
            <Link to={'/profile/ratings'} className={chooseActiveStyle('ratings')}>
                <span className={s.navText}>Rated games</span>
                <div className={s.linkBG}></div>
            </Link>

        </div>
    );
};

