import {TYPE} from "./constants";

export type Type = keyof typeof TYPE;

export type ArrEl = {
    id: string;
    type: Type;
    label?: string;
    defaultValue?: string;
    required?: boolean;
}
