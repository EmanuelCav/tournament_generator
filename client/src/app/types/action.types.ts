import { NavigateFunction } from "react-router-dom";

import { ICode, IForgotPassword, ILogin, IPassword, IRegister } from "../interface/User";
import { ICreatePlayer, ICreateStatistic, ICreateTeam, IMatch, IPlayerData, ISchedule, ITarget, ITeam } from "../interface/Event";

export type LoginActionPropsType = {
    navigate: NavigateFunction;
    userData: ILogin;
}

export type RegisterActionPropsType = {
    navigate: NavigateFunction;
    userData: IRegister;
    setIsRegister: (isRegister: boolean) => void;
}

export type LogoutActionPropsType = {
    setIsMenu: (isMenu: boolean) => void;
    navigate: NavigateFunction;
}

export type AutoLoginActionPropsType = {
    nickname: string;
    navigate: NavigateFunction;
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
    round: string;
    category: string;
    token: string;
    singleFinal: string;
}

export type JoinTeamActionPropsType = {
    id: string;
    token: string;
}

export type AddRefereeActionPropsType = {
    eid: string;
    match: IMatch;
    token: string;
    referee: string;
    handleAddReferee: (match: IMatch) => void;
}

export type AddCampusActionPropsType = {
    eid: string;
    match: IMatch;
    token: string;
    campus: string;
    handleUpdateCampus: (match: IMatch) => void;
}

export type AddScoreActionPropsType = {
    eid: string;
    match: IMatch;
    token: string;
    targetData: ITarget;
    category: string;
    setIsAddScore: (isScore: boolean) => void;
}

export type UpdateScheduleActionPropsType = {
    eid: string;
    match: IMatch;
    token: string;
    scheduleData: ISchedule;
    handleUpdateSchedule: (match: IMatch) => void;
}

export type RemoveCompetitorActionPropsType = {
    eid: string;
    cid: string;
    token: string;
    setIsRemoveCompetitor: (isRemoveCompetitor: boolean) => void;
}

export type RestartMatchActionPropsType = {
    id: string;
    token: string;
    handleRestartEvent: () => void;
}

export type UpdateRoleActionPropsType = {
    eid: string;
    cid: string;
    role: string;
    token: string;
    handleChangeRole: () => void;
}

export type UpdateEventActionPropsType = {
    id: string;
    token: string;
    formData: FormData;
}

export type CreateCampusActionPropsType = {
    id: string;
    token: string;
    campusData: ICreateTeam;
    handleAddCampus: () => void;
}

export type RemoveCampusActionPropsType = {
    id: string;
    cid: string;
    token: string;
    setIsRemoveCampus: (isRemoveCampus: boolean) => void;
}

export type UpdateCampusActionPropsType = {
    id: string;
    cid: string;
    token: string;
    campusData: ICreateTeam;
    setIsEditCampus: (isEditCampus: boolean) => void;
}

export type UpdatePlayerDataActionPropsType = {
    sid: string;
    cid: string;
    playerData: IPlayerData;
    token: string;
    handleClose: () => void;
}

export type CreateStatisticActionPropsType = {
    eid: string;
    cid: string;
    statisticData: ICreateStatistic;
    token: string;
    handleAddStatistics: () => void;
}

export type RemoveStatisticActionPropsType = {
    sid: string;
    cid: string;
    token: string;
    handleSure: () => void;
}

export type UpdateStatisticActionPropsType = {
    sid: string;
    cid: string;
    statisticData: ICreateStatistic;
    token: string;
    setIsEditStatistic: (isEditStatistic: boolean) => void;
}

export type ForgotPasswordActionPropsType = {
    emailData: IForgotPassword;
    setIsForgotPassword: (isForgotPassword: boolean) => void;
    setIsCode: (isCode: boolean) => void;
}

export type UpdatePasswordActionPropsType = {
    token: string;
    passwordData: IPassword;
    navigate: NavigateFunction;
}

export type UploadCodeActionPropsType = {
    token: string;
    codeData: ICode;
    navigate: NavigateFunction;
}