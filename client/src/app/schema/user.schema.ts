import { object, string } from "yup";

export const loginSchema = object().shape({
    email: string().trim().min(1, 'There are empty fields'),
    password: string().trim().min(1, 'There are empty fields')
})