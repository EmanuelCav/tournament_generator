import { NavigateFunction } from "react-router-dom";

export type CardPanelPropsType = {
    func: () => void;
    text: string;
    Icon: any;
}

export type CreatePanelPropsType = {
    navigate: NavigateFunction;
    handleJoinEvent: () => void;
}