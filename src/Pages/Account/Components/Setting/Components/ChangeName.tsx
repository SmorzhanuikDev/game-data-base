import React, {useEffect} from 'react';
import s from "../setting.module.scss";
import {Form, Formik, FormikErrors, FormikHelpers} from "formik";
import {SettingErrorMessage} from "./SettingErrorMessage";
import {FieldBlock} from "./FieldBlock";
import {ButtonLoader} from "../../../../../Common/Components/ButtonLoader/ButtonLoader";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import {accountAction} from "../../../AccountSaga";
import {setNameRes} from "../../../AccountSlice";

interface formData {
    name: string
}

export const ChangeName = () => {

    const formData: formData = {name: ''};
    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useAppDispatch();
    const changeNameRes = useAppSelector(state => state.accountData.nameRes);

    const validate = (values: formData) => {
        const errors: FormikErrors<formData> = {};
        if (!values.name) {
            errors.name = 'Name is required.';
        }
        if (values.name && values.name.length < 4) {
            errors.name = 'Must be at least 4 characters long.';
        }
        return errors;
    };

    const submitForm = (values: formData, {setSubmitting, resetForm}: FormikHelpers<formData>) => {
        setIsLoading(true)
        dispatch(accountAction.changeName(values.name));
        resetForm()
        setSubmitting(false);
    }

    useEffect(() => {
        if (changeNameRes.message) {
            setIsLoading(false);
            setTimeout(
                () => dispatch(setNameRes({success: false, message: '', newName: ''})),
                10000)
        }
    }, [changeNameRes, dispatch]);

    return (
        <Formik initialValues={formData} onSubmit={submitForm} validate={validate}>
            {({errors}) => (
                <Form>
                    <div className={s.profileBox}>
                        <span className={s.desc}>Change name</span>
                        <FieldBlock name='name' type='text' error={errors.name} isLoading={isLoading}/>
                        <SettingErrorMessage error={changeNameRes.message}>
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

