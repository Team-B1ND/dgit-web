import { useGetRepositoryQuery } from "../../../queries/github/github.query";
import Medal from "../../common/Medal";
import RankingList from "../../common/RankingList";
import { ProfileImg } from "../Commit/style";
import { useDeleteRepositroy } from "../../../hooks/delete/useDeleteRepository";

interface ButtonProps {
  showDeleteButton: boolean;
}

const Repository = ({ showDeleteButton }: ButtonProps) => {
  const { data } = useGetRepositoryQuery({ suspense: true });
  const { onDeleteRepo } = useDeleteRepositroy();

  return (
    <RankingList.Table.TBody>
      {data?.data.map((data, idx) => {
        const rank = idx + 1;
        return (
          <>
            <tr key={data.githubId}>
              <RankingList.Table.TBody.Td>
                <Medal rank={rank}>{rank}</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                <ProfileImg
                  src={data.githubUserImage}
                  onClick={() =>
                    (window.location.href = `https://github.com/${data.githubId}/${data.repositoryName}`)
                  }
                />
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.githubId}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.repositoryName}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Strong>
                {showDeleteButton ? (
                  <button onClick={() => onDeleteRepo(data.repositoryId)}>
                    X
                  </button>
                ) : (
                  data.totalStars
                )}
              </RankingList.Table.TBody.Strong>
            </tr>
          </>
        );
      })}
    </RankingList.Table.TBody>
  );
};
export default Repository;
