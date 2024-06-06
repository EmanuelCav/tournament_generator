import { Dispatch } from "react";

import { IEvent, IPlayer, IReducerGet, IReferee, ITeam } from "../interface/Event";
import { IUserInfo } from "../interface/User";

export type EventNavigationPropsType = {
    Icon: any;
    func: () => void;
    text: string;
    isHere: boolean;
}

export type EventsNavigationPropsType = {
    dispatch: Dispatch<any>;
    handleSure: () => void;
    get: IReducerGet;
}

export type SurePropsType = {
    handleSure: () => void;
    func: () => void;
    text: string;
}

export type ShowTeamsPropsType = {
    event: IEvent;
    handleSure: (team: ITeam) => void;
    handleAddTeam: () => void;
    handleEditTeam: (team: ITeam) => void;
    handleAddPlayer: (team: ITeam) => void;
    handleSurePlayer: (player: IPlayer) => void;
    handleEditPlayer: (player: IPlayer) => void;
}

export type ShowTeamPropsType = {
    team: ITeam;
    handleSure: (team: ITeam) => void;
    handleEditTeam: (team: ITeam) => void;
    handleAddPlayer: (team: ITeam) => void;
    isShowPlayers?: boolean;
    handleSurePlayer?: (player: IPlayer) => void;
    handleEditPlayer?: (player: IPlayer) => void;
}

export type EditTeamPropsType = {
    dispatch: Dispatch<any>;
    team: ITeam;
    eid: string;
    setIsEditTeam: (isEditTeam: boolean) => void;
    token: string;
}

export type ShowRefereesPropsType = {
    handleAddReferee: () => void;
    referees: IReferee[]
    handleSure: (referee: IReferee) => void;
    handleEditReferee: (referee: IReferee) => void;
}

export type FormAddRefereePropsType = {
    handleAddReferee: () => void;
    dispatch: Dispatch<any>;
    user: IUserInfo;
    event: IEvent;
    isEdit: boolean;
    refereeInfo: IReferee;
    setIsEditReferee: (isEditReferee: boolean) => void;
}

export type RefereePropsType = {
    referee: IReferee;
    handleSure: (referee: IReferee) => void;
    handleEditReferee: (referee: IReferee) => void;
}

export type FormAddPlayerPropsType = {
    handleAddPlayer: (team: ITeam) => void;
    dispatch: Dispatch<any>;
    user: IUserInfo;
    event: IEvent;
    isEdit: boolean;
    setIsEditPlayer: (isEditPlayer: boolean) => void;
    team: ITeam;
    player: IPlayer;
}

export type PlayerPropsType = {
    player: IPlayer;
    handleSurePlayer: (player: IPlayer) => void;
    handleEditPlayer: (player: IPlayer) => void;
}

export type ShowEventPropsType = {
    dispatch: Dispatch<any>;
    event: IEvent;
    user: IUserInfo;
}

export type GeneratePropsType = {
    generateNow: () => void;
    disabled: boolean;
}