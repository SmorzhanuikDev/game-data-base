import React, {FC, PropsWithChildren} from 'react';
import s from "../Auth.module.scss";
import {ErrorMessage} from "./ErrorMessage";

interface props extends PropsWithChildren{
    error: string | undefined
    isTouched: boolean | undefined
}

export const FieldBox:FC<props> = ({error, isTouched, children} ) => {
    return (
        <div className={s.FieldBox}>
            {children}
            <ErrorMessage error={error} isTouched={isTouched}/>
        </div>
    );
};

