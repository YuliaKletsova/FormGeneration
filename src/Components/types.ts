export type Type = 'inputText' | 'inputPassword' | 'inputEmail';

export type ArrEl = {
    id: string;
    type: Type;
    label?: string;
    defaultValue?: string;
    required?: boolean;
}
