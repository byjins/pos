import styled from "styled-components";
import Theme from "@components/Setting/Theme.tsx";
import Translation from "@components/Setting/Translation.tsx";

const Setting = () => {
  return (
    <SettingContainer>
      <Theme />
      <Translation />
    </SettingContainer>
  );
};

export default Setting;

const SettingContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 0.5rem;
  top: 0;
  right: 0;
`;
