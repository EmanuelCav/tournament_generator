import { IReducerResponse } from "./Response";
import { IReducerTournament } from "./Tournament";
import { IReducerUser } from "./User";

export interface IReducer {
    user: IReducerUser;
    tournament: IReducerTournament;
    response: IReducerResponse;
}