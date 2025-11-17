import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setToken} from "../Authorization/authSlice";
import {accountAction} from "./AccountSaga";
import s from './account.module.scss'
import {useBgImage} from "../../Surface/Content";
import accountBG from '../../Images/accountBGImage.jpg'

type navName = 'account' | 'lists' | 'ratings'

const Account = () => {

        const token = localStorage.getItem("token");
        const navigate = useNavigate();
        const dispatch = useAppDispatch();
        const {chapter} = useParams()
        const {sendImage} = useBgImage()

        const chooseActiveStyle = (navName: navName) => {
            if (chapter === navName) {
                return s.activeNavItem
            } else {
                return s.navItem
            }
        }


        useEffect(() => {
            if (!token) {
                navigate(`/auth`);
            } else {
                dispatch(accountAction.fetchUserAction())
                sendImage(accountBG)
            }
        }, [dispatch, navigate, token]);

        const logOut = () => {
            localStorage.removeItem("token");
            dispatch(setToken(''));
            navigate('/home')
        }

        return (
            <div>
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
                <div className={s.content}>
                    {chapter === 'account' && <div>
                        <button onClick={logOut}>log out</button>
                    </div>}
                    {chapter === 'lists' && <div>
                        lists content
                    </div>}
                    {chapter === 'ratings' && <div>
                        games content
                    </div>}
                </div>
            </div>
        )
            ;
    }
;

export default Account;