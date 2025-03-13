import { Route, Routes } from "react-router-dom";
import AdminPage from "pages/Admin/AdminPage";
import AuthLoadingPage from "../../pages/AuthLoadingPage";
import DgitPage from "pages/DgitHome/page";
import AuthHoc from "../common/Hoc/AuthHoc";
import PageTemplate from "../common/PageTemplate";

const Router = () => {
  const AuthAdminPage = AuthHoc(AdminPage, "ADMIN");

  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route path="/" element={<DgitPage />} />
        <Route path="/admin" element={<AuthAdminPage />} /> 
       <Route path="/callback" element={<AuthLoadingPage />} />
      
      </Route>
    </Routes>
  );
};

export default Router;
