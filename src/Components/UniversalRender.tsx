import React, {useContext} from 'react';
import type {ArrEl, Type} from '../types';
import './index.css';

import {FormContext} from './FormContext';
import {RegisterOptions} from 'react-hook-form';

type InputProps = {
    props: ArrEl;
    type: Type;
};

const Input = ({props: {required, label, defaultValue, id}, type}: InputProps) => {
    const {register, errors} = useContext(FormContext);

    if (!register) throw new Error('register function was not provided');
    if (typeof errors === 'undefined') throw new Error('errors object was not provided');

    const emailPattern = /\S*@\S*\s?/;
    const passwordPattern = /[A-Za-z]{5}/;
    let inputType = '';
    let maxLength = 21;
    let pattern = null;

    switch (type) {
        case ('inputText'):
            inputType = "text";
            maxLength = 15
            break;
        case ('inputEmail'):
            inputType = "email";
            pattern = emailPattern
            break;
        case ('inputPassword'):
            inputType = "password"
            maxLength = 12
            pattern = passwordPattern
            break;
        default:
            inputType = "text"
            break;
    }

    const registerOptions: RegisterOptions = {
        required: {
            value: required || false,
            message: 'This field is Required',
        },
        maxLength: {
            value: maxLength,
            message: 'Max symbols exceeded'
        },
        pattern: {
            value: pattern || /.*/,
            message: pattern === emailPattern ? 'Bad email, please check your email' :'Password must be 5-12 symbols'
        },
        setValueAs: (v: any) => v || defaultValue
    };

    const content =
        <input
            autoComplete="new-password"
            {...register(id, registerOptions)}
            type={inputType}
            id={id}
            placeholder={defaultValue}
            className="input"
        />

    return <div className="inputContainer">
        {!label ? content : <label className="label">{content}{label}</label>}
        {errors[id] && <span className='errorText'>{String(errors[id]?.message)}</span>}
    </div>;
}

export const UniversalRender = ({fieldsArray}: {fieldsArray: ArrEl[]}) => {
    return <div className="container">
        {
            fieldsArray.map((el: ArrEl) => <Input props={el} type={el.type} key={el.id} />)
        }
    </div>
};
