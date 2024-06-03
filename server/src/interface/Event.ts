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
    referees: Types.ObjectId[];
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
    referee: Types.ObjectId;
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
    logo: IImage;
    event: Types.ObjectId;
    victory: number;
    defeat: number;
    draw: number;
    points: number;
    favor: number;
    against: number;
    status: boolean;
    players: Types.ObjectId[];
    competitors: Types.ObjectId[];
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
