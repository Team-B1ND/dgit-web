import { useRecoilState } from "recoil";
import { RegisterModalOpenAtom } from "../../store/common/common.store";

const useModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(RegisterModalOpenAtom);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, open, close };
};

export default useModal;
