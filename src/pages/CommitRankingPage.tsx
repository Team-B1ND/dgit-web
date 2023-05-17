import RankingList from "../components/common/RankingList";
import Commit from "../components/Ranking/Commit";

const CommitRankingPage = () => {
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
      <RankingList>
        <RankingList.Hero>Commit</RankingList.Hero>
        <RankingList.Table>
          <RankingList.Table.THead>
            <RankingList.Table.THead.Th>Rank</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Profile</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Github</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Name</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Intro</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Commits</RankingList.Table.THead.Th>
          </RankingList.Table.THead>
          <Commit />
        </RankingList.Table>
      </RankingList>
    </div>
  );
};

export default CommitRankingPage;
