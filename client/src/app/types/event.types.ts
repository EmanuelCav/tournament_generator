import { Dispatch } from "react";

import { IEvent, IReducerGet, ITeam } from "../interface/Event";

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
}

export type ShowTeamsPropsType = {
    event: IEvent;
    handleSure: (team: ITeam) => void;
    handleAddTeam: () => void;
    handleEditTeam: (team: ITeam) => void;
}

export type ShowTeamPropsType = {
    team: ITeam;
    handleSure: (team: ITeam) => void;
    handleEditTeam: (team: ITeam) => void;
}

export type EditTeamPropsType = {
    dispatch: Dispatch<any>;
    team: ITeam;
    eid: string;
    setIsEditTeam: (isEditTeam: boolean) => void;
    token: string;
}