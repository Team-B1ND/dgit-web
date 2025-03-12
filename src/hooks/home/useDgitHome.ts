import { useState, useEffect } from "react";
import { PageDataType } from "types/Dgit/dgit.type";
import { CommitType } from "types/Commit/commit.type";

export const useDgitHome = () => {
  const [commitType, setCommitType] = useState<CommitType>("total");

  const [pageData, setPageData] = useState<PageDataType[]>([
    { text: "커밋", isAtv: true },
    { text: "레포지토리", isAtv: false },
    { text: "PR", isAtv: false },
    { text: "주간기록", isAtv: false },
  ]);

  
  useEffect(() => {
    const handleResize = () => {
      setPageData((prev) =>
        prev.map((item) =>
          item.text === (window.innerWidth <= 797 ? "레포지토리" : "레포")
            ? { ...item, text: window.innerWidth <= 797 ? "레포" : "레포지토리" }
            : item
        )
      );
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickPageButton = (text?: string) => {
    setPageData((prev) =>
      prev.map((item) =>
        item.text === text ? { ...item, isAtv: true } : { ...item, isAtv: false }
      )
    );
  };

  return {
    pageData,
    commitType,
    setPageData,
    setCommitType,
    handleClickPageButton,
  };
};
