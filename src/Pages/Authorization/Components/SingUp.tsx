import React from 'react';
import s from "../Auth.module.scss";
import {PassField} from "./PassField/PassField";
import {useAppDispatch} from "../../../hooks";
import {singUpFormData} from "../authTypes";
import {Formik, FormikErrors} from "formik";
import {createAccountAction, fetchTokenAction} from "../authSaga";
import {FieldBox} from "./FieldBox";
import {SubmitBtn} from "./SubmitBtn";
import {setError} from "../authSlice";

export const SingUp = () => {

    const dispatch = useAppDispatch();
    const authData: singUpFormData = {login: "", password: "", name: '', passwordConfirm: ''};


    const validate = (values: singUpFormData) => {
        const errors: FormikErrors<singUpFormData> = {};
        if (values.password.length <= 5) {
            errors.password = "Password must be at least 6 characters";
        }
        if (values.login.length <= 3) {
            errors.login = "Login must be at least 4 characters";
        }
        if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = "Passwords do not match";
            errors.password = "Passwords do not match";
        }
        if (values.name.length <= 3) {
            errors.name = "Name must be at least 4 characters";
        }
        return errors;
    }

    return (
        <div className={s.authForm}>
            <Formik
                initialValues={authData}
                validate={validate}
                onSubmit={(values, {setSubmitting}) => {
                    dispatch(createAccountAction(values))
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
                                   onChange={(e)=>{
                                       dispatch(setError(''))
                                       handleChange(e)
                                   }}
                                   onBlur={handleBlur}
                                   value={values.name}
                            />
                        </FieldBox>
                        <FieldBox isTouched={touched.login} error={errors.login}>
                            <input placeholder={'Login'}
                                   className={s.textField}
                                   type="text"
                                   name="login"
                                   onChange={(e)=>{
                                       dispatch(setError(''))
                                       handleChange(e)
                                   }}
                                   onBlur={handleBlur}
                                   value={values.login}
                            />
                        </FieldBox>
                        <FieldBox isTouched={touched.password} error={errors.password}>
                            <PassField value={values.password} handleChange={handleChange} handleBlur={handleBlur}
                                       placeholder={'Password'} fieldName={'password'}/>
                        </FieldBox>
                        <FieldBox isTouched={touched.passwordConfirm} error={errors.passwordConfirm}>
                            <PassField placeholder={'Confirm password'} handleChange={handleChange}
                                       handleBlur={handleBlur} value={values.passwordConfirm} fieldName={'passwordConfirm'}/>
                        </FieldBox>

                        <SubmitBtn submitForm={submitForm} text={'Sing up'} />

                    </form>
                )}
            </Formik>
        </div>
    );
};

