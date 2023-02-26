import { Route, Routes } from "react-router-dom";
import CommitRankingPage from "../../pages/CommitRankingPage";
import PullRequestRankingPage from "../../pages/PullRequestRankingPage";
import RepoStarsRankingPage from "../../pages/RepoStarsRankingPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CommitRankingPage />} />
      <Route path="/pr-ranking" element={<PullRequestRankingPage />} />
      <Route path="/repostars-ranking" element={<RepoStarsRankingPage />} />
    </Routes>
  );
};

export default Router;
