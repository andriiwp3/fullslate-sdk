import { z } from "zod"

export const getAvailable = z.object({
    services: z.array(z.number().positive()).nonempty(),
    from: z.string().date().optional(),
    to: z.string().date().optional(),
    employees: z.array(z.number().positive()).optional(),
    location: z.number().positive().optional(),
    user_type: z.enum(['CLIENT', 'BUSINESS_USER']).optional(),
});
