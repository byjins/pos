import { useThemeAndLanguage } from "@context/SettingContext.tsx";
import { HiOutlineLanguage } from "react-icons/hi2";
import styled from "styled-components";

const Translation = () => {
  const { switchLanguage } = useThemeAndLanguage();

  return (
    <StyledLangContainer>
      <HiOutlineLanguage size={"24"} onClick={switchLanguage} />
    </StyledLangContainer>
  );
};

export default Translation;

const StyledLangContainer = styled.div`
  height: 30px;
  cursor: pointer;

  :hover {
    background: lightgray;
  }
`;
