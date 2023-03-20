import Medal from "../components/common/Medal";
import RankingList from "../components/common/RankingList";

const CommitRankingPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#252525",
        padding: 40,
      }}
    >
      <RankingList customStyle={{ width: 1470 }}>
        <RankingList.Hero>asddad</RankingList.Hero>
        <RankingList.Table>
          <RankingList.Table.THead>
            <RankingList.Table.THead.Th>asdsd</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>asdsd</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>asdsd</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>asdsd</RankingList.Table.THead.Th>
          </RankingList.Table.THead>
          <RankingList.Table.TBody>
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={1}>1</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={2}>2</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={3}>3</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={4}>4</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>
          </RankingList.Table.TBody>
        </RankingList.Table>
      </RankingList>
    </div>
  );
};

export default CommitRankingPage;
