import React, {useEffect} from 'react';
import s from './Auth.module.scss'
import {useBgImage} from "../../Surface/Content";
import profileBGImage from '../../Images/profileBGImage.jpg'
import {Opportunities} from "./Components/Opportunities/Opportunities";
import {PassField} from "./Components/PassField/PassField";
import {useAppDispatch} from "../../hooks";
import {fetchTokenAction} from "./authSaga";
import {Formik, FormikErrors} from 'formik';

interface authData {
    login: string;
    pass: string;
}


export const Auth = () => {

    const {sendImage} = useBgImage()
    const dispatch = useAppDispatch();
    const authData: authData = {login: "", pass: "",};


    useEffect(() => {
        sendImage(profileBGImage);
    }, [dispatch, sendImage]);

    const LogIn = () => {
        dispatch(fetchTokenAction('testUser', '324e2342'))
    }

    return (
        <div className={s.auth}>
            <div className={s.singUp}>
                <Formik
                    initialValues={authData}
                    validate={values => {
                        const errors = {};
                        if (!values.login) {
                            let errors: FormikErrors<authData> = {};
                            errors.login = 'Required';
                        }
                        if (!values.pass) {
                            let errors: FormikErrors<authData> = {};
                            errors.pass = 'Required';
                        }
                        console.log('dfdsf')
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        dispatch(fetchTokenAction(values.login, values.pass));
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
                          /* and other goodies */
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

                            <PassField value={values.pass} handleChange={handleChange} handleBlur={handleBlur} />

                            <button className={s.logInBtn} type="submit" >
                                Log in
                            </button>
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

