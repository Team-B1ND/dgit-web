import { ButtonContainer } from "./style";
import { ButtonProps } from "./types";

const Button = ({ children, style, buttonType, ...attr }: ButtonProps) => {
  return (
    <ButtonContainer {...attr} buttonType={buttonType} style={style}>
      {children}
    </ButtonContainer>
  );
};
export default Button;
