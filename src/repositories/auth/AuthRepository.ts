import { customAxios } from "../../lib/axios/customAxios";
import { TokenResponse } from "../../types/token/Token.type";

export interface AuthRepository {
  login(): Promise<TokenResponse>;
}

export interface LoginParam {
  code: string;
}
