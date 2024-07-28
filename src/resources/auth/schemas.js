import { z } from "zod"

export const authorize = z.object({
    email: z.string().email().min(1),
    password: z.string().min(1),
})

export const refreshToken = z.object({
    refresh_token: z.string().min(1),
})