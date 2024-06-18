import { Types, Document } from 'mongoose'
import { ICompetitor} from './User';

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
    competitors: ICompetitor[];
    referees: Types.ObjectId[];
    teams: ITeam[];
    campus: Types.ObjectId[];
    matchs: IMatch[][];
    done: boolean;
    isRoundTrip: boolean;
    group: IGroup; 
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IGroup {
    qualifiers: number;
    amount: number;
}

export interface IMatch {
    _id?: Types.ObjectId;
    local: ITeamMatch;
    targetLocal?: number | null;
    visitant: ITeamMatch;
    isMatchTrip: boolean;
    targetVisitant?: number | null;
    referee?: string;
    campus?: string;
    schedule?: Date;
}

interface ITeamMatch {
    logo: string;
    name: string;
}

export interface ICategory extends Document {
    _id: Types.ObjectId;
    category: string;
    subscription: Types.ObjectId;
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
    assists: number;
    cards: number;
    serialCards: number;
    position: string;
    team: Types.ObjectId;
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
    players: IPlayer[];
    competitors: Types.ObjectId[];
    campus: Types.ObjectId;
    pot: number;
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

export interface ICampus extends Document {
    _id: Types.ObjectId;
    name: string;
    event: Types.ObjectId;
    created_at: NativeDate;
    updated_at: NativeDate;
}