import { useThemeAndLanguage } from "@context/SettingContext.tsx";
import styled from "styled-components";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Theme = () => {
  const { theme, toggleTheme } = useThemeAndLanguage();

  const isLight = theme === "light";

  return (
    <ToggleContainer $isOn={isLight} onClick={toggleTheme}>
      <Slider $isOn={isLight} />
      <div className={"flex"}>
        <IconWrapper>
          {isLight ? (
            <MdOutlineDarkMode size={"24"} />
          ) : (
            <MdLightMode size={"24"} className={"text-white"} />
          )}
        </IconWrapper>
      </div>
    </ToggleContainer>
  );
};

export default Theme;

const ToggleContainer = styled.div<{ $isOn: boolean }>`
  width: 60px;
  height: 30px;
  background-color: ${({ $isOn }) => ($isOn ? "#ccc" : "#797979")};
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: ${({ $isOn }) => ($isOn ? "flex-start" : "flex-end")};
  padding: 0 5px;
`;

const Slider = styled.div<{ $isOn: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: ${({ $isOn }) => ($isOn ? "32.5px" : "2.5px")};
  transition: all 0.3s ease;
  background-color: ${({ $isOn }) => ($isOn ? "#fff" : "#414141")};
`;

const IconWrapper = styled.div`
  z-index: 1;
`;
