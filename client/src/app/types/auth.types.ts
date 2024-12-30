import { ChangeEvent, Dispatch } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { NavigateFunction } from "react-router-dom"

export type FormPropsType = {
    dispatch: Dispatch<any>;
    navigate: NavigateFunction;
    setIsForgotPassword: (isForgotPassword: boolean) => void;
}

export type RegisterPropsType = {
    dispatch: Dispatch<any>;
    navigate: NavigateFunction;
    setIsRegister: (isRegister: boolean) => void;
}

export type FormAuthPropsType = {
    dispatch: Dispatch<any>;
    navigate: NavigateFunction;
    setIsRegister: (isRegister: boolean) => void;
    setIsForgotPassword: (isForgotPassword: boolean) => void;
}

export type PasswordInputPropsType = {
    view: boolean;
    register: UseFormRegister<any>;
    label: string;
    name: string;
    handleView: () => void;
    errors: FieldError | undefined;
}

export type TermsPropsType = {
    handleChecked: (e: ChangeEvent<HTMLInputElement>) => void;
    status: boolean;
}

export type ForgotPasswordPropsType = {
    setIsForgotPassword: (isForgotPassword: boolean) => void;
    dispatch: Dispatch<any>;
    setIsCode: (isCode: boolean) => void;
}