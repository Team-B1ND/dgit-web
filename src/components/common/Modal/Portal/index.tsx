import React, { useState } from "react";
import reactDom from "react-dom";

const ModalPortal = ({ children }: any) => {
  const el = document.getElementById("modal") as HTMLElement;
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
