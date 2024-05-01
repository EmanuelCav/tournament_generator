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