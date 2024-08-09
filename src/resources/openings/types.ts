import { z } from "zod";
import { getAvailable, opening } from "./schemas";
import { Service } from "../services/types";

export type Opening = z.infer<typeof opening>

export type GetAvailableOpeningsRequestPayload = z.infer<typeof getAvailable>
export interface GetAvailableOpeningsResponse {
    services: Pick<Service, 'id' | 'name'>[];
    openings: Opening[];
}