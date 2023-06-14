import { useNavigate } from "react-router-dom";
import token from "../../lib/token/token";

const useLogout = () => {
  const navigate = useNavigate();

  const logOut = () => {
    token.clearToken();
    window.location.reload();
    navigate("/");
  };

  return { logOut };
};

export default useLogout;
