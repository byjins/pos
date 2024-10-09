import {FormEvent, useState} from "react";
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
import {Controller, useForm} from "react-hook-form";

interface RegisterParams {
  userName: string,
  userPassword: string,
  userEmail: string,
  passwordConfirm: string,
  userPhone: string,
}

const Home = () => {
  const { t } = useTranslation();
  const [signIn, toggle] = useState(true);
  const {control, handleSubmit} = useForm<RegisterParams>();

  // 로그인
  const handleSignInSubmit = (event: FormEvent) => {
    event.preventDefault(); // 기본 동작인 페이지 새로고침 방지
    console.log("Form submitted! Button clicked!");
    // 버튼 클릭 시 동작할 코드
  };

  // 회원가입
  const handleSignUpSubmit = (data: RegisterParams) => {
    console.log(data);
  }

  // 아이디 중복확인
  const handleIdDuplicateCheck = (event: FormEvent) => {
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
              onSubmit={handleSubmit(handleSignUpSubmit)}
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
              <div className="flex w-full gap-2">
                <div className={"flex-grow-[7]"}>
                  <Controller
                    name={"userName"}
                    control={control}
                    defaultValue={''}
                    rules={{
                      required: t("ID is required"),
                      minLength: 8,
                      maxLength: 16,
                      pattern: {
                        value: /^[a-z0-9]{8,16}$/,
                        message: t("Only lowercase letters and numbers are allowed, and it must be between 8 and 16 characters"),
                      }
                    }}
                    render={({ field, fieldState }) => (
                      <div className={"flex flex-col gap-2"}>
                        <Input
                          type="text"
                          onChange={field.onChange}
                          value={field.value}
                          name={field.name}
                          placeholder={t("Placeholder Name")}
                          className={"w-full"}
                        />
                        {fieldState.error != null ?
                          <span style={{color: 'red'}}>{fieldState.error?.message}</span> :
                          <span style={{color: 'red'}}></span>}
                      </div>
                    )}
                  />
                </div>
                <div className={"flex-grow-[3]"}>
                  <Button className={"items-center"} onClick={handleIdDuplicateCheck}>{t("Duplicate Check")}</Button>
                </div>
              </div>
              <Controller
                name={"userEmail"}
                control={control}
                defaultValue={''}
                rules={{
                  required: t("Email is required"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: t("Please enter a valid email address"),
                  }
                }}
                render={({ field, fieldState }) => (
                  <div className={"flex flex-col w-full gap-2"}>
                    <Input type="text" onChange={field.onChange} value={field.value} name={field.name}
                           placeholder={t("Placeholder Email")} className={"w-full"}/>
                    {fieldState.error != null ?
                      <span style={{color: 'red'}}>{fieldState.error?.message}</span> :
                      <span style={{color: 'red'}}></span>}
                  </div>
                )}
              />
              <Controller
                name={"userPassword"}
                control={control}
                defaultValue={''}
                rules={{
                  required: t("Password is required"),
                  minLength: 8,
                  maxLength: 20,
                  pattern: {
                    value: /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,20}$/,
                    message: t("Password must contain at least one special character and be between 8 and 20 characters long"),
                  }
                }}
                render={({ field, fieldState }) => (
                  <div className={"flex flex-col w-full gap-2"}>
                    <Input type="password" onChange={field.onChange} value={field.value} name={field.name}
                           placeholder={t("Placeholder Password")} className={"w-full"}/>
                    {fieldState.error != null ?
                      <span style={{color: 'red'}}>{fieldState.error?.message}</span> :
                      <span style={{color: 'red'}}></span>}
                  </div>
                )}
              />
              <Controller
                name={"passwordConfirm"}
                control={control}
                defaultValue={''}
                rules={{
                  required: t("Password Confirm is required"),
                  minLength: 8,
                  maxLength: 20,
                  pattern: {
                    value: /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,20}$/,
                    message: t("Password must contain at least one special character and be between 8 and 20 characters long"),
                  }
                }}
                render={({ field, fieldState }) => (
                  <div className={"flex flex-col w-full gap-2"}>
                    <Input type="password" onChange={field.onChange} value={field.value} name={field.name}
                           placeholder={t("Placeholder Password Confirm")} className={"w-full"}/>
                    {fieldState.error != null ?
                      <span style={{color: 'red'}}>{fieldState.error?.message}</span> :
                      <span style={{color: 'red'}}></span>}
                  </div>
                )}
              />
              <Controller
                name={"userPhone"}
                control={control}
                defaultValue={''}
                rules={{
                  required: t("Phone is required"),
                  pattern: {
                    value: /^\d{3}-\d{4}-\d{4}$/,
                    message: t("Phone number must be in the format 000-0000-0000"),
                  }
                }}
                render={({ field, fieldState }) => (
                  <div className={"flex flex-col w-full gap-2"}>
                    <Input type="phone" onChange={field.onChange} value={field.value} name={field.name}
                           placeholder={t("Placeholder Phone")} className={"w-full"}/>
                    {fieldState.error != null ?
                      <span style={{color: 'red'}}>{fieldState.error?.message}</span> :
                      <span style={{color: 'red'}}></span>}
                  </div>
                )}
              />
              <Button type={"submit"}>{t("Sign up")}</Button>
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
