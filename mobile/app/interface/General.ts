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

export interface ITournament {
    title: string;
    description: string;
    Icon: any;
}

export interface IDetail {
    title: string;
    description: string;
    Icon: any;
    color: string;
}

export interface INavigation {
    title: string;
    path: string;
}