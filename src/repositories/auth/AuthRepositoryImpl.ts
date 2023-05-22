import axios from "axios";
import { TokenResponse } from "../../types/token/Token.type";
import { AuthRepository, LoginParam } from "./AuthRepository";
import config from "../../config/config.json";

class AuthRepositoryImpl implements AuthRepository {
  public async login({ code }: LoginParam): Promise<TokenResponse> {
    const { data } = await axios.post(`${config.SERVER}/auth/login`, { code });
    return data;
  }
}

export default new AuthRepositoryImpl();
