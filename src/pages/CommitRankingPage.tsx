import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Avatar from "../components/common/Avatar";
import Medal from "../components/common/Medal";
import Modal from "../components/common/Modal";
import RankingList from "../components/common/RankingList";
import { RegisterModalOpenAtom } from "../store/common/common.store";

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
            </tr>{" "}
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={4}>4</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>{" "}
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={4}>4</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>{" "}
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={4}>4</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>{" "}
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={4}>4</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>{" "}
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={4}>4</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>{" "}
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={4}>4</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>{" "}
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={4}>4</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>asddsd</RankingList.Table.TBody.Td>
            </tr>{" "}
          </RankingList.Table.TBody>
        </RankingList.Table>
      </RankingList>
    </div>
  );
};

export default CommitRankingPage;
