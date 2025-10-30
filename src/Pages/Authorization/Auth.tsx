import React, {useEffect} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import {Opportunities} from "./Components/Opportunities/Opportunities";
import {PassField} from "./Components/PassField/PassField";
import {useAppDispatch} from "../../hooks";
import {fetchTokenAction} from "./authSaga";
import {Formik} from 'formik';
import {singInData} from "./authTypes";


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
            <div className={s.singUp}>
                <span className={s.title}>
                    Sing in
                </span>
                <Formik
                    initialValues={authData}
                    validate={values => {
                        const errors = {};

                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            dispatch(fetchTokenAction(values))
                            setSubmitting(false);
                        }, 400);
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
                            <input
                                type="text"
                                className={s.textField}
                                placeholder={'Login'}
                                name="login"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.login}
                            />
                            <PassField value={values.password} handleChange={handleChange} handleBlur={handleBlur}/>

                            <div className={s.logInBtn} onClick={submitForm}>
                                Log in
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
            <div className={s.singUp}>
                <span className={s.title}>
                    Sing up
                </span>
                <input placeholder={'Name'} className={s.textField} type="text"/>
                <input placeholder={'Login'} className={s.textField} type="email"/>
                {/*<PassField/>*/}
                {/*<PassField placeholder={'Confirm password'}/>*/}
                <div className={s.logInBtn}>
                    Sing up
                </div>
            </div>
        </div>
    );
};

