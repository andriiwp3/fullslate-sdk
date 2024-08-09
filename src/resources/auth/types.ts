import { z } from "zod";
import { authorize, refreshToken } from "./schemas";

export type AuthorizeRequestPayload = z.infer<typeof authorize>
export type RefreshTokenRequestPayload = z.infer<typeof refreshToken>

export interface AuthResponse {
    access_token: string;
    refresh_token: string;
    access_token_expires_at: string;
    refresh_token_expires_at: string;
}
export type AuthorizeResponse = AuthResponse;
export type RefreshTokenResponse = AuthResponse;