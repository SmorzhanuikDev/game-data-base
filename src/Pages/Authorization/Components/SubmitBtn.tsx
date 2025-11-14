import React from 'react';
import s from "../Auth.module.scss";
import {MdNoEncryptionGmailerrorred} from "react-icons/md";
import {useAppSelector} from "../../../hooks";

interface props {
    text: string;
    submitForm: () => void;
}

export const SubmitBtn: React.FC<props> = ({text, submitForm}) => {

    const resError = useAppSelector(state => state.authSaga.error)

    return (
        <div className={s.SubmitBox}>
            <div className={s.submitBnt} onClick={submitForm}>
                {text}
            </div>
            {
                resError &&
                <div className={s.resError}>
                    <MdNoEncryptionGmailerrorred className={s.resErrorIcn}/>
                    <span>
                        {resError}
                    </span>
                </div>
            }
        </div>
    );
};

