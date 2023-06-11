import RankingList from "../../common/RankingList";
import Pending from "./Pending";

const AgreeReject = () => {
  return (
    <RankingList>
      <RankingList.Table>
        <RankingList.Table.THead>
          <RankingList.Table.THead.Th>Profile</RankingList.Table.THead.Th>
          <RankingList.Table.THead.Th>Name</RankingList.Table.THead.Th>
          <RankingList.Table.THead.Th>Email</RankingList.Table.THead.Th>
          <RankingList.Table.THead.Th>GithubId</RankingList.Table.THead.Th>
          <RankingList.Table.THead.Th>Approval</RankingList.Table.THead.Th>
        </RankingList.Table.THead>
        <Pending />
      </RankingList.Table>
    </RankingList>
  );
};

export default AgreeReject;
