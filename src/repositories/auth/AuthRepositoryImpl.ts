import axios from "axios";
import { TokenResponse } from "../../types/token/Token.type";
import { AuthRepository } from "./AuthRepository";
// import config from "../../config/config.json";
import config from "../../config/config.json";

class AuthRepositoryImpl implements AuthRepository {
  public async login(): Promise<TokenResponse> {
    const { data } = await axios.post(`${config.SERVER}/auth/login`);
    return data;
  }
}

export default new AuthRepositoryImpl();
