import { z } from "zod";
import { getList, service } from "./schemas";

export type Service = z.infer<typeof service>;

export type GetServicesRequestPayload = z.infer<typeof getList>
export type GetServicesResponse = Service[]
