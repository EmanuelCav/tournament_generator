import { object, ref, string } from "yup";

export const loginSchema = object().shape({
    email: string().trim().min(1, 'Email field is empty. Please complete'),
    password: string().trim().min(1, 'Password field is empty. Please complete')
})

export const registerSchema = object().shape({
    fullname: string().trim().min(3, {
        message: "Fullname field must has more than 2 characters"
    }).matches(/^([\w]{3,})+\s+([\w\s]{3,})+$/i, "Please try to use letters to complete your fullname"),
    nickname: string().trim().min(3, {
        message: "Nickname field must has more than 2 characters"
    }).matches(/^[a-zA-Z0-9_.\s]+$/, "Special characters are not allowed. You can use numbers, letters, spaces, _ and ."),
    email: string().trim().min(1, 'Email field is empty. Please complete').email("Email format is invalid"),
    password: string().min(6, 'Password must be at least 6 characters'),
    confirm: string().min(1, 'Email field is empty. Please complete').oneOf([ref('password')], 'Passwords do not match')
})