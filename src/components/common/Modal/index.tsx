import { Portal } from "../Protal";
import { ModalProps } from "./modal.type";
import * as M from "./style";

const Modal = ({ isOpen, onClose, customStyle, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Portal selector="#modal">
          <M.ModalContainer onClick={onClose}></M.ModalContainer>
          <M.Content style={customStyle}>{children}</M.Content>
        </Portal>
      )}
    </>
  );
};

export default Modal;
