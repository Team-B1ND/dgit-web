import axios from "axios";
import config from "../../config/config.json";
import { REQUEST_TOKEN_KEY } from "../../constants/token/Token.constant";
import token from "../token/token";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken("access-token")}`,
  },
});
