import blackCardImg from "../../Assets/blackcard.png";
import Image from "next/image";
import circleLinesImg from "../../Assets/circlelines.png";

const LoginPageDesktop = () => {
  return (
    <div className="flex w-full h-[45rem] gap-32">
      <div className="w-[33rem] h-[45rem] bg-[#000000]">
        <Image src={blackCardImg} alt="blackcard" />
        <Image className="z-10 " src={circleLinesImg} alt="circlelines" />
      </div>
      <div className="h-[40rem] w-[49rem] mt-[2rem] mr-10">
        <h1 className=" h-10 w-72 text-[30px] font-normal text-[##a3a3a] leading-[40px] text-left ">
          Sign In
        </h1>
        <p className=" h-8 w-[27rem] mt-6 text-[14px] font-normal text-[#a6a6aa] text-left ">
          Sign in to access your dashboard
        </p>
        <div className=" mt-7">
          <label>Work Email</label>
          <input
            className=" w-[717px] h-[60px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
            type={"email"}
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mt-7">
          <label>Password</label>
          <input
            className="w-[717px] h-[60px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
            type={"text"}
            id="text"
            name="text"
            placeholder="Password"
          />
        </div>
        <button className="h-[60px] w-[717px] mt-10 rounded-[10px] text-[24px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 ">
          Login
        </button>
        <p className=" h-[24px] w-full mt-7 text-[16px] font-normal leading-[24px] text-[#3a3a3a] text-left">
          Forgot your password?
          <span className="text-[#fdbc1f]">
            <a href="/">Reset Password</a>
          </span>
        </p>
        <p className=" h-[24px] w-full mt-7 text-[16px] font-normal leading-[24px] text-[#3a3a3a] text-left  ">
          Don’t have an account?
          <span className="text-[#fdbc1f]">
            <a href="/">Create Account</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPageDesktop;
