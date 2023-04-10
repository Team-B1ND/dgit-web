import { Route, Routes } from "react-router-dom";
import CommitRankingPage from "../../pages/CommitRankingPage";
import PullRequestRankingPage from "../../pages/PullRequestRankingPage";
import RepoStarsRankingPage from "../../pages/RepoStarsRankingPage";
import Modal from "../common/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CommitRankingPage />} />
      <Route path="/pr-ranking" element={<PullRequestRankingPage />} />
      <Route path="/repostars-ranking" element={<RepoStarsRankingPage />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  );
};

export default Router;
