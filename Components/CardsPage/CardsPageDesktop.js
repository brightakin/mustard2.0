import SideBar from "../Helpers/SideBar";
import Image from "next/image";
import filterImg from "../../Assets/filtericon.png";
import noTransactionImg from "../../Assets/NoTransactions.png";
import Modal from "../UI/Modal";
import { useState } from "react";
import CustomersList from "../Helpers/CustomersLIst";
import CardsList from "../Helpers/CardsList";

const CardsPageDesktop = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const popUpHandler = () => {
    setShowPopUp(!showPopUp);
  };
  return (
    <div className="bg-[#212936] flex gap-10 h-[63rem] w-full">
      <SideBar />
      <div className="w-[39.5rem] lg:w-[48rem] xl:w-[62rem] h-[58rem] mr-6 mt-5 bg-white rounded-3xl">
        <p className=" text-xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
          Cards
        </p>
        <div className="flex gap-[4rem] lg:gap-[8rem] xl:gap-[18rem]">
          <div className="flex">
            <input
              className="bg-[#f8f7fa] ml-6 mt-9 w-48 h-8 p-5 rounded-xl text-[#afbdd1] text-lg font-medium"
              type={"text"}
              id="search transactions"
              placeholder="Search transaction"
            />
            <button className="bg-[#cbcbd4] gap-4 pt-1 flex ml-6 mt-9 w-24 h-9 text-left pl-2 rounded-xl text-[#3a3a3a] text-lg font-medium">
              <p>Filter</p>
              <Image className="pt-1" src={filterImg} alt="filter" />
            </button>
          </div>
          <div className="flex">
            <button className="bg-[#cbcbd4] ml-6 mt-9 w-16 lg:w-20 xl:w-24 h-9 rounded-xl text-[#3a3a3a] text-xs lg:text-base xl:text-lg font-medium">
              Export
            </button>
            <button
              onClick={popUpHandler}
              className="bg-[#1976d2] ml-6 mt-9 w-28 xl:w-52 h-9 rounded-xl text-[#ffffff] text-xs lg:text-base xl:text-lg font-medium hover:scale-95 duration-500"
            >
              Create a Card
            </button>
          </div>
        </div>
        <div className="flex ml-4 gap-[10rem] lg:gap-[12rem] xl:gap-[16rem] mt-8">
          <p className=" text-sm w-36 h-5 font-bold text-[#3a3a3a]">
            Card Holder
          </p>
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">Balance</p>
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">Type</p>
          <p className=" text-sm w-36 h-5 font-bold text-[#3a3a3a]">Date</p>
        </div>
        <hr className=" h-5 w-full text-[#a6a6aa] mt-[1rem]" />
        <div className="ml-[40%] mt-[10%] text-xl font-medium text-[#a6a6aa]">
          <Image src={noTransactionImg} alt={noTransactionImg} />
          <div>No Cards Found</div>
        </div>
        <CardsList />
      </div>
      {showPopUp && (
        <Modal onClickOverlay={popUpHandler}>
          {" "}
          <h1 className=" h-10 w-72 text-[36px] font-bold text-[##a3a3a] leading-[40px] text-center mx-auto ">
            Create a Card
          </h1>
          <div className=" mt-6">
            <label>Select Customer</label>
            <input
              className="w-full h-[60px] text-[14px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
              type={"text"}
              id="firstName"
              name="firstName"
              placeholder="Select an Option"
            />
          </div>
          <div className=" mt-6">
            <label>Select Currency</label>
            <input
              className="w-full h-[60px] text-[14px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
              type={"text"}
              id="business name"
              name="business name"
              placeholder="Select an Option"
            />
          </div>
          <button className="h-[60px] w-full mt-8 rounded-[10px] text-[24px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 ">
            Create Account
          </button>
        </Modal>
      )}
    </div>
  );
};

export default CardsPageDesktop;
