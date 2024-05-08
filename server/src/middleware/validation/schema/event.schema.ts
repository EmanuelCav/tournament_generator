import { z } from 'zod'

export const createStatusSchema = z.object({
    status: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[A-Z]+$/.test(value), {
        message: "Only uppercase letters are allowed"
    })
})

export const createCategorySchema = z.object({
    category: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[A-Z]+$/.test(value), {
        message: "Only uppercase letters are allowed"
    })
})

export const createEventSchema = z.object({
    event: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z0-9_.\s]+$/.test(value), {
        message: "Special characters are not allowed. You can use numbers, letters, spaces, _ and ."
    }),
    description: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z0-9_.\s]+$/.test(value), {
        message: "Special characters are not allowed. You can use numbers, letters, spaces, _ and ."
    })
})