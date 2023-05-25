import { Route, Routes } from "react-router-dom";
import AuthLoadingPage from "../../pages/AuthLoadingPage";
import CommitRankingPage from "../../pages/CommitRankingPage";
import PullRequestRankingPage from "../../pages/PullRequestRankingPage";
import RecordPage from "../../pages/RecordPage";
import RepoStarsRankingPage from "../../pages/RepoStarsRankingPage";
import Modal from "../common/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CommitRankingPage />} />
      <Route path="/callback" element={<AuthLoadingPage />} />
      <Route path="/pr-ranking" element={<PullRequestRankingPage />} />
      <Route path="/repostars-ranking" element={<RepoStarsRankingPage />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/record" element={<RecordPage />} />
    </Routes>
  );
};

export default Router;
