import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/Token.constant";
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
    B1ndToast.showError("토큰이 존재하지 않습니다. 다시 로그인해주세요");
  }
  return config;
};

export default requestInterceptor;