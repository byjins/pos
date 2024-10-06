import { InputHTMLAttributes } from "react";

import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "number" | "email" | "phone";
}

const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input<InputProps>`
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  padding: 12px 15px;
  &:focus {
    border-color: #34d399; /* 포커스될 때 테두리 색상은 초록색 */
    outline: none; /* 기본 outline 제거 */
  }
`;
