import { z } from "zod"

export const getAvailable = z.object({
    services: z.array(z.string()).nonempty(),
    from: z.date(),
    to: z.date(),
    employees: z.array(z.number().positive()),
    location: z.number().positive(),
    user_type: z.enum(['CLIENT', 'BUSINESS_USER']),
})
