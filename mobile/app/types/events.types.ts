import { Dispatch } from "react";

import { IEvent } from "../interface/Event";
import { IUserInfo } from "../interface/User";
import { StackNavigationDrawer } from "./props.types";

export type PublicEventsPropsType = {
    events: IEvent[];
    navigation: StackNavigationDrawer;
    text: string;
    dispatch: Dispatch<any>;
    user: IUserInfo;
}

export type PublicEventPropsType = {
    event: IEvent;
    navigation: StackNavigationDrawer;
    dispatch: Dispatch<any>;
    text: string;
    user: IUserInfo;
}

export type FormEventPropsType = {
    navigation: StackNavigationDrawer;
    dispatch: Dispatch<any>;
    user: IUserInfo;
}