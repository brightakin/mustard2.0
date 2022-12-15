import { AiOutlineEye, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import plusWhiteImg from "../../Assets/pluswhite.png";
import Image from "next/image";
import { Fragment } from "react";
import icon from "../../Assets/icon.png";
import rocket from "../../Assets/rocket.png";

const SuccesfulVerificationDesktop = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="layer"></div>
      </div>
      <main className="absolute top-56 left-[15rem] xl:left-[32rem] w-[40rem] px-[4rem] py-[3rem] h-[20rem] bg-[#ffffff] rounded-[30px] ">
        <div className="flex justify-between">
          <Image src={rocket} alt="" />
          <div>
            <h1 className=" text-2xl font-bold mt-10 text-[#000000] text-left ">
              Email Verification Successful
            </h1>
          </div>
        </div>
        <button className="h-10 w-[20rem] ml-[10rem] rounded-[10px] text-xl bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 ">
          Confirm
        </button>
      </main>
    </Fragment>
  );
};

export default SuccesfulVerificationDesktop;
