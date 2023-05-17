import { Portal } from "../Protal";
import { ModalProps } from "./modal.type";
import * as M from "./style";

const Modal = ({ isOpen, onClose, customStyle, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Portal selector="#modal">
          <M.ModalBackGround onClick={onClose} style={customStyle}>
            {children}
          </M.ModalBackGround>
        </Portal>
      )}
    </>
  );
};

export default Modal;
