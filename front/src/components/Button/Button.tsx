import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  type = "button",
  disabled = false,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  &:hover {
    opacity: 0.8;
  }
`;
