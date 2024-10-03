import { useTranslation } from "react-i18next";
import Button from "@components/Button.tsx";
import Input from "@components/Input.tsx";
import Setting from "@components/Setting";
import { FormEvent } from "react";

const Login = () => {
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // 기본 동작인 페이지 새로고침 방지
    console.log("Form submitted! Button clicked!");
    // 버튼 클릭 시 동작할 코드
  };

  return (
    <div className={"w-dvw h-dvh bg-gray-100 dark:bg-gray-800"}>
      <Setting />
      <div className={"w-full h-full flex items-center justify-center"}>
        <div className={"flex w-full"}>
          <div className={"w-1/2 content-center justify-center"}>
            <div className={"text-center h-full"}>
              <h2 className={"font-bold text-6xl mb-5 text-emerald-400"}>
                MY POS
              </h2>
              <div className={"text-black dark:text-white"}>
                {t("Have the best experience at My POS.")}
              </div>
            </div>
          </div>
          <div className={"w-1/2 flex items-center justify-center"}>
            <div className={"text-center w-3/4"}>
              <form onSubmit={handleSubmit}>
                <div className={"flex flex-col gap-2"}>
                  <Input type={"text"} placeholder={"아이디"} />
                  <Input type={"password"} placeholder={"비밀번호"} />
                </div>
                <Button
                  type={"submit"}
                  className={"bg-emerald-400 my-2 text-white"}
                >
                  {t("Login")}
                </Button>
              </form>
              <div className={"flex justify-end gap-3 text-xs text-gray-500"}>
                <span>{t("Register")}</span>|<span>비밀번호 찾기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
