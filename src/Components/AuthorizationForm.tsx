import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import type {ArrEl } from './types';
import './index.css';

import {UniversalRender} from './UniversalRender';

export const AuthorizationForm = ({fieldsArray}: {fieldsArray: ArrEl[]}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit: SubmitHandler<any> = (data) => console.log(data);
    const onError: SubmitHandler<any> = (errors) => console.log('errors', errors);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="card">
            <div>
                <h1>Авторизация</h1>
            </div>
            <UniversalRender register={register} fieldsArray={fieldsArray} />
            <input type="submit" className="submit" />
        </form>
    )
}