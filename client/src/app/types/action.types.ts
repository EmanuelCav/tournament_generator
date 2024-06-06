import { NavigateFunction } from "react-router-dom";

import { ILogin, IRegister } from "../interface/User";
import { ICreatePlayer, ICreateTeam, ITeam } from "../interface/Event";

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
    navigate: NavigateFunction;
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

export type RemoveRefereeActionPropsType = {
    rid: string;
    cid: string;
    token: string;
    setIsRemoveReferee: (isRemoveReferee: boolean) => void;
}

export type UpdateRefereeActionPropsType = {
    rid: string;
    cid: string;
    token: string;
    refereeData: ICreateTeam;
    setIsEditReferee: (isEditReferee: boolean) => void;
}

export type CreatePlayerActionPropsType = {
    tid: string;
    cid: string;
    token: string;
    playerData: ICreatePlayer;
    handleAddPlayer: (team: ITeam) => void;
    team: ITeam;
}

export type RemovePlayerActionPropsType = {
    pid: string;
    cid: string;
    token: string;
    setIsRemovePlayer: (isRemovePlayer: boolean) => void;
}

export type UpdatePlayerActionPropsType = {
    pid: string;
    cid: string;
    token: string;
    playerData: ICreatePlayer;
    setIsEditPlayer: (isEditPlayer: boolean) => void;
}

export type GenerateMatchsActionPropsType = {
    id: string;
    token: string;
}