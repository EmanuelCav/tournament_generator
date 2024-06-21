import { Dispatch } from "react";

import { ICampus, ICompetitor, IEvent, IMatch, IPlayer, IReducerGet, IReferee, ITeam } from "../interface/Event";
import { IUser, IUserInfo } from "../interface/User";

export type EventNavigationPropsType = {
    Icon: any;
    func: () => void;
    text: string;
    isHere: boolean;
}

export type EventsNavigationPropsType = {
    dispatch: Dispatch<any>;
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
    handleSureQuitFan: (team: ITeam) => void;
    handleEditPlayerData: (player: IPlayer) => void;
    handleEditPlayer: (player: IPlayer) => void;
    joinTeam: (id: string) => void;
    user: IUser;
}

export type ShowTeamPropsType = {
    team: ITeam;
    handleSure: (team: ITeam) => void;
    handleEditTeam: (team: ITeam) => void;
    handleAddPlayer: (team: ITeam) => void;
    isShowPlayers: boolean;
    handleSurePlayer: (player: IPlayer) => void;
    handleEditPlayer: (player: IPlayer) => void;
    handleSureQuitFan: (team: ITeam) => void;
    handleEditPlayerData: (player: IPlayer) => void;
    user: IUser;
    event: IEvent;
    joinTeam: (id: string) => void;
    isJoined: boolean;
    isShowFans: boolean;
}

export type ActionsTeamPropsType = {
    team: ITeam;
    handleSure: (team: ITeam) => void;
    handleEditTeam: (team: ITeam) => void;
    handleAddPlayer: (team: ITeam) => void;
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

export type FormAddCampusPropsType = {
    handleAddCampus: () => void;
    dispatch: Dispatch<any>;
    user: IUserInfo;
    event: IEvent;
    isEdit: boolean;
    campusInfo: IReferee;
    setIsEditCampus: (isEditCampus: boolean) => void;
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
    handleEditPlayerData: (player: IPlayer) => void;
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
    event: IEvent;
}

export type MatchsPropsType = {
    handleAddReferee: (match: IMatch) => void;
    event: IEvent;
    handleAddScore: (match: IMatch) => void;
    handleUpdateSchedule: (match: IMatch) => void;
    handleUpdateCampus: (match: IMatch) => void;
    isAdmin: boolean;
}

export type AddRefereePropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    handleAddReferee: (match: IMatch) => void;
    event: IEvent;
    matchData: IMatch;
}

export type AddScorePropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    setIsAddScore: (isAddScore: boolean) => void;
    event: IEvent;
    matchData: IMatch;
}

export type UpdateSchedulePropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    event: IEvent;
    matchData: IMatch;
    handleUpdateSchedule: (match: IMatch) => void;
}

export type ShowPeoplePropsType = {
    competitors: ICompetitor[];
    handleSureRemoveCompetitor: (competitor: ICompetitor) => void;
    user: IUserInfo;
    event: IEvent;
    dispatch: Dispatch<any>;
}

export type PeoplePropsType = {
    competitor: ICompetitor;
    handleSureRemoveCompetitor: (competitor: ICompetitor) => void;
    user: IUserInfo;
    event: IEvent;
    dispatch: Dispatch<any>;
}

export type ActionsPeoplePropsType = {
    competitor: ICompetitor;
    handleSureRemoveCompetitor: (competitor: ICompetitor) => void;
    user: IUserInfo;
    event: IEvent;
    handleChangeRole: () => void;
}

export type ChangeRolePropsType = {
    competitor: ICompetitor;
    handleChangeRole: () => void;
    func: () => void;
}

export type SettingsPropsType = {
    user: IUserInfo;
    dispatch: Dispatch<any>;
    eventInfo: IEvent;
    handleSure: () => void;
}

export type DangerActionPropsType = {
    text: string;
    button: string;
    func: () => void;
}

export type RestartEventPropsType = {
    func: () => void;
    handleRestartEvent: () => void;
}

export type ShowCampusPropsType = {
    handleAddCampus: () => void;
    event: IEvent;
    handleSure: (campus: ICampus) => void;
    handleEditCampus: (campus: ICampus) => void;
    user: IUser;
}

export type CampusPropsType = {
    campus: ICampus;
    handleSure: (campus: ICampus) => void;
    handleEditCampus: (campus: ICampus) => void;
    isAvailableEdit?: boolean;
}

export type FanPropsType = {
    fan: ICompetitor;
    team: ITeam;
    handleSureQuitFan: (team: ITeam) => void;
    isAvailableEdit: boolean;
}

export type AddCampusPropsType = {
    handleUpdateCampus: (match: IMatch) => void;
    dispatch: Dispatch<any>;
    user: IUserInfo;
    event: IEvent;
    matchData: IMatch;
}

export type FormEditPlayerDataPropsType = {
    user: IUserInfo;
    event: IEvent;
    dispatch: Dispatch<any>;
    playerInfo: IPlayer;
    setIsEditPlayerData: (isEditPlayerData: boolean) => void;
}

export type PositionsPropsType = {
    dispatch: Dispatch<any>;
    teams: ITeam[];
    event: IEvent;
    user: IUserInfo;
}

export type PlayersPropsType = {
    players: IPlayer[];
    dispatch: Dispatch<any>;
    event: IEvent;
    user: IUserInfo;
}

export type ChatEventPropsType = {
    user: IUserInfo;
    event: IEvent;
    dispatch: Dispatch<any>;
}

export type SendMessagesPropsType = {
    event: IEvent;
    user: IUserInfo;
    dispatch: Dispatch<any>;
}