import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  $btnType?: "outline" | "default";
}

const Button = ({
  type = "button",
  $btnType = "default",
  disabled = false,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      $btnType={$btnType}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (props.$btnType === "default" ? "#34d399" : "#fff")};
  color: ${(props) => (props.$btnType === "default" ? "#fff" : "#34d399")};
  border: ${(props) =>
    props.$btnType === "default" ? "none" : "1px solid #34d399"};
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.25rem;
  &:hover {
    opacity: 0.8;
    background: ${(props) => props.$btnType === "outline" && "#34d399"};
    color: ${(props) => props.$btnType === "outline" && "#fff"};
  }
  transition: all 0.25s linear;
`;
