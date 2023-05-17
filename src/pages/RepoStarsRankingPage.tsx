import RankingList from "../components/common/RankingList";
import Repository from "../components/Ranking/Repository";
import Star from "../components/Ranking/Repository";
import { useGetPullRequestRank } from "../queries/github/github.query";

const RepoStarsRankingPage = () => {
  const { data } = useGetPullRequestRank();

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
        <RankingList.Hero>Repository</RankingList.Hero>
        <RankingList.Table>
          <RankingList.Table.THead>
            <RankingList.Table.THead.Th>Rank</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Profile</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Github</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>
              Repository Name
            </RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Total Stars</RankingList.Table.THead.Th>
          </RankingList.Table.THead>
          <Repository />
        </RankingList.Table>
      </RankingList>
    </div>
  );
};

export default RepoStarsRankingPage;
