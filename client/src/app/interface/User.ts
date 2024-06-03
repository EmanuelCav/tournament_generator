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
    nickname?: string;
    createdAt: string;
    updatedAt: string;
}

export interface ILogin {
    email?: string;
    password?: string;
}

export interface IRegister {
    fullname?: string;
    nickname?: string;
    email?: string;
    password?: string;
    confirm?: string;
}