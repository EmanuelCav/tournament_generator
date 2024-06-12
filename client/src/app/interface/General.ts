import { IReducerResponse } from "./Response";
import { IReducerEvent, IReducerGet, IReducerStatistic } from "./Event";
import { IReducerUser } from "./User";

export interface IReducer {
    user: IReducerUser;
    event: IReducerEvent;
    response: IReducerResponse;
    get: IReducerGet;
    statistic: IReducerStatistic;
}