import React from 'react';
import s from "../../Authorization/Auth.module.scss";
import {Formik, FormikErrors} from "formik";
import {fetchTokenAction} from "../../Authorization/authSaga";
import {Opportunities} from "../../Authorization/Components/Opportunities/Opportunities";
import {FieldBox} from "./FieldBox";
import {PassField} from "../../Authorization/Components/PassField/PassField";
import {singInData} from "../../Authorization/authTypes";
import {useAppDispatch} from "../../../hooks";

export const SingInForm = () => {

    const dispatch = useAppDispatch();
    const authData: singInData = {login: "", password: "",};


    const validate = (values: singInData) => {
        const errors: FormikErrors<singInData> = {};
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
                      isSubmitting,
                      submitForm
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.login}
                            />
                        </FieldBox>
                        <FieldBox isTouched={touched.password} error={errors.password}>
                            <PassField value={values.password} handleChange={handleChange} handleBlur={handleBlur}/>
                        </FieldBox>

                        <div className={s.logInBtn} onClick={submitForm}>
                            Log in
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

