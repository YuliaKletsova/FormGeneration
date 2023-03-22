import React, {useContext} from 'react';
import type {ArrEl, Type} from './types';
import './index.css';

import {FormContext} from './FormContext';

type InputProps = {
    props: ArrEl;
    type: Type;
};

const Input = ({props: {required, label, defaultValue, id}, type}: InputProps) => {
    // @ts-expect-error
    const {register, errors} = useContext(FormContext);
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
            pattern = /\S*@\S*\s?/
            break;
        case ('inputPassword'):
            inputType = "password"
            maxLength = 12
            pattern = /[A-Za-z]{5}/
            break;
        default:
            inputType = "text"
            break;
    }

    const registerOptions = {
        required: {
            value: required || false,
            message: 'This field is Required',
        },
        maxLength: {
            value: maxLength,
            message: 'Max symbols exceeded'
        },
        pattern: {
            value: pattern,
            message: 'Password must be 5-12 symbols'
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
        {errors[id] && <span className='errorText'>{errors[id].message}</span>}
    </div>;
}

export const UniversalRender = ({fieldsArray}: {fieldsArray: ArrEl[]}) => {
    return <div className="container">
        {
            fieldsArray.map((el: ArrEl) => <Input props={el} type={el.type} key={el.id} />)
        }
    </div>
};
