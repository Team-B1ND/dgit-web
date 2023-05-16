import { Response } from "../util/Response.type";

export interface TokenResponse extends Response {
  data: {
    acceToken: string;
    refreshToken: string;
  };
}
