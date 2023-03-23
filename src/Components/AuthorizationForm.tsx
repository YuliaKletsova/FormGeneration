import React from 'react';
import {useForm, SubmitHandler, SubmitErrorHandler} from "react-hook-form";
import type {ArrEl} from '../types';
import './index.css';

import {FormContext} from './FormContext';
import {UniversalRender} from './UniversalRender';

export const AuthorizationForm = ({fieldsArray}: {fieldsArray: ArrEl[]}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const disabled = Object.keys(errors).length !== 0
    // small hack to show only neeeded form fields
    const currentIds = fieldsArray.map(el => el.id);
    const result: Record<string,string> = {};
    const onSubmit: SubmitHandler<Record<string,string>> = data => {
        Object.keys(data).forEach(key => {if (currentIds.includes(key)) result[key] = data[key]})

        console.log(result);
    }
    const onError: SubmitErrorHandler<Record<string,string>> = data => console.log('error ', data)

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="card">
            <div>
                <h1>Авторизация</h1>
            </div>
            {fieldsArray.length ? (
                <FormContext.Provider value={{errors, register}}>
                    <UniversalRender fieldsArray={fieldsArray} />
                </FormContext.Provider>
                ) : <div className="errorText">Can't parse you array, check errors and try again</div>}
            <input type="submit" className="submit" disabled={disabled} />
        </form>
    )
}