declare namespace Express {
    export interface Request {
        user: string;
        permission: string | undefined;
    }
}