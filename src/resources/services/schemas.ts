import { z } from "zod"

export const service = z.object({
    id: z.number(),
    name: z.string().optional(),
    service_type: z.enum(['CLASS_SERVICE', 'NORMAL_SERVICE']).optional(),
})

export const getList = service.partial().extend({
    category_id: z.string().optional(),
    include_deleted: z.boolean().optional(),
    include_unbookable_service: z.boolean().optional(),
});
