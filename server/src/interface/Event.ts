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
    admin: Types.ObjectId;
    users: Types.ObjectId[];
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface ICategory extends Document {
    _id: Types.ObjectId;
    category: String;
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
