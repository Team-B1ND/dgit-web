import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../token/token";

const requestInterceptor = (config: any) => {
  if (
    token.getToken(ACCESS_TOKEN_KEY) !== undefined &&
    token.getToken(REFRESH_TOKEN_KEY)
  ) {
    config.headers = {
      [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
    };
  } else {
  }
  return config;
};

export default requestInterceptor;
