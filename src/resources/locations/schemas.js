import { z } from "zod"
import { mapObjectKeysDeep } from "../../utils/object.js";
import { toSnakeCase } from "../../utils/string.js";

const location = z.object({
    id: z.number().positive(),
    name: z.string(),
    street1: z.string(),
    street2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    position: z.string(),
})

export const create = location.pick({ name: true, street1: true, street2: true, city: true, state: true, postalCode: true }).transform(x => mapObjectKeysDeep(x, toSnakeCase));
export const get = location.pick({ id: true }).required();
export const update = location.partial().required({ id: true }).transform(x => mapObjectKeysDeep(x, toSnakeCase));
export const remove = location.pick({ id: true }).required()
