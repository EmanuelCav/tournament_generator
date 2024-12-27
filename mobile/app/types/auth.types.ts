import { ChangeEvent, Dispatch } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { StackNavigationDrawer } from "./props.types";

export type FormPropsType = {
    dispatch: Dispatch<any>;
    navigation: StackNavigationDrawer;
    setIsForgotPassword: (isForgotPassword: boolean) => void;
}

export type RegisterPropsType = {
    dispatch: Dispatch<any>;
    navigation: StackNavigationDrawer;
    setIsRegister: (isRegister: boolean) => void;
}

export type FormAuthPropsType = {
    dispatch: Dispatch<any>;
    navigation: StackNavigationDrawer;
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
}