import { IReducerResponse } from "./Response";
import { IReducerEvent } from "./Event";
import { IReducerUser } from "./User";

export interface IReducer {
    user: IReducerUser;
    event: IReducerEvent;
    response: IReducerResponse;
}