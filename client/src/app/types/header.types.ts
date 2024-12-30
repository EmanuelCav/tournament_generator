import { Dispatch } from "react";
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
}

export type ListDrawerPropsType = {
    text: string;
    func: () => void;
}