import { Location, NavigateFunction } from "react-router-dom";

export type ButtonNavPropsType = {
    text: string; 
    Icon: any; 
    redirect: (route: string) => void;
    route: string;
}

export type NavigationPropsType = {
    location: Location<any>;
    navigate: NavigateFunction;
    isLoggedIn: boolean;
}