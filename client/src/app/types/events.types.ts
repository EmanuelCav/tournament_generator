import { NavigateFunction } from "react-router-dom"

import { IEvent } from "../interface/Event";

export type PublicEventsPropsType = {
    events: IEvent[];
    navigate: NavigateFunction;
    text: string;
}

export type PublicEventPropsType = {
    event: IEvent;
    navigate: NavigateFunction;
    text: string;
}