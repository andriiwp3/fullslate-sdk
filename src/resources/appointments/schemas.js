const { z } = require("zod");

const id = z.string().min(1);

const getScheduled = z.object({
})

const create = z.object({
})

const get = z.object({
    id,
    state_at: z.date(),
})

const update = z.object({
    id,
})

const remove = z.object({
    id,
})

const accept = z.object({
})

const decline = z.object({
})

const getReview = z.object({
})

module.exports = {
    getScheduled,
    create,
    get,
    update,
    remove,
    accept,
    decline,
    getReview,
}