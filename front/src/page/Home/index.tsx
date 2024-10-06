import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  GhostButton,
  LeftOverlayPanel,
  Overlay,
  OverlayContainer,
  RightOverlayPanel,
  SignInContainer,
  SignUpContainer,
} from "@page/Home/Components.ts";
import Input from "@components/Input.tsx";
import Button from "@components/Button.tsx";
import Theme from "@components/Setting/Theme.tsx";

const Home = () => {
  const { t } = useTranslation();
  const [signIn, toggle] = useState(true);

  // 로그인
  const handleSignInSubmit = (event: FormEvent) => {
    event.preventDefault(); // 기본 동작인 페이지 새로고침 방지
    console.log("Form submitted! Button clicked!");
    // 버튼 클릭 시 동작할 코드
  };

  // 회원가입
  const handleSignUpSubmit = (event: FormEvent) => {
    event.preventDefault(); // 기본 동작인 페이지 새로고침 방지
    console.log("Form submitted! Button clicked!");
    // 버튼 클릭 시 동작할 코드
  };

  return (
    <div className={"w-dvw h-dvh bg-gray-100 dark:bg-gray-800"}>
      <div className={"w-full h-full flex items-center justify-center"}>
        <Container>
          <SignUpContainer $signinIn={signIn} className={""}>
            <form
              onSubmit={handleSignUpSubmit}
              className={
                "flex flex-col items-center justify-center p-12 h-full gap-2 bg-white dark:bg-gray-700"
              }
            >
              <div className={"absolute top-5 right-5"}>
                <Theme />
              </div>
              <h1 className={"text-2xl font-bold dark:text-white"}>
                {t("Create Account")}
              </h1>
              <Input type="text" name={"userName"} placeholder="Name" />
              <Input type="email" name={"userEmail"} placeholder="Email" />
              <Input
                type="password"
                name={"userPassword"}
                placeholder="Password"
              />
              <Input
                type="password"
                name={"passwordConfirm"}
                placeholder="Password"
              />
              <Button>{t("Sign up")}</Button>
            </form>
          </SignUpContainer>
          <SignInContainer $signinIn={signIn}>
            <form
              onSubmit={handleSignInSubmit}
              className={
                "flex flex-col items-center justify-center p-12 h-full gap-2 bg-white dark:bg-gray-700"
              }
            >
              <div className={"absolute top-5 right-5"}>
                <Theme />
              </div>
              <h1 className={"text-2xl font-bold dark:text-white"}>
                {t("Sign in")}
              </h1>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <a
                href="#"
                className={"text-xs opacity-70 accent-gray-300 dark:text-white"}
              >
                {t("Forgot your password?")}
              </a>
              <Button>{t("Login")}</Button>
            </form>
          </SignInContainer>

          <OverlayContainer $signinIn={signIn}>
            <Overlay $signinIn={signIn}>
              <LeftOverlayPanel $signinIn={signIn}>
                <h1 className={"text-6xl font-bold"}>{t("Register")}</h1>
                <p className={"text-sm mt-3"}>
                  {t("Have the best experience at My POS.")}
                </p>
                <p className={"text-sm mb-6"}>
                  {t(
                    "You can use a POS with a user-customized UI and features.",
                  )}
                </p>
                <GhostButton onClick={() => toggle(true)}>
                  {t("Sign in")}
                </GhostButton>
              </LeftOverlayPanel>

              <RightOverlayPanel $signinIn={signIn}>
                <h1 className={"text-6xl font-bold"}>MY POS</h1>
                <p className={"text-sm mt-3 mb-6"}>
                  {t(
                    "POS (Personalized, Optimized, Simplified): A system designed to meet users' needs, provide convenient usage, and offer a streamlined experience.",
                  )}
                </p>
                <GhostButton onClick={() => toggle(false)}>
                  {t("Register")}
                </GhostButton>
              </RightOverlayPanel>
            </Overlay>
          </OverlayContainer>
        </Container>
      </div>
    </div>
  );
};

export default Home;
