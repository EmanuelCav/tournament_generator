import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom"

export type FormLoginPropsType = {
    dispatch?: Dispatch<any>;
    navigate: NavigateFunction;
}