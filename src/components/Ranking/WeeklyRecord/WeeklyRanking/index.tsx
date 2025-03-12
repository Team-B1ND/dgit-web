import { TopRank } from "types/github/github.type";
import Medal from "components/common/Medal";
import RankingList from "components/common/RankingList";
import {
  WeeklyItemTopWrap,
  WeeklyTopItemBox,
} from "../../WeeklyRecord/WeeklyTopRecord/style";
import { BigProfileImg } from "components/Ranking/Commit/Total/style";

interface Props {
  data: TopRank;
  rank: number;
}

const RankingBox = ({ data, rank }: Props) => {
  return (
    <WeeklyTopItemBox rank={rank}>
      <BigProfileImg src={data.userImage} />
      <WeeklyItemTopWrap>
        <Medal rank={rank}>{rank}</Medal>
        <span>{data.name}</span>
      </WeeklyItemTopWrap>
      <span>{data.githubId}</span>
      <RankingList.Table.TBody.Strong>
        {`🔥 1st Count : ${data.winCount}`}
      </RankingList.Table.TBody.Strong>
    </WeeklyTopItemBox>
  );
};

export default RankingBox;
