import { z } from "zod"
import { mapObjectKeysDeep } from "../../utils/object.js";
import { toSnakeCase } from "../../utils/string.js";

export const getAvailable = z.object({
    services: z.array(z.number().positive()).nonempty(),
    from: z.string().date().optional(),
    to: z.string().date().optional(),
    employees: z.array(z.number().positive()).optional(),
    location: z.number().positive().optional(),
    userType: z.enum(['CLIENT', 'BUSINESS_USER']).optional(),
}).transform(x => mapObjectKeysDeep(x, toSnakeCase));
