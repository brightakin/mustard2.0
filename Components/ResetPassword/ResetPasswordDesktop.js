import Image from "next/image";
import { Fragment } from "react";
import icon from "../../Assets/icon.png";

const ResetPasswordDesktop = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="layer"></div>
      </div>
      <main className="absolute top-24 left-[15rem] xl:left-[32rem] w-[40rem] px-[4rem] py-[3rem] h-[26rem] bg-[#ffffff] rounded-[30px] ">
        <div className="flex justify-between">
          <div>
            <h1 className=" text-2xl font-bold text-[#000000] text-left ">
              Reset Password!
            </h1>
            <p className="w-full text-sm font-normal text-[#a6a6aa] text-left mt-5">
              Enter your email address and we will send a code to reset your
              password.
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
        <button className="h-10 w-full mt-10 rounded-[10px] text-xl bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 ">
          Confirm Email
        </button>
      </main>
    </Fragment>
  );
};

export default ResetPasswordDesktop;
