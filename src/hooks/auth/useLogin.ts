import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useCallback, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/Token.constant";
import token from "../../lib/token/token";
import { usePostLoginMutation } from "../../queries/auth/auth.query";
import { queryString } from "../../utils/queryString";

const useLogin = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const postLoginMutation = usePostLoginMutation();

  const login = () => {
    postLoginMutation.mutateAsync(
      {
        code: queryString(search).code,
      },
      {
        onSuccess: ({ data }) => {
          token.setToken(ACCESS_TOKEN_KEY, data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, data.refreshToken);
          B1ndToast.showSuccess("로그인 성공");
          navigate("/");
        },
        onError: () => {
          B1ndToast.showError("로그인 실패");
          navigate("/");
          token.clearToken();
        },
      }
    );
  };

  useEffect(() => {
    login();
  }, []);

  return {};
};

export default useLogin;
