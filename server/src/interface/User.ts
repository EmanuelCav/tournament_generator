import { Types, Document } from 'mongoose'

export interface IUser extends Document {
    _id: Types.ObjectId;
    fullname: string;
    nickname: string;
    email: string;
    phone: string;
    role: Types.ObjectId;
    status: boolean;
    password: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IRole extends Document {
    _id: Types.ObjectId;
    role: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface ICompetitor extends Document {
    _id: Types.ObjectId;
    user: Types.ObjectId;
    event: Types.ObjectId;
    role: IRole;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IReferee extends Document {
    _id: Types.ObjectId;
    name: string;
    event: Types.ObjectId;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IPlayer extends Document {
    _id: Types.ObjectId;
    name: string;
    points: number;
    cards: number;
    serialCards: number;
    position: string;
    team: Types.ObjectId;
    created_at: NativeDate;
    updated_at: NativeDate;
}