import { Route, Routes } from "react-router-dom";
import AdminPage from "../../pages/AdminPage";
import AuthLoadingPage from "../../pages/AuthLoadingPage";
import DgitPage from "pages/DgitHome/page";
import PullRequestRankingPage from "../../pages/PullRequestRankingPage";
import RecordPage from "../../pages/RecordPage";
import RepoStarsRankingPage from "../../pages/RepoStarsRankingPage";
import AuthHoc from "../common/Hoc/AuthHoc";
import PageTemplate from "../common/PageTemplate";

const Router = () => {
  const AuthAdminPage = AuthHoc(AdminPage, "ADMIN");

  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route path="/" element={<DgitPage />} />
        {/* <Route path="/callback" element={<AuthLoadingPage />} />
        <Route path="/pr-ranking" element={<PullRequestRankingPage />} />
        <Route path="/repostars-ranking" element={<RepoStarsRankingPage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/admin" element={<AuthAdminPage />} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
