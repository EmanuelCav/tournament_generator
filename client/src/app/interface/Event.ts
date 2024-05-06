export interface IReducerEvent {
    events: IEvent[];
    event: IEvent;
}

export interface IEvent {
    _id?: string;
    title?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}