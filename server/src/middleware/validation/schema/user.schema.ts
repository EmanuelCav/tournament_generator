import { z } from 'zod'

export const createRoleSchema = z.object({
    role: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[A-Z]+$/.test(value), {
        message: "Format is not valid"
    })
})

export const createUserSchema = z.object({
    fullname: z.string().trim().min(3, {
        message: "Fullname field must has more than 2 characters"
    }).refine((value) => /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(value), {
        message: "Please try to complete a full name"
    }),
    nickname: z.string().trim().min(3, {
        message: "Nickname field must has more than 2 characters"
    }).refine((value) => /^[a-zA-Z0-9_.\sÀ-ÿ\u00f1\u00d1]+$/.test(value), {
        message: "Special characters are not allowed. You can use numbers, letters, spaces, _ and ."
    }),
    email: z.string().trim().email({
        message: "Email format is not valid"
    }).min(1, {
        message: "Email field is empty. Please Complete"
    }),
    password: z.string().trim().min(6, {
        message: "password field must has more than 5 characters"
    }),
    confirm: z.string().trim().min(1, {
        message: "Confirm password field is empty. Please Complete"
    }),
    role: z.string().trim().optional()
})

export const loginUserSchema = z.object({
    email: z.string().trim().min(1, {
        message: "There are empty fields. Please Complete"
    }).email({
        message: "Email format is not valid"
    }),
    password: z.string().trim().min(1, {
        message: "There are empty fields. Please Complete"
    })
})

export const createSubscriptionSchema = z.object({
    subscription: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[A-Z\s]+$/.test(value), {
        message: "Subscription only uppercase letters are allowed"
    }),
    price: z.number({
        message: "Price must be a number"
    }),
    hierarchy: z.number({
        message: "Price must be a number"
    }),
})

export const forgotPasswordSchema = z.object({
    email: z.string().email().trim().min(1, {
        message: "There are empty fields"
    })
})

export const updatePasswordSchema = z.object({
    password: z.string().trim().min(6, {
        message: "password field must has more than 5 characters"
    }),
    confirm: z.string().trim().min(1, {
        message: "Confirm password field is empty. Please Complete"
    }),
})