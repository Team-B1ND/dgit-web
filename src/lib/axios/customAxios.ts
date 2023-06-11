import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../token/token";
import requestInterceptor from "./requestHandler";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.request.use(requestInterceptor);
