import { Dispatch } from "react"
import { NavigateFunction } from "react-router-dom";

import { IUserInfo } from "../interface/User";
import { IEvent, ITeam } from "../interface/Event";

export type FormCreatePropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    navigate: NavigateFunction;
}

export type AddTeamsPropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    event: IEvent;
    navigate: NavigateFunction;
}

export type FormAddTeamPropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    handleAddTeam: () => void;
    event: IEvent;
}

export type TeamFromCreatePropsType = {
    team: ITeam;
    removeTeam: (id: string) => void;
}