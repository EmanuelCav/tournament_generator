import { ChangeEvent, Dispatch } from "react";
import { UseFormRegister } from "react-hook-form";
import { NavigateFunction } from "react-router-dom"

export type FormLoginPropsType = {
    dispatch: Dispatch<any>;
    navigate: NavigateFunction;
}

export type FormAuthPropsType = {
    dispatch: Dispatch<any>;
    navigate: NavigateFunction;
    setIsRegister: (isRegister: boolean) => void;
}

export type PasswordInputPropsType = {
    view: boolean;
    register: UseFormRegister<any>;
    label: string;
    name: string;
    handleView: () => void;
}

export type TermsPropsType = {
    handleChecked: (e: ChangeEvent<HTMLInputElement>) => void;
    status: boolean;
}