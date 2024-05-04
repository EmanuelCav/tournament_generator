import { NavigateFunction } from "react-router-dom";

import { ILogin } from "../interface/User";

export type LoginActionPropsType = {
    navigate: NavigateFunction;
    userData: ILogin;
}