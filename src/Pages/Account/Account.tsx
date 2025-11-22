import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {accountAction} from "./AccountSaga";
import s from './account.module.scss'
import {useBgImage} from "../../Surface/Content";
import accountBG from '../../Images/accountBGImage.jpg'
import {ProfileNav} from "./Components/Navigation/Navigation";
import {Lists} from "./Components/Lists/Lists";
import {Setting} from "./Components/Setting/Setting";
import {Ratings} from "./Components/Ratings/Ratings";

const Account = () => {

        const token = localStorage.getItem("token");
        const navigate = useNavigate();
        const dispatch = useAppDispatch();
        const {chapter} = useParams()
        const {sendImage} = useBgImage()

        useEffect(() => {
            sendImage(accountBG)
            if (!token) {
                navigate(`/auth`);
            }
        }, [dispatch, navigate, sendImage, token]);



        return (
            <div>
                <ProfileNav chapter={chapter}/>
                <div className={s.content}>
                    {chapter === 'account' && <Setting/>}
                    {chapter === 'lists' && <Lists/>}
                    {chapter === 'ratings' && <Ratings/>}
                </div>
            </div>
        )
            ;
    }
;

export default Account;