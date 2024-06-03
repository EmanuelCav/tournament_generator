import { NavigateFunction } from "react-router-dom";

import { ILogin, IRegister } from "../interface/User";
import { ICreateTeam } from "../interface/Event";

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

export type RemoveEventActionPropsType = {
    id: string;
    token: string;
    navigate: NavigateFunction;
}

export type RemoveTeamActionPropsType = {
    tid: string;
    eid: string;
    token: string;
    setIsRemoveTeam?: (isRemoveTeam: boolean) => void;
}

export type UpdateTeamActionPropsType = {
    tid: string;
    eid: string;
    token: string;
    teamData: FormData;
    setIsEditTeam: (isEditTeam: boolean) => void;
}

export type JoinEventActionPropsType = {
    id: string;
    token: string;
    navigate: NavigateFunction;
}

export type CreateRefereeActionPropsType = {
    id: string;
    token: string;
    refereeData: ICreateTeam;
    handleAddReferee: () => void;
}