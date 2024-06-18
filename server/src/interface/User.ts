import { Types, Document } from 'mongoose'

export interface IUser extends Document {
    _id: Types.ObjectId;
    fullname: string;
    nickname: string;
    email: string;
    phone: string;
    role: Types.ObjectId;
    status: boolean;
    subscription: Types.ObjectId;
    password: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface ISubscription extends Document {
    _id: Types.ObjectId;
    subscription: string;
    descriptions: string[];
    price: number;
    hierarchy: number;
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