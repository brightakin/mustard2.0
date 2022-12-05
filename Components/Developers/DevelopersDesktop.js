import SideBar from "../Helpers/SideBar";
import { AiOutlineEye, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import plusWhiteImg from "../../Assets/pluswhite.png";
import Image from "next/image";
import shieldImg from "../../Assets/shield.png";
import avatarImg from "../../Assets/shield.png";

const DevelopersDesktop = () => {
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  return (
    <div className="bg-[#212936] flex gap-10 h-[63rem] w-full">
      <SideBar />
      <div className=" w-[40rem] lg:w-[47rem] xl:w-[65rem] h-[58rem] mr-6 mt-5 bg-white rounded-3xl">
        <div className="flex justify-between">
          <p className=" text-xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
            Developers
          </p>
          <p className="mt-5 mr-7 underline text-sm font-semibold">
            Read Documentation
          </p>
        </div>
        <p className="mt-16 ml-7 text-xl font-bold text-[#1976d2]">
          API Keys & Webhooks
        </p>
        <hr className="w-full" />
        <div className="flex justify-between">
          <div>
            <p className="ml-7 text-xl font-bold text-[#3a3a3a] mt-14">
              API Keys
            </p>
            <p className="ml-7 text-sm text-[#a6a6aa]">
              These keys will allow you to authenticate API requests
            </p>
          </div>
          <button className="mr-7 mt-14 bg-[#1976d2] text-white w-44 h-10 rounded-lg">
            Generate new keys
          </button>
        </div>
        <div className="ml-7 mt-7 flex gap-[18rem]">
          <p className=" text-lg font-bold text-[#3a3a3a]">NAME</p>
          <p className=" text-lg font-bold text-[#3a3a3a]">KEY</p>
        </div>
        <hr />
        <div className="ml-7 mt-7 flex gap-[16rem]">
          <p className=" text-lg  text-[#3a3a3a]">Public key</p>
          <p className=" text-lg text-[#3a3a3a]">
            ******************************
          </p>
          <AiOutlineEye />
        </div>
        <hr />
        <div className="ml-7 mt-7 flex gap-[16rem]">
          <p className=" text-lg text-[#3a3a3a]">Secret key</p>
          <p className=" text-lg text-[#3a3a3a]">
            ******************************
          </p>
          <AiOutlineEye />
        </div>
        <hr />
        <div className="flex justify-between">
          <div>
            <p className="ml-7 text-xl font-bold text-[#3a3a3a] mt-14">
              Webhooks
            </p>
            <p className="ml-7 text-sm text-[#a6a6aa]">
              Below are your preset webhook settings
            </p>
          </div>
          <button className="mr-7 mt-14 bg-[#1976d2] text-white w-44 h-10 rounded-lg">
            Add webhook
            <Image className="inline ml-2" src={plusWhiteImg} alt="pluswhite" />
          </button>
        </div>
        <div className="ml-7 mt-7 flex gap-[18rem]">
          <p className=" text-lg font-bold text-[#3a3a3a]">URL</p>
          <p className=" text-lg font-bold text-[#3a3a3a]">SECRET HASH</p>
        </div>
        <hr />
        <div className="ml-7 mt-7 flex gap-[16rem]">
          <p className=" text-lg  text-[#3a3a3a]">Public key</p>
          <p className=" text-lg text-[#3a3a3a]">
            ******************************
          </p>
          <AiOutlineEye />
        </div>
      </div>
    </div>
  );
};

export default DevelopersDesktop;
