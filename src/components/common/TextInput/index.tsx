import Button from "../Button";
import { TextInputContainer } from "./style";
import { TextInputProps } from "./types";
// import Button,{ButtonProps} from "../Button";
import { ButtonProps } from "../Button/types";

const TextInput = ({ ...attr }: TextInputProps) => {
  return <TextInputContainer {...attr} />;
};

export default TextInput;
