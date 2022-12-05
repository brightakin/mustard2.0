import SideBar from "../Helpers/SideBar";
import Image from "next/image";
import ngnFlagImg from "../../Assets/ngnflag.png";
import usdFlagImg from "../../Assets/usdflag.png";
import arrowDownImg from "../../Assets/arrowdown.png";
import Modal from "../UI/Modal";
import { useState } from "react";

const WalletPageDesktop = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const popUpHandler = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <div className="bg-[#212936] flex gap-10 h-[63rem] w-full">
      <SideBar />
      <div className="w-[45rem] lg:w-[65rem] h-[58rem] mr-6 mt-5 bg-white rounded-3xl">
        <p className=" text-xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
          Wallet
        </p>
        <div className="flex mt-16">
          <div className="border-r-2 h-[40rem] border-[#cbcbd4] p-5">
            <div className="flex gap-12 lg:gap-20 xl:gap-40">
              <div className="flex gap-4">
                <Image src={usdFlagImg} alt="usdflag" />
                <p className=" w-28 h-6 text-base xl:text-lg mt-2 font-extrabold">
                  USD Wallet
                </p>
              </div>
              <button className="bg-[#cbcbd4] pt-1 w-28 xl:w-36 h-9 text-left pl-2 rounded-lg text-[#3a3a3a] text-base xl:text-lg font-medium">
                <p>Fund Wallet</p>
              </button>
            </div>
            <hr className=" mt-6" />
            <div className="flex mt-6 gap-32 xl:gap-72">
              <p className="text-[#3a3a3a] text-base xl:text-xl">
                Available Balance
              </p>
              <p className="text-[#3a3a3a] text-base xl:text-xl">USD 0.00</p>
            </div>
            <div className="flex mt-6 gap-[7.5rem] xl:gap-[17.4rem]">
              <p className="text-[#3a3a3a] text-base xl:text-xl">
                Collection Balance
              </p>
              <p className="text-[#3a3a3a] text-base xl:text-xl">USD 0.00</p>
            </div>
            <div className="flex mt-16 gap-12 lg:gap-16 xl:gap-40">
              <div className="flex gap-4">
                <Image src={ngnFlagImg} alt="usdflag" />
                <p className=" w-32 xl:w-28 h-6 text-base xl:text-lg mt-2 font-extrabold">
                  NGN Wallet
                </p>
              </div>
              <button className="bg-[#cbcbd4] pt-1 w-28 xl:w-36 h-9 text-left pl-2 rounded-lg text-[#3a3a3a] text-base xl:text-lg font-medium">
                <p>Fund Wallet</p>
              </button>
            </div>
            <hr className=" mt-6" />
            <div className="flex mt-6 gap-32 xl:gap-72">
              <p className="text-[#3a3a3a] text-base xl:text-xl">
                Available Balance
              </p>
              <p className="text-[#3a3a3a] text-base xl:text-xl">NGN 0.00</p>
            </div>
            <div className="flex mt-6 gap-32 xl:gap-72">
              <p className="text-[#3a3a3a] text-base xl:text-xl">
                Collection Balance
              </p>
              <p className="text-[#3a3a3a] text-base xl:text-xl">NGN 0.00</p>
            </div>
          </div>
          <div className=" ml-6 xl:ml-10">
            <p className=" text-xl text-[#3a3a3a] font-extrabold">Converter</p>
            <p className=" text-sm text-[#a6a6aa] mt-2 ">Convert your money</p>
            <div className=" w-[16rem] lg:w-[22rem] xl:w-[24rem] h-[7rem] rounded-2xl border p-2 border-[#cbcbd4] mt-4">
              <p className="text-sm text-[#a6a6aa]">You send</p>
              <div className="flex gap-[8rem] lg:gap-[15rem] mt-2">
                <p className="text-[#3a3a3a] text-2xl font-extrabold">10</p>
                <select className="bg-[#3a3a3a] flex gap-3 w-20 h-9 text-left pl-2 rounded-lg text-[#ffffff] text-sm font-medium">
                  <option>USD</option>
                  <option>NGN</option>
                  <option>XAF</option>
                  <option>KES</option>
                  <option>GHS</option>
                </select>
              </div>
            </div>
            <div className="w-[16rem] lg:w-[22rem] mr-4 xl:w-[24rem] h-[7rem] rounded-2xl border p-2 border-[#cbcbd4] mt-10">
              <p className="text-sm text-[#a6a6aa]">Recipient gets</p>
              <div className="flex gap-[6rem] lg:gap-[11rem] mt-2">
                <p className="text-[#3a3a3a] text-2xl font-extrabold">
                  6,000.00
                </p>
                <button className="bg-[#3a3a3a] flex gap-3 pt-2 w-20 h-9 text-left pl-2 rounded-lg text-[#ffffff] text-sm font-medium">
                  <p>USD</p>
                </button>
              </div>
            </div>
            <p className="text-[#1976d2] italic text-xl font-bold">
              1usd = 600 NGN
            </p>
            <button
              onClick={popUpHandler}
              className="h-[60px] w-[16rem] lg:w-[22rem] xl:w-[24rem] mt-8 rounded-[10px] text-[24px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 "
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {showPopUp && (
        <Modal onClickOverlay={popUpHandler}>
          {" "}
          <h1 className=" h-10 w-72 text-[30px] font-bold text-[##a3a3a] leading-[40px] text-center mx-auto ">
            Convert
          </h1>
          <p className=" text-lg text-[#a6a6aa] pt-5">You are converting</p>
          <p className=" text-xl font-bold text-[#3a3a3a] pt-3">10 USD</p>
          <p className=" text-lg text-[#a6a6aa] pt-5">To</p>
          <p className=" text-xl font-bold text-[#3a3a3a] pt-3">6,000.00 NGN</p>
          <div className="flex justify-between mt-9">
            <p className=" text-xl font-bold text-[#3a3a3a]">Paying from</p>
            <p className="text-xl text-[#3a3a3a]">USD Wallet</p>
          </div>
          <hr className=" mt-5" />
          <div className="flex justify-between mt-9">
            <p className=" text-xl font-bold text-[#3a3a3a]">Recipient</p>
            <p className="text-xl text-[#3a3a3a]">NGN Wallet</p>
          </div>
          <div className="flex justify-between">
            <button className="h-[50px] w-[45%] mt-8 rounded-[10px] text-[24px] bg-[#a6a6aa] text-[#3a3a3a] hover:scale-105 duration-500 ">
              Cancel
            </button>
            <button className="h-[50px] w-[45%] mt-8 rounded-[10px] text-[24px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 ">
              Confirm
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default WalletPageDesktop;
