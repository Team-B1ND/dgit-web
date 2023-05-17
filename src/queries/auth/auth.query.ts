import AuthRepositoryImpl from "../../repositories/auth/AuthRepositoryImpl";
import { LoginParam } from "../../repositories/auth/AuthRepository";
import { useMutation } from "@tanstack/react-query";

export const usePostLoginMutation = () => {
  const mutation = useMutation(({ code }: LoginParam) =>
    AuthRepositoryImpl.login({ code })
  );

  return mutation;
};
