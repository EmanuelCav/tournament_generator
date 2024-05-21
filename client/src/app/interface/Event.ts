export interface IReducerEvent {
    events: IEvent[];
    event: IEvent;
}

export interface IEvent {
    _id?: string;
    event?: string;
    category?: ICategory;
    status?: IStatus;
    description?: string;
    teams?: ITeam[];
    createdAt?: string;
    updatedAt?: string;
}

export interface ICategory {
    _id: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}

export interface ITeam {
    _id: string;
    name: String;
    logo: string;
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