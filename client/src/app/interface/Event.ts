import { IUser } from "./User";

export interface IReducerEvent {
    events: IEvent[];
    event: IEvent;
}

export interface IEvent {
    _id?: string;
    event?: string;
    category?: ICategory;
    id?: string;
    status?: IStatus;
    description?: string;
    teams?: ITeam[];
    competitors: ICompetitor[];
    createdAt?: string;
    updatedAt?: string;
}

export interface ICategory {
    _id: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICompetitor {
    _id: string;
    role: string;
    event: IEvent;
    user: IUser;
    createdAt: string;
    updatedAt: string;
}

export interface IImage {
    _id: string;
    image: string;
    imageId: string;
    createdAt: string;
    updatedAt: string;
}

export interface ITeam {
    _id: string;
    name: string;
    logo: IImage;
    event: string;
    victory: Number;
    defeat: Number;
    draw: Number;
    points: Number;
    favor: Number;
    against: Number;
    created_at: string;
    updated_at: string;
}

export interface IStatus {
    _id: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICreateEvent {
    event: string;
    description: string;
    category: string;
    status: string;
}

export interface ICreateTeam {
    name: string;
}

export interface IReducerGet {
    isTeams: boolean;
    isMatchdays: boolean;
}