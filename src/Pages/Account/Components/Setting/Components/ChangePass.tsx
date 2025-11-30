import React, {useEffect, useState} from 'react';
import s from "../setting.module.scss";
import {Field, Form, Formik, FormikErrors, FormikHelpers} from "formik";
import {SettingErrorMessage} from "./SettingErrorMessage";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import {accountAction} from "../../../AccountSaga";
import {ButtonLoader} from "../../../../../Common/Components/ButtonLoader/ButtonLoader";
import {setPassRes} from "../../../AccountSlice";
import {FieldBlock} from "./FieldBlock";

interface formData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export const ChangePass = () => {

    const dispatch = useAppDispatch();
    const formData: formData = {confirmPassword: '', currentPassword: '', newPassword: ''};
    const [isLoading, setIsLoading] = useState(false);
    const changePassRes = useAppSelector(state => state.accountData.passRes)

    const validate = (values: formData) => {
        const errors: FormikErrors<formData> = {};

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Field is required.';
        }
        if (!values.currentPassword) {
            errors.currentPassword = 'Field is required.';
        }
        if (!values.newPassword) {
            errors.newPassword = 'Field is required.';
        }
        if (values.currentPassword && values.currentPassword.length < 6) {
            errors.currentPassword = 'Must be at least 6 characters long.';
        }
        if (values.newPassword && values.newPassword.length < 6) {
            errors.newPassword = 'Must be at least 6 characters long.';
        }
        if (values.confirmPassword && values.confirmPassword.length < 6) {
            errors.confirmPassword = 'Must be at least 6 characters long.';
        }
        if (values.newPassword && values.confirmPassword.length > 5 && values.newPassword !== values.confirmPassword) {
            errors.confirmPassword = 'Password not match';
        }
        return errors;
    };

    const submitForm = (values: formData, {setSubmitting, resetForm}: FormikHelpers<formData>) => {
        dispatch(setPassRes({success: false, message: ''}));
        setIsLoading(true)
        dispatch(accountAction.changePassword(
            {oldPassword: values.currentPassword, newPassword: values.newPassword},
        ))
        resetForm()
        setSubmitting(false);
    }

    useEffect(() => {
        if (changePassRes.message) {
            setIsLoading(false);
            setTimeout(() => dispatch(setPassRes({success: false, message: ''})), 10000)
        }
    }, [changePassRes, dispatch]);

    return (

        <Formik initialValues={formData} onSubmit={submitForm} validate={validate}>
            {({errors}) => (
                <Form>
                    <div className={s.profileBox}>
                        <span className={s.desc}>Change password</span>
                        <FieldBlock isLoading={isLoading} type='password' name="currentPassword"
                                    error={errors.currentPassword}/>
                        <FieldBlock isLoading={isLoading} type='password' name="newPassword"
                                    error={errors.newPassword}/>
                        <FieldBlock isLoading={isLoading} type='password' name="confirmPassword"
                                    error={errors.confirmPassword}/>
                        <SettingErrorMessage error={changePassRes?.message}>
                            <button disabled={isLoading} className={s.profileButton} type='submit'>
                                {isLoading ? <ButtonLoader/> : 'Change'}
                            </button>
                        </SettingErrorMessage>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

