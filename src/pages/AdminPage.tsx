// import Header from "../components/common/Header";
import { SwitchCase } from "@b1nd/b1nd-react-util";
import { useState } from "react";

import AgreeReject from "../components/Admin/AgreeReject";
import EraseRepo from "../components/Admin/EraseRepo";
import * as A from "../components/Admin/style";

const AdminPage = () => {
  const [changeform, setChangeForm] = useState("eraseRepo");
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#252525",
        padding: 40,
        boxSizing: "border-box",
        // display: "flex",
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
      </A.AdminHeader>

      <div>
        <SwitchCase
          value={changeform}
          caseBy={{
            eraseRepo: <EraseRepo />,
            agreeReject: <AgreeReject />,
          }}
        />
      </div>
    </div>
  );
};

export default AdminPage;
