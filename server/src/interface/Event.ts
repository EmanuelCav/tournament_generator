import { Types, Document } from 'mongoose'

export interface IImage extends Document {
    _id: Types.ObjectId;
    image: string;
    imageId: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IEvent extends Document {
    _id: Types.ObjectId;
    event: string;
    description: string;
    id: string;
    image: IImage;
    category: Types.ObjectId;
    status: Types.ObjectId;
    admin: Types.ObjectId;
    competitors: Types.ObjectId[];
    teams: Types.ObjectId[];
    matchs: Types.ObjectId[];
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IMatch extends Document {
    _id: Types.ObjectId;
    local: Types.ObjectId;
    targetLocal: number;
    visitant: Types.ObjectId;
    targetVisitant: number;
    schedule: Date;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface ICategory extends Document {
    _id: Types.ObjectId;
    category: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface ITeam extends Document {
    _id: Types.ObjectId;
    name: string;
    logo: Types.ObjectId;
    event: Types.ObjectId;
    victory: number;
    defeat: number;
    draw: number;
    points: number;
    favor: number;
    against: number;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IStatus extends Document {
    _id: Types.ObjectId;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IComment extends Document {
    _id: Types.ObjectId;
    comment: string;
    created_at: NativeDate;
    updated_at: NativeDate;
}
