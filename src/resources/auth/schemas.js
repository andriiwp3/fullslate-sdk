const { z } = require("zod");

const authorizeSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(1),
})

const refreshTokenSchema = z.object({
    refresh_token: z.string().min(1),
})

module.exports = {
    authorizeSchema,
    refreshTokenSchema,
}