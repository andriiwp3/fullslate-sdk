import { z } from "zod"

export const location = z.object({
    id: z.number().positive(),
    name: z.string(),
    street1: z.string(),
    street2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    postal_code: z.string(),
    position: z.string(),
})

export const create = location.pick({ name: true, street1: true, street2: true, city: true, state: true, postal_code: true })
export const get = location.pick({ id: true }).required();
export const update = location.partial().required({ id: true });
export const remove = location.pick({ id: true }).required()
