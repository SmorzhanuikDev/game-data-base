import React from 'react';
import s from "./setting.module.scss";
import {Field, Form, Formik, FormikErrors, FormikHelpers} from "formik";
import {SettingErrorMessage} from "./SettingErrorMessage";
import {FieldBlock} from "./FieldBlock";

interface formData {
    name: string
}

export const ChangeName = () => {

    const formData: formData = {name: ''};

    const validate = (values: formData) => {
        const errors: FormikErrors<formData> = {};
        if (values.name && values.name.length < 4) {
            errors.name = 'Must be at least 4 characters long.';
        }
        return errors;
    };

    const submitForm = (values: formData, {setSubmitting}: FormikHelpers<formData>) => {
        console.log({values});
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }

    return (
        <Formik initialValues={formData} onSubmit={submitForm} validate={validate}>
            {({errors}) => (
                <Form>
                    <div className={s.profileBox}>
                        <span className={s.desc}>Change name</span>
                        <FieldBlock name='name' type='text' error={errors.name} isLoading={false}/>
                        <button className={s.profileButton} type='submit'>Change</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

