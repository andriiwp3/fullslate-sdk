const { z } = require("zod");

const authorize = z.object({
    email: z.string().email().min(1),
    password: z.string().min(1),
})

const refreshToken = z.object({
    refresh_token: z.string().min(1),
})

module.exports = {
    authorize,
    refreshToken,
}