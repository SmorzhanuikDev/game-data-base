import React, {FC} from 'react';
import {SettingErrorMessage} from "./SettingErrorMessage";
import {Field} from "formik";
import s from "./setting.module.scss";

interface props {
    error: string | undefined;
    isLoading: boolean;
    name: string;
    type: 'password' | 'text';
}

export const FieldBlock:FC<props> = ({error, isLoading, name, type}) => {
    return (
        <SettingErrorMessage error={error}>
            <Field disabled={isLoading} name={name} type={type} className={s.profileInput}
                   autoComplete={'off'}/>
        </SettingErrorMessage>
    );
};

