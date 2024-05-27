import { Dispatch } from "react";

import { IEvent, ITeam } from "../interface/Event";

export type EventNavigationPropsType = {
    Icon: any;
    func: () => void;
    text: string;
}

export type EventsNavigationPropsType = {
    dispatch: Dispatch<any>;
    event: IEvent;
    handleSure: () => void;
}

export type SurePropsType = {
    handleSure: () => void;
    func: () => void;
}

export type ShowTeamsPropsType = {
    event: IEvent;
    handleSure: (id: string) => void;
}

export type ShowTeamPropsType = {
    team: ITeam;
    handleSure: (id: string) => void;
}