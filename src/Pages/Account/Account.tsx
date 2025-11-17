import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {setToken} from "../Authorization/authSlice";
import {accountAction} from "./AccountSaga";
import s from './account.module.scss'
import {useBgImage} from "../../Surface/Content";
import accountBG from '../../Images/accountBGImage.jpg'
import {ProfileNav} from "./Components/Navigation/Navigation";

const Account = () => {

        const token = localStorage.getItem("token");
        const navigate = useNavigate();
        const dispatch = useAppDispatch();
        const {chapter} = useParams()
        const {sendImage} = useBgImage()

        useEffect(() => {
            if (!token) {
                navigate(`/auth`);
            } else {
                dispatch(accountAction.fetchUserAction())
                sendImage(accountBG)
            }
        }, [dispatch, navigate, sendImage, token]);

        const logOut = () => {
            localStorage.removeItem("token");
            dispatch(setToken(''));
            navigate('/home')
        }

        return (
            <div>
                <ProfileNav chapter={chapter}/>
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