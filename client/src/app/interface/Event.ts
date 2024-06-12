import { IRole, IUser } from "./User";

export interface IReducerEvent {
    events: IEvent[];
    event: IEvent;
}

export interface IReducerStatistic {
    teams: ITeam[];
    players: IPlayer[];
}

export interface IEvent {
    _id?: string;
    event?: string;
    category?: ICategory;
    done?: boolean;
    id?: string;
    status?: IStatus;
    description?: string;
    admin?: string;
    teams?: ITeam[];
    image?: IImage;
    competitors?: ICompetitor[];
    matchs?: IMatch[][];
    referees?: IReferee[];
    createdAt?: string;
    updatedAt?: string;
}

export interface IReferee {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface IPlayer {
    _id: string;
    name: string;
    position: string;
    points: number;
    cards: number;
    serialCards: number;
    team: ITeam;
    createdAt: string;
    updatedAt: string;
}

export interface ICategory {
    _id: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}

export interface IMatch {
    _id: string;
    local: ITeamMatch;
    targetLocal?: number;
    visitant: ITeamMatch;
    targetVisitant?: number;
    referee?: string;
    schedule?: string;
}

interface ITeamMatch {
    logo: string;
    name: string;
}

export interface ICompetitor {
    _id: string;
    role: IRole;
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
    victory: number;
    defeat: number;
    draw: number;
    points: number;
    favor: number;
    against: number;
    players: IPlayer[];
    matchs: IMatch[][];
    competitors: ICompetitor[];
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
    isPositions: boolean;
    isMatchdays: boolean;
    isPeople: boolean;
    isReferees: boolean;
    isPlayers: boolean;
    isSettings: boolean;
}

export interface ICreatePlayer {
    name: string;
    position: string;
}

export interface ITarget {
    targetLocal: number;
    targetVisitant: number;
}

export interface ISchedule {
    schedule: string;
    day: string;
}
