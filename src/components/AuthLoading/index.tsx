import useLogin from "../../hooks/auth/useLogin";

const AuthLoading = () => {
  useLogin();

  return <div>loading...</div>;
};

export default AuthLoading;
