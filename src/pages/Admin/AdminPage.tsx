import { useState } from "react";
import { useLocation } from "react-router-dom";

import AgreeReject from "components/Admin/AgreeReject";
import EraseRepo from "components/Admin/EraseRepo";
import * as A from "components/Admin/style";

const AdminPage = () => {
  const [changeform, setChangeForm] = useState("eraseRepo");
  const { pathname } = useLocation();
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#252525",
        padding: 40,
        boxSizing: "border-box",
      }}
    >
      <A.AdminHeader
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "white",
          height: "80px",
          alignItems: "center",
          display: "flex",
        }}
      >
        ADMIN
        {pathname === "/admin" && (
          <>
            <A.ChangeOption
              background={changeform === "eraseRepo" ? "#6C93F8" : "#252525"}
              onClick={() => setChangeForm("eraseRepo")}
            >
              Repository
            </A.ChangeOption>
            <A.ChangeOption
              background={changeform === "agreeReject" ? "#6C93F8" : "#252525"}
              onClick={() => setChangeForm("agreeReject")}
            >
              Pending
            </A.ChangeOption>
          </>
        )}
      </A.AdminHeader>

      <div>{changeform === "eraseRepo" ? <EraseRepo /> : <AgreeReject />}</div>
    </div>
  );
};

export default AdminPage;
