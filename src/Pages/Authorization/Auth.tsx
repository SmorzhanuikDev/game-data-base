import React, {useEffect} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import {Opportunities} from "./Components/Opportunities/Opportunities";
import {PassField} from "./Components/PassField/PassField";
import {useAppDispatch} from "../../hooks";
import {fetchTokenAction} from "./authSaga";
import {Formik, FormikErrors} from 'formik';
import {singInData} from "./authTypes";
import {ErrorMessage} from "../Account/Components/ErrorMessage";


export const Auth = () => {

    const {sendImage} = useBgImage()
    const dispatch = useAppDispatch();
    const authData: singInData = {login: "", password: "",};


    useEffect(() => {
        sendImage(profileBGImage);
    }, [dispatch, sendImage]);


    // 'testUser', '324e2342'

    return (
        <div className={s.auth}>
            <div className={s.authForm}>
                <Formik
                    initialValues={authData}
                    validate={values => {
                        const errors: FormikErrors<singInData> = {};
                        if (values.password.length <= 6) {
                            errors.password = "Password must be at least 6 characters";
                        }
                        if (values.login.length <= 3) {
                            errors.login = "Login must be at least 4 characters";
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        dispatch(fetchTokenAction(values))
                        setSubmitting(false);
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          submitForm
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Opportunities/>
                            <span className={s.title}>
                                Log in
                            </span>
                            <div className={s.FieldBox}>
                                <input
                                    type="text"
                                    className={s.textField}
                                    placeholder={'Login'}
                                    name="login"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.login}
                                />
                                <ErrorMessage error={errors.login} isTouched={touched.login}/>
                            </div>

                            <PassField value={values.password} handleChange={handleChange} handleBlur={handleBlur}/>

                            <div className={s.logInBtn} onClick={submitForm}>
                                Log in
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
            <div className={s.authForm}>
                <span className={s.title}>
                    Sing up
                </span>
                <div className={s.FieldBox}>
                    <input placeholder={'Name'} className={s.textField} type="text"/>
                </div>
                <div className={s.FieldBox}>
                    <input placeholder={'Login'} className={s.textField} type="email"/>
                </div>
                {/*<PassField/>*/}
                {/*<PassField placeholder={'Confirm password'}/>*/}
                <div className={s.logInBtn}>
                    Sing up
                </div>
            </div>
        </div>
    );
};

