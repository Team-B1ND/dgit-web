import { ButtonContainer } from "./style";
import { ButtonProps } from "./types";

const Button = ({ onClick, children, style, buttonType }: ButtonProps) => {
  return (
    <ButtonContainer color={buttonType} style={style} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
