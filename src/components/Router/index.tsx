import { Route, Routes } from "react-router-dom";
import CommitRankingPage from "../../pages/CommitRankingPage";
import PullRequestRankingPage from "../../pages/PullRequestRankingPage";
import RepoStarsRankingPage from "../../pages/RepoStarsRankingPage";
import Modal from "../common/Modal/index";
import TextInput from "../common/TextInput";
import Button from "../common/Button";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CommitRankingPage />} />
      <Route path="/pr-ranking" element={<PullRequestRankingPage />} />
      <Route path="/repostars-ranking" element={<RepoStarsRankingPage />} />
      <Route path="/modaltest" element={<Modal />} />
      <Route path="/input" element={<TextInput />} />
      {/* <Route path="/button" element={<Button />} /> */}
      {/* <Route path="/bt" element={<Button />} /> */}
    </Routes>
  );
};

export default Router;
