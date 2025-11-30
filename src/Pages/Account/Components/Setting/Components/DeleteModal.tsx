import React, {useEffect} from 'react';
import s from "../setting.module.scss";
import {IoIosCheckmarkCircle} from "react-icons/io";
import {Form, Formik, FormikErrors, FormikHelpers} from "formik";
import {FieldBlock} from "./FieldBlock";
import {SettingErrorMessage} from "./SettingErrorMessage";
import {ButtonLoader} from "../../../../../Common/Components/ButtonLoader/ButtonLoader";
import {setDeleteAccountRes, setPassRes} from "../../../AccountSlice";
import {accountAction} from "../../../AccountSaga";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import {Success} from "./Success";

interface props {
    closeModal: () => void;
    logOut: () => void;
}

interface formData {
    password: string;
}

export const DeleteModal: React.FC<props> = ({closeModal, logOut}) => {

    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = React.useState(false);
    const formData: formData = {password: ''}
    const deleteAccountRes = useAppSelector(state => state.accountData.deleteAccountRes)

    const validate = (values: formData) => {
        const errors: FormikErrors<formData> = {};
        if (!values.password) {
            errors.password = 'Field is required.';
        }
        if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }
        return errors;
    };

    const submitForm = (values: formData, {setSubmitting, resetForm}: FormikHelpers<formData>) => {
        dispatch(setDeleteAccountRes({success: false, message: ''}));
        setIsLoading(true)
        dispatch(accountAction.deleteAccount(values.password))
        resetForm()
        setSubmitting(false);
    }

    useEffect(() => {
        if (deleteAccountRes.message) {
            setIsLoading(false);
            setTimeout(() => dispatch(setDeleteAccountRes({success: false, message: ''})), 10000)
        }
    }, [deleteAccountRes, dispatch]);


    return (
        <div className={s.modal}>
            <div className={s.modalShadow} onClick={closeModal}/>
            <div className={deleteAccountRes.success ? s.modalSuccess : s.modalWarning}>
                {
                    deleteAccountRes.success
                        ? <Success logOut={logOut} />
                        : <Formik initialValues={formData} onSubmit={submitForm} validate={validate}>
                            {({errors}) => (
                                <Form>

                                    <p className={s.title}>Enter you password</p>

                                    <FieldBlock isLoading={isLoading} type='password' name="password"
                                                error={errors.password}/>
                                    <SettingErrorMessage error={deleteAccountRes?.message}>
                                        <button disabled={isLoading} className={s.profileButton} type='submit'>
                                            {isLoading ? <ButtonLoader/> : 'Change'}
                                        </button>
                                    </SettingErrorMessage>

                                    <p className={s.description}>
                                        If you want to permanently delete your account
                                        you need to prove that it's is really you.
                                    </p>
                                </Form>
                            )}
                        </Formik>
                }
            </div>
        </div>
    );
};

