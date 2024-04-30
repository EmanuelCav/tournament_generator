import { z } from 'zod'

export const createCategorySchema = z.object({
    category: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-ZñÑ\u00E0-\u00FC]+$/.test(value))
})
