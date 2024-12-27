import { StackNavigationDrawer } from "./props.types";

export type CardPanelPropsType = {
    func: () => void;
    text: string;
    Icon: any;
}

export type CreatePanelPropsType = {
    navigation: StackNavigationDrawer;
    handleJoinEvent: () => void;
}