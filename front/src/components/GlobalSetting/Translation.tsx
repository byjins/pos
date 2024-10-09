import { useThemeAndLanguage } from "@components/GlobalSetting/SettingContext.tsx";
import styled from "styled-components";
import kr from "../../assets/kr.png";
import us from "../../assets/us.png";

const Translation = () => {
  const { language, switchLanguage } = useThemeAndLanguage();

  return (
    <TransIcon onClick={switchLanguage}>
      {language === "ko" ? (
        <img
          src={kr}
          height={30}
          width={30}
          alt={"KR icon, Icons by https://icons8.kr/"}
        />
      ) : (
        <img
          src={us}
          height={30}
          width={30}
          alt={"US icon, https://icons8.kr/"}
        />
      )}
    </TransIcon>
  );
};

export default Translation;

const TransIcon = styled.div`
  height: 30px;
  cursor: pointer;
  :hover {
    background: lightgray;
  }
`;
