import React, {useState} from 'react';
import {UseFormRegister, FieldValues} from "react-hook-form";
import type {ArrEl, Type } from './types';
import './index.css';

type InputProps = {
    props: ArrEl;
    type: Type;
    register: UseFormRegister<FieldValues>;
};

const Input = ({props: {required, label, defaultValue, id}, type, register}: InputProps) => {
    const [inputValue, setInputValue] = useState('');
    let inputType = '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value
        setInputValue(currentValue);
    }

    switch (type) {
        case ('inputText'):
            inputType = "text";
            break;
        case ('inputEmail'):
            inputType = "email";
            break;
        case ('inputPassword'):
            inputType = "password"
            break;
        default:
            inputType = "text"
            break;
    }

    const content =
        <input
            {...register(id)}
            type={inputType} 
            id={id} 
            value={inputValue} 
            placeholder={defaultValue} 
            required={required} 
            onChange={handleChange} 
            className="input"
        />

    return !label ? content : <label className="label">{content}{label}</label>;
}

export const UniversalRender = ({register, fieldsArray}: {register: UseFormRegister<FieldValues>, fieldsArray: ArrEl[]}) => {
    return <div className="container">
        {
            fieldsArray.map((el: ArrEl) => <Input props={el} type={el.type} register={register} key={el.id} />)
        }
    </div>
};
