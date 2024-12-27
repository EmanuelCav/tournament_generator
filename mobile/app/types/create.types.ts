import { Dispatch } from "react"

import { IUserInfo } from "../interface/User";
import { IEvent, ITeam } from "../interface/Event";
import { StackNavigationDrawer } from "./props.types";

export type FormCreatePropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    navigation: StackNavigationDrawer;
}

export type AddTeamsPropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    event: IEvent;
    navigation: StackNavigationDrawer;
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