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
    nickname: string;
    role: IRole;
    createdAt: string;
    updatedAt: string;
}

export interface IRole {
    _id: string;
    role: string;
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

export interface ISubscription {
    _id: string;
    subscription: string;
    descriptions: string[];
    price: number;
    hierarchy: number;
    created_at: string;
    updated_at: string;
}

export interface IForgotPassword {
    email: string;
}

export interface IPassword {
    password: string;
    confirm: string;
}