import { z } from "zod"
import { mapObjectKeysDeep } from "../../utils/object.js";
import { toSnakeCase } from "../../utils/string.js";

export const authorize = z.object({
    email: z.string().email().min(1),
    password: z.string().min(1),
}).transform(x => mapObjectKeysDeep(x, toSnakeCase))

export const refreshToken = z.object({
    refresh_token: z.string().min(1),
}).transform(x => mapObjectKeysDeep(x, toSnakeCase))