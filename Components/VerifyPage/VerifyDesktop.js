import Image from "next/image";
import icon from "../../Assets/icon.png";
import React, { Component, Fragment, useState } from "react";
import OtpInput from "react-otp-input";
import { useRouter } from "next/router";

export default function VerifyMobile() {
  const [state, setState] = useState({ otp: "" });

  const handleChange = (otp) => setState({ otp });
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/successful");
  };

  return (
    <Fragment>
      <div className="container">
        <div className="layer"></div>
      </div>
      <main className="absolute top-24 left-[15rem] xl:left-[32rem] w-[40rem] px-[4rem] py-[3rem] h-[26rem] bg-[#ffffff] rounded-[30px] ">
        <div className="flex justify-between">
          <div>
            <h1 className=" text-2xl font-bold text-[#000000] text-left ">
              Verify Email Address
            </h1>
            <p className="w-full text-sm text-[#a6a6aa] font-normal mt-5 text-left ">
              We just sent a one-time-password to{" "}
              <span className="text-[#28a745]">n*******@gmail.com</span> .
              Insert it below
            </p>
          </div>
          <Image src={icon} alt="" />
        </div>
        <OtpInput
          value={state.otp}
          onChange={handleChange}
          numInputs={6}
          separator={<span></span>}
          focusStyle={{
            border: "1px solid #28a745",
            borderRadius: "8px",
            outline: "none",
            width: "60px",
            height: "60px",
          }}
          className="otp-input pd-[20px] align-middle mx-2 mt-4 bg-white h-[60px] w-[60px] text-[26px] focus:outline-none focus:shadow-outline border border-[#28a745] rounded-lg flex appearance-none leading-normal"
        />
        <button
          onClick={handleSubmit}
          className="h-10 w-full mt-10 rounded-[10px] text-xl bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 "
        >
          Confirm Email
        </button>
      </main>
    </Fragment>
  );
}
