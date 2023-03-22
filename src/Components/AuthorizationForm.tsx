import React from 'react';
import {useForm, SubmitHandler, SubmitErrorHandler} from "react-hook-form";
import type {ArrEl } from './types';
import './index.css';

import {FormContext} from './FormContext';
import {UniversalRender} from './UniversalRender';

export const AuthorizationForm = ({fieldsArray}: {fieldsArray: ArrEl[]}) => {
    const {register, handleSubmit, formState: {errors}, trigger, clearErrors} = useForm();
    const disabled = Object.keys(errors).length !== 0
    const onSubmit: SubmitHandler<any> = (data) => console.log(data);
    const onError: SubmitErrorHandler<any> = (data: any) => console.log('error ', data);
    console.log(errors)
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="card">
            <div>
                <h1>Авторизация</h1>
            </div>
            <FormContext.Provider value={{errors, register, trigger, clearErrors}}>
                <UniversalRender fieldsArray={fieldsArray} />
            </FormContext.Provider>
            <input type="submit" className="submit" disabled={disabled} />
        </form>
    )
}