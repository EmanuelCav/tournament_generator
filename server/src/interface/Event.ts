import { Types, Document } from 'mongoose'

export interface IImage extends Document {
    _id: Types.ObjectId;
    image: String;
    imageId: String;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IEvent extends Document {
    _id: Types.ObjectId;
    event: String;
    description: String;
    image: Types.ObjectId;
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
    targetLocal: Number;
    visitant: Types.ObjectId;
    targetVisitant: Number;
    schedule: Date;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface ICategory extends Document {
    _id: Types.ObjectId;
    category: String;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface ITeam extends Document {
    _id: Types.ObjectId;
    name: String;
    event: Types.ObjectId;
    victory: Number;
    defeat: Number;
    draw: Number;
    points: Number;
    favor: Number;
    against: Number;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IStatus extends Document {
    _id: Types.ObjectId;
    status: String;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IComment extends Document {
    _id: Types.ObjectId;
    comment: String;
    created_at: NativeDate;
    updated_at: NativeDate;
}
