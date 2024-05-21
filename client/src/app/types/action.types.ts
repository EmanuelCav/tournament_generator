import { NavigateFunction } from "react-router-dom";

import { ILogin, IRegister } from "../interface/User";

export type LoginActionPropsType = {
    navigate: NavigateFunction;
    userData: ILogin;
}

export type RegisterActionPropsType = {
    navigate: NavigateFunction;
    userData: IRegister;
    setIsRegister: (isRegister: boolean) => void;
}

export type EventActionPropsType = {
    token: string;
    id: string;
}

export type CreateEventActionPropsType = {
    formData: FormData;
    token: string;
    setIsCreate: (isCreate: boolean) => void;
}

export type CreateTeamActionPropsType = {
    formData: FormData;
    id: string;
    token: string;
    handleAddTeam: () => void;
}