import ReactDom from "react-dom";
import { ProtalProps } from "./portal.type";

export const Portal = ({ children, selector }: ProtalProps) => {
  if (!children) {
    //예외 처리
    throw new Error("children은 필수요");
  }

  const selectedDOM = document.querySelector(selector);
  return !!selectedDOM ? ReactDom.createPortal(children, selectedDOM) : null;
};
