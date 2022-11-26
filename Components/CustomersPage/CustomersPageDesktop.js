import SideBar from "../Helpers/SideBar";
import Image from "next/image";
import filterImg from "../../Assets/filtericon.png";
import noTransactionImg from "../../Assets/NoTransactions.png";
import Modal from "../UI/Modal";
import { useState } from "react";

const CustomersPageDesktop = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const popUpHandler = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <div className="bg-[#212936] flex gap-10 h-[63rem] w-full">
      <SideBar />
      <div className=" w-[65rem] h-[58rem] mr-6 mt-5 bg-white rounded-3xl">
        <p className=" text-xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
          Customers
        </p>
        <div className="flex gap-[20rem]">
          <div className="flex">
            <input
              className="bg-[#f8f7fa] ml-6 mt-9 w-48 h-8 p-5 rounded-xl text-[#afbdd1] text-lg font-medium"
              type={"text"}
              id="search transactions"
              placeholder="Search transaction"
            />
            <button className="bg-[#cbcbd4] ml-6 mt-9 w-24 h-9 text-left pl-2 rounded-xl text-[#3a3a3a] text-lg font-medium">
              Filter <Image className=" inline" src={filterImg} alt="filter" />
            </button>
          </div>
          <div className="flex">
            <button className="bg-[#cbcbd4] ml-6 mt-9 w-24 h-9 rounded-xl text-[#3a3a3a] text-lg font-medium">
              Export
            </button>
            <button
              onClick={popUpHandler}
              className="bg-[#1976d2] ml-6 mt-9 w-52 h-9 rounded-xl text-[#ffffff] text-lg font-medium hover:scale-95 duration-500"
            >
              Create a Customer
            </button>
          </div>
          <button className="bg-[#cbcbd4] ml-6 mt-9 w-24 h-9 rounded-xl text-[#3a3a3a] text-lg font-medium">
            Export
          </button>
        </div>
        <div className="flex justify-around mt-8">
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">Name</p>
          <p className=" text-sm w-36 h-5 font-bold text-[#3a3a3a]">
            Email Address
          </p>
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">Type</p>
          <p className=" text-sm w-6 h-5 font-bold text-[#3a3a3a]">Tier</p>
          <p className=" text-sm w-36 h-5 font-bold text-[#3a3a3a]">
            Date Created
          </p>
        </div>
        <hr className=" h-5 w-[63rem] text-[#a6a6aa] mt-[1rem]" />
        <div className="ml-[40%] mt-[10%] text-xl font-medium text-[#a6a6aa]">
          <Image src={noTransactionImg} alt={noTransactionImg} />
          <div>No Transactions Found</div>
        </div>
      </div>
      {showPopUp && (
        <Modal onClickOverlay={popUpHandler}>
          {" "}
          <h1 className=" h-10 w-72 text-[36px] font-bold text-[##a3a3a] leading-[40px] text-center mx-auto ">
            Create Customer
          </h1>
          <div className=" mt-6">
            <label>First Name</label>
            <input
              className="w-full h-[60px] text-[14px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
              type={"text"}
              id="firstName"
              name="firstName"
            />
          </div>
          <div className=" mt-6">
            <label>Business Name</label>
            <input
              className="w-full h-[60px] text-[14px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
              type={"text"}
              id="business name"
              name="business name"
            />
          </div>
          <div className="mt-6">
            <label>Work Email</label>
            <input
              className=" w-full h-[60px] text-[14px]  bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
              type={"email"}
              id="email"
              name="email"
            />
          </div>
          <div className="mt-6">
            <label>Password</label>
            <input
              className="w-full h-[60px] text-[14px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
              type={"text"}
              id="text"
              name="text"
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

export default CustomersPageDesktop;
