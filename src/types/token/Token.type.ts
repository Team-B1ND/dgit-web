import { Response } from "../util/Response.type";

export interface TokenResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
