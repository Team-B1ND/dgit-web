import { ButtonContainer } from "./style";
import { ButtonType } from "./types";

const Button = ({ onClick, label, style, color }: ButtonType) => {
  return (
    <ButtonContainer color={color} style={style} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
