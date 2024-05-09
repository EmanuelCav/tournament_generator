import { Dispatch } from "react"

import { IUserInfo } from "../interface/User";

export type FormCreatePropsType = {
    dispatch: Dispatch<any>;
    user: IUserInfo;
    setIsCreate: (isCreate: boolean) => void;
}