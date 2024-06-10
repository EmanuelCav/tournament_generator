import { Dispatch } from "react";

import { IEvent, IMatch, IPlayer, IReducerGet, IReferee, ITeam } from "../interface/Event";
import { IUser, IUserInfo } from "../interface/User";

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
    event: IEvent;
    user: IUser;
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
    joinTeam: (id: string) => void;
    user: IUser;
}

export type ShowTeamPropsType = {
    team: ITeam;
    handleSure: (team: ITeam) => void;
    handleEditTeam: (team: ITeam) => void;
    handleAddPlayer: (team: ITeam) => void;
    isShowPlayers?: boolean;
    handleSurePlayer?: (player: IPlayer) => void;
    handleEditPlayer?: (player: IPlayer) => void;
    user: IUser;
    event: IEvent;
    joinTeam: (id: string) => void;
    isJoined: boolean;
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
    event: IEvent;
    handleSure: (referee: IReferee) => void;
    handleEditReferee: (referee: IReferee) => void;
    user: IUser;
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
    isAvailableEdit?: boolean;
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
    isAvailableEdit?: boolean;
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

export type MatchsPropsType = {
    handleAddReferee: (match: IMatch) => void;
    matchs: IMatch[][];
}

export type AddRefereePropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    handleAddReferee: (match: IMatch) => void;
    event: IEvent;
    matchData: IMatch;
}