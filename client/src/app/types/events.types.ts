import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom"

import { IEvent } from "../interface/Event";
import { IUserInfo } from "../interface/User";

export type PublicEventsPropsType = {
    events: IEvent[];
    navigate: NavigateFunction;
    text: string;
    dispatch: Dispatch<any>;
    user: IUserInfo;
}

export type PublicEventPropsType = {
    event: IEvent;
    navigate: NavigateFunction;
    dispatch: Dispatch<any>;
    text: string;
    user: IUserInfo;
}

export type FormEventPropsType = {
    navigate: NavigateFunction;
    dispatch: Dispatch<any>;
    user: IUserInfo;
}