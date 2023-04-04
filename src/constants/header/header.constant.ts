import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiGitPullRequest } from "react-icons/bi";

export const HEADER_ITEM = [
  {
    title: "COMMIT",
    link: "/",
    icon: HiOutlinePencilAlt,
  },
  {
    title: "REPOSITORY",
    link: "/repository",
    icon: BiGitPullRequest,
  },
  {
    title: "PULL-REQUEST",
    link: "/pr-ranking",
    icon: AiOutlinePlusSquare,
  },
];
