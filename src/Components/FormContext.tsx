import React from "react";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";


export type ReactContextType = {
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors<FieldValues>;
}

export const FormContext = React.createContext<ReactContextType>({});
