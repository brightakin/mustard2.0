import Image from "next/image";
import AppBar from "../AppBar";
import { Fragment } from "react";
import icon from "../../Assets/icon.png";
import { useRouter } from "next/router";

export default function RegisterPageDesktop() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/login");
  };
  return (
    <div className="container">
      <div className="layer">
        <main className="absolute top-24 left-[15rem] xl:left-[32rem] w-[40rem] px-[4rem] py-[3rem] h-[38rem] bg-[#ffffff] rounded-[30px] ">
          <div className="flex justify-between">
            <div>
              <h1 className=" text-2xl font-bold text-[#000000] text-left ">
                Welcome to Mustard!
              </h1>
              <p className="w-full text-sm font-normal text-[#a6a6aa] text-left mt-5">
                Enter your details below marching your valid ID.
              </p>
            </div>
            <Image src={icon} alt="" />
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <input
                className=" w-56 h-10 text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
                type={"text"}
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                className=" w-56 h-10 text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
                type={"text"}
                id="Surname"
                name="Surname"
                placeholder="Surname"
              />
            </div>
          </div>

          <div>
            <input
              className=" w-full h-10 mt-6 text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
              type={"email"}
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              className="w-full h-10 mt-6 text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
              type={"number"}
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              className="w-full h-10 mt-6 text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
              type={"password"}
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className="w-full h-10 mt-6 text-[16px] pl-3 font-normal leading-[24px] text-left border border-[#a6a6aa] rounded-[10px] "
              type={"text"}
              id="text"
              name="text"
              placeholder="Referral code (optional)"
            />
          </div>
          <div className="w-full mt-6">
            <input type={"checkbox"} id="terms" name="terms" />
            <label className="text-sm font-normal text-left " htmlFor="terms">
              By Signing Up, You Agree to the Terms of Service and Privacy
              Policy
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
        </main>
      </div>
    </div>
  );
}
