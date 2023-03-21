import { TextInputContainer } from "./style";
import { TextInputProps } from "./types";

const TextInput = ({ ...attr }: TextInputProps) => {
  return <TextInputContainer {...attr} />;
};

export default TextInput;
