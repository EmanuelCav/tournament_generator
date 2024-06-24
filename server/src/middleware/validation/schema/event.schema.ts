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
    }).refine((value) => /^[A-Z\s]+$/.test(value), {
        message: "Only uppercase letters are allowed"
    }),
    subscription: z.string().trim().min(1, {
        message: "There are empty fields"
    })
})

export const createEventSchema = z.object({
    event: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z0-9_.\sÀ-ÿ\u00f1\u00d1]+$/.test(value), {
        message: "Special characters are not allowed. You can use numbers, letters, spaces, _ and ."
    }),
    description: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z0-9_.,\sÀ-ÿ\u00f1\u00d1]+$/.test(value), {
        message: "Special characters are not allowed. You can use numbers, letters, spaces, _ and ."
    })
})

export const createTeamSchema = z.object({
    name: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z0-9\sÀ-ÿ\u00f1\u00d1]+$/.test(value), {
        message: "Special characters are not allowed."
    }),
})

export const createRefereeSchema = z.object({
    name: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z\sÀ-ÿ\u00f1\u00d1]+$/.test(value), {
        message: "Numbers and special characters are not allowed."
    }),
})

export const createCampusSchema = z.object({
    name: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z0-9\sÀ-ÿ\u00f1\u00d1]+$/.test(value), {
        message: "Special characters are not allowed."
    }),
})

export const createPlayerSchema = z.object({
    name: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z0-9\sÀ-ÿ\u00f1\u00d1]+$/.test(value), {
        message: "Special characters are not allowed."
    }),
    position: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z0-9\sÀ-ÿ\u00f1\u00d1]+$/.test(value), {
        message: "Special characters are not allowed."
    })
})

export const updatePlayerDataSchema = z.object({
    points: z.number({
        message: "Points must be a number"
    }),
    assists: z.number({
        message: "Assists must be a number"
    }),
    cards: z.number({
        message: "Cards must be a number"
    }),
    serialCards: z.number({
        message: "Expulsions must be a number"
    })
})

export const updateScoreSchema = z.object({
    targetLocal: z.number({
        message: "Score must be a number"
    }),
    targetVisitant: z.number({
        message: "Score must be a number"
    }),
})

export const createStatisticsSchema = z.object({
    name: z.string().trim().min(1, {
        message: "There are empty fields"
    }).refine((value) => /^[a-zA-Z0-9\sÀ-ÿ\u00f1\u00d1]+$/.test(value), {
        message: "Special characters are not allowed."
    })
})