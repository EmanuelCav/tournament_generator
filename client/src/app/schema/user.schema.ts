import { object, string } from "yup";

export const loginSchema = object().shape({
    email: string().trim().min(1, 'Email field is empty. Please complete'),
    password: string().trim().min(1, 'Email field is empty. Please complete')
})