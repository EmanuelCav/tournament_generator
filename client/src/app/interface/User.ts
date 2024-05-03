export interface IReducerUser {
    isLoggedIn: boolean;
    user: IUserInfo,
}

export interface IUserInfo {
    user?: IUser;
    token?: string;
}

export interface IUser {
    _id: string;
    createdAt: string;
    updatedAt: string;
}