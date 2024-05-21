import { Dispatch } from "react";

import { IEvent } from "../interface/Event";

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