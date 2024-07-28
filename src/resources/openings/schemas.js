const { z } = require("zod");

const getAvailable = z.object({
    services: z.array(z.string().positive()).nonempty(),
    from: z.date(),
    to: z.date(),
    employees: z.array(z.number().positive()),
    location: z.number().positive(),
    user_type: z.enum(['CLIENT', 'BUSINESS_USER']),
})

module.exports = {
    getAvailable,
}