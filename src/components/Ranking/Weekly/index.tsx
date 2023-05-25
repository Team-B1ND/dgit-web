import { TopRank } from "../../../types/github/github.type";
import Medal from "../../common/Medal";
import RankingList from "../../common/RankingList";
import {
  WeeklyItemText,
  WeeklyItemTopWrap,
  WeeklyTopItemBox,
} from "../../WeeklyRecord/WeeklyTopRecord/style";
import { BigProfileImg } from "../Commit/style";

interface Props {
  data: TopRank;
  rank: number;
}

const RankingBox = ({ data, rank }: Props) => {
  return (
    <WeeklyTopItemBox rank={rank == 1 ? true : false}>
      <BigProfileImg src={data.userImage} />
      <WeeklyItemTopWrap>
        <Medal rank={rank}>{rank}</Medal>
        <WeeklyItemText>{data.name}</WeeklyItemText>
      </WeeklyItemTopWrap>
      <WeeklyItemText>{data.githubId}</WeeklyItemText>
      <RankingList.Table.TBody.Strong>
        {`🔥 1st Count : ${data.winCount}`}
      </RankingList.Table.TBody.Strong>
    </WeeklyTopItemBox>
  );
};

export default RankingBox;
