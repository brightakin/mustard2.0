import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import icon from "../../Assets/icon.png";

const LoginPageDesktop = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/verify");
  };

  return (
    <Fragment>
      <div className="container">
        <div className="layer"></div>
      </div>
      <main className="absolute top-24 left-[15rem] xl:left-[32rem] w-[40rem] px-[4rem] py-[3rem] h-[32rem] bg-[#ffffff] rounded-[30px] ">
        <div className="flex justify-between">
          <div>
            <h1 className=" text-2xl font-bold text-[#000000] text-left ">
              Welcome Back!
            </h1>
            <p className="w-full text-sm font-normal text-[#a6a6aa] text-left mt-5">
              Let’s continue from where you stopped.
            </p>
          </div>
          <Image src={icon} alt="" />
        </div>
        <div>
          <input
            className=" w-full h-10 mt-10 text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
            type={"email"}
            id="email"
            name="email"
            placeholder="Email Address/Phone Number"
          />
        </div>
        <div>
          <input
            className="w-full h-10 mt-10 text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
            type={"password"}
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="w-full mt-6">
          <input type={"checkbox"} id="terms" name="terms" />
          <label
            className="text-sm font-normal text-left text-[#a6a6aa] "
            htmlFor="terms"
          >
            Remember Me
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="h-10 w-full mt-5 rounded-[10px] text-xl bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 "
        >
          Sign Up
        </button>
        <p className="h-[10px] w-full text-base mt-5 font-normal leading-[24px] text-[#a6a6aa] text-center  ">
          Have an account?{" "}
          <span className="text-[#28a745]">
            <a href="/">Sign in</a>
          </span>
        </p>
        <p className="w-full mt-8 text-[#3a3a3a] text-center underline">
          Create Account
        </p>
      </main>
    </Fragment>
  );
};

export default LoginPageDesktop;
