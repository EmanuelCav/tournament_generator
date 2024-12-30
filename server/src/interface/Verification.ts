export interface IVerification {
    id: string;
    iat: number;
    exp: number;
}

export interface IVerificationForgotPassword {
    id: string;
    code: string
    iat: number;
    exp: number;
}