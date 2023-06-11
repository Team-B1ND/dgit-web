import { ComponentType, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMemberQuery } from "../../../queries/member/member.query";
import { MemberRole } from "../../../types/member/Member.type";

const AuthHoc = (AuthComponent: ComponentType, role: MemberRole) => {
  const AuthCheck = () => {
    const { data, isLoading } = useGetMemberQuery();
    const navigate = useNavigate();
    const [isauthcheck, setIsAuthCheck] = useState(true);

    const authException = () => {
      window.alert("불가능한 접근입니다");

      setIsAuthCheck(true);
      navigate("/");
    };

    useEffect(() => {
      if (!isLoading && data === undefined) {
        authException();
        return;
      }

      if (data) {
        const { role: menberRole } = data.data;

        if (menberRole === "STUDENT" && role === "ADMIN") {
          authException();
          return;
        }
        setIsAuthCheck(false);
      }
    }, [data, isLoading]);

    return <>{isauthcheck ? <>loading...</> : <AuthComponent />}</>;
  };
  return AuthCheck;
};

export default AuthHoc;
