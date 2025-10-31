import React, {FC} from 'react';
import s from "../../Authorization/Auth.module.scss";
import {CgDanger} from "react-icons/cg";

interface props {
    error: string | undefined
    isTouched: boolean | undefined
}

export const ErrorMessage: FC<props> = ({error, isTouched}) => {
    return (
        error && isTouched
            ? <div className={s.error}>
                <CgDanger className={s.errorIcon}/>
                <span className={s.errorText}>{error}</span>
            </div>
            : null

    );
};

