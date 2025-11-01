import React from 'react';
import s from "../Auth.module.scss";
import {PassField} from "./PassField/PassField";
import {useAppDispatch} from "../../../hooks";
import {singInData, singUpData} from "../authTypes";
import {Formik, FormikErrors} from "formik";
import {fetchTokenAction} from "../authSaga";
import {FieldBox} from "./FieldBox";

export const SingUp = () => {

    const dispatch = useAppDispatch();
    const authData: singUpData = {login: "", password: "", name: '', passwordConfirm: ''};


    const validate = (values: singInData) => {
        const errors: FormikErrors<singUpData> = {};
        if (values.password.length <= 5) {
            errors.password = "Password must be at least 6 characters";
        }
        if (values.login.length <= 3) {
            errors.login = "Login must be at least 4 characters";
        }
        return errors;
    }

    return (
        <div className={s.authForm}>
            <Formik
                initialValues={authData}
                validate={validate}
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
                      submitForm
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <h4 className={s.title}>Sing up</h4>
                        <FieldBox isTouched={touched.name} error={errors.name}>
                            <input placeholder={'Name'}
                                   className={s.textField}
                                   type="text"
                                   name="name"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}
                            />
                        </FieldBox>
                        <FieldBox isTouched={touched.login} error={errors.login}>
                            <input placeholder={'Login'}
                                   className={s.textField}
                                   type="text"
                                   name="login"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.login}
                            />
                        </FieldBox>
                        <FieldBox isTouched={touched.password} error={errors.password}>
                            <PassField value={values.password} handleChange={handleChange} handleBlur={handleBlur}
                                       placeholder={'Password'}/>
                        </FieldBox>
                        <FieldBox isTouched={touched.passwordConfirm} error={errors.passwordConfirm}>
                            <PassField placeholder={'Confirm password'} handleChange={handleChange}
                                       handleBlur={handleBlur} value={values.password}/>
                        </FieldBox>
                        <div className={s.logInBtn} onClick={submitForm}>
                            Sing up
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

