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
    createdAt?: string;
    updatedAt?: string;
}

export interface ICategory {
    _id: string;
    category: string;
    createdAt: string;
    updatedAt: string;
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