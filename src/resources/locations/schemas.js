const { z } = require("zod");

const location = z.object({
    id: z.number().positive(),
    name: z.string(),
    street1: z.string(),
    street2: z.string(),
    city: z.string(),
    state: z.string(),
    postal_code: z.string(),
    position: z.string(),
})

const create = location.pick({ name: true, street1: true, street2: true, city: true, state: true, postal_code: true });
const get = location.pick({ id: true }).required();
const update = location.partial().required({ id: true });
const remove = location.pick({ id: true }).required();

module.exports = {
    create,
    get,
    update,
    remove,
}