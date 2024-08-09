import { z } from "zod";
import { create, get, update, remove, location } from "./schemas";

export type Location = z.infer<typeof location>

export type CreateLocationRequestPayload = z.infer<typeof create>
export type CreateLocationResponse = Location;
export type GetLocationRequestPayload = z.infer<typeof get>
export type GetLocationResponse = Location;
export type UpdateLocationRequestPayload = z.infer<typeof update>
export type UpdateLocationResponse = Location;
export type RemoveLocationRequestPayload = z.infer<typeof remove>
export type RemoveLocationResponse = { deleted: boolean }

export type GetAllLocationsRequestPayload = Location[];
export type GetAllLocationsResponse = Location[];