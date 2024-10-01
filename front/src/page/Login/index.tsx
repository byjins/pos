import Button from "@components/Button/Button.tsx";

const Login = () => {
  return (
    <div className={"w-full h-screen flex p-5"}>
      <div className={"w-1/2 content-center justify-center"}>
        <div className={"text-center"}>
          <h2 className={"font-bold text-6xl mb-5 text-emerald-400"}>MY POS</h2>
          <div>마이 포스에서 최고의 경험을 하세요.</div>
        </div>
      </div>
      <div className={"w-1/2 flex items-center justify-center"}>
        <div className={"text-center w-3/4"}>
          <div className={"flex flex-col gap-2"}>
            <input className={"border"} placeholder={"아이디"} />
            <input className={"border"} placeholder={"비밀번호"} />
          </div>
          <Button className={"bg-emerald-400 my-2 p-3 text-white"}>
            로그인
          </Button>
          <div className={"flex justify-end gap-3 text-xs text-gray-300"}>
            <span>회원가입</span>|<span>비밀번호 찾기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
