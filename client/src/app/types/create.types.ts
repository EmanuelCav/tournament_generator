import { Dispatch } from "react"

import { IUserInfo } from "../interface/User";
import { IEvent } from "../interface/Event";

export type FormCreatePropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    setIsCreate: (isCreate: boolean) => void;
}

export type AddTeamsPropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    event: IEvent;
}

export type FormAddTeamPropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    handleAddTeam: () => void;
    event: IEvent;
}