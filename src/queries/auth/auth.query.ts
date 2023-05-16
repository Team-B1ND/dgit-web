import { useMutation } from "react-query";
import AuthRepositoryImpl from "../../repositories/auth/AuthRepositoryImpl";
import { LoginParam } from "../../repositories/auth/AuthRepository";

export const usePostLoginMutation = () => {
  const mutation = useMutation(({ code }: LoginParam) =>
    AuthRepositoryImpl.login({ code })
  );

  return mutation;
};
