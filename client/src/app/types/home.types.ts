import { INavigation } from "../interface/General";

export type CategoryTextPropsType = {
    text: string;
    description: string;
}

export type CardInfoPropsType = {
    text: string,
    Icon: any;
}

export type NavigationFooterPropsType = {
    navigation: INavigation[];
    title: string;
}