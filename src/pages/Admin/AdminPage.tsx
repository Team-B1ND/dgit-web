import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DgitBox, HomeBox } from "pages/DgitHome/style";
import AgreeReject from "components/Admin/AgreeReject";
import EraseRepo from "components/Admin/EraseRepo";
import * as A from "./style";

const AdminPage = () => {
  const [changeform, setChangeForm] = useState("eraseRepo");
  const { pathname } = useLocation();
  return (
    <HomeBox style={{paddingRight:"32px"}}>
      <DgitBox style={{width:"100%"}}>
        
          {pathname === "/admin" && (
            <A.ChangeBox>
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
            </A.ChangeBox>
          )}


        <A.RepositoryBox>{changeform === "eraseRepo" ? <EraseRepo /> : <AgreeReject />}</A.RepositoryBox>
      </DgitBox>
    </HomeBox>
  );
};

export default AdminPage;
