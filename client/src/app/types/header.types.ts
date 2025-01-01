import { Dispatch } from "react";
import { Location, NavigateFunction } from "react-router-dom";

import { IReducerUser } from "../interface/User";

export type ButtonNavPropsType = {
    text: string; 
    Icon: any; 
    redirect: (route: string) => void;
    route: string;
}

export type NavigationPropsType = {
    location: Location<any>;
    navigate: NavigateFunction;
    user: IReducerUser;
    dispatch: Dispatch<any>;
    setIsMenu: (isMenu: boolean) => void;
}

export type MenuHeaderPropsType = {
    dispatch: Dispatch<any>;
    navigate: NavigateFunction;
    setIsMenu: (isMenu: boolean) => void;
}

export type LogoPropsType = {
    location: Location<any>;
    isLoggedIn: boolean;
    navigate: NavigateFunction;
    token: string;
}

export type SolutionsMenuPropsType = {
    anchorEl: HTMLButtonElement | null;
    handleMenuClose: () => void;
    pathname: string; 
    navigate: NavigateFunction;
}

export type SolutionCategoryPropsType = {
    func: (id: string) => void;
    title: string;
    solutions: string[];
}

export type MenuDrawerPropsType = {
    isMenu: boolean;
    handleMenu: () => void;
    navigate: NavigateFunction;
    dispatch: Dispatch<any>;
    setIsMenu: (isMenu: boolean) => void;
    user: IReducerUser;
}

export type ListDrawerPropsType = {
    text: string;
    func: () => void;
}