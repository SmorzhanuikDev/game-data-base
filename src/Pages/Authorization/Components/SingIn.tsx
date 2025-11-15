import React from 'react';
import s from "../Auth.module.scss";
import {Formik, FormikErrors} from "formik";
import {fetchTokenAction} from "../authSaga";
import {Opportunities} from "./Opportunities/Opportunities";
import {FieldBox} from "./FieldBox";
import {PassField} from "./PassField/PassField";
import {singInFormData} from "../authTypes";
import {useAppDispatch} from "../../../hooks";
import {SubmitBtn} from "./SubmitBtn";
import {setError} from "../authSlice";


export const SingIn = () => {

    const dispatch = useAppDispatch();
    const authData: singInFormData = {login: "testUser", password: "324e2342",};

    const validate = (values: singInFormData) => {
        const errors: FormikErrors<singInFormData> = {};
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
                onSubmit={async (values, {setSubmitting}) => {
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
                      submitForm,
                      isSubmitting
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Opportunities/>
                        <h4 className={s.title}>Sing in</h4>
                        <FieldBox isTouched={touched.login} error={errors.login}>
                            <input
                                type="text"
                                className={s.textField}
                                placeholder={'Login'}
                                name="login"
                                onChange={(e) => {
                                    dispatch(setError(''))
                                    handleChange(e)
                                }}
                                onBlur={handleBlur}
                                value={values.login}
                            />
                        </FieldBox>
                        <FieldBox isTouched={touched.password} error={errors.password}>
                            <PassField value={values.password} handleChange={handleChange}
                                       handleBlur={handleBlur} fieldName={'password'} placeholder={'Password'}/>
                        </FieldBox>
                        <SubmitBtn submitForm={submitForm} text={'Sing in'}/>
                    </form>
                )}
            </Formik>
        </div>
    );
};

