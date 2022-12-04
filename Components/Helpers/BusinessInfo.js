import { Fragment, useState } from "react";

const BusinessInfo = (props) => {
  const handleFinish = () => {
    props.onSubmit();
  };

  return (
    <Fragment>
      <div className="w-[70%] lg:w-full h-[58rem] mr-6 mt-5 bg-white rounded-3xl">
        <p className=" text-2xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
          Compliance
        </p>
        <div className="flex gap-[4rem] lg:gap-[8rem]">
          <div className="mt-[4.5rem] ml-[2rem] lg:ml-[8rem]">
            <div className="flex text-center w-full">
              <div className=" h-8 w-8 bg-[#1976d2] text-[#ffffff] inline-block rounded-[50px] relative font-semibold text-lg">
                <span>1</span>
              </div>
              <p className="text-[#cbcbd4] w-40 font-semibold text-lg mb-2">
                Business Profile
              </p>
            </div>
            <div className="flex text-center mt-[3rem] w-full relative">
              <div className="before:absolute before:left-[15px] before:top-[-51px] before:h-[54px] before:w-[3px] before:bg-[#cbcbd4] bg-[#cbcbd4] text-[#ffffff]  h-8 w-8 inline-block rounded-[50px] relative font-semibold text-lg">
                <span>2</span>
              </div>
              <p className="text-[#cbcbd4] w-48 font-semibold text-lg mb-2">
                Upload Documents
              </p>
            </div>
            <div className="flex text-center mt-[3rem]  w-full relative">
              <div className="before:absolute before:left-[15px] before:top-[-51px] before:h-[54px] before:w-[3px] bg-[#cbcbd4] text-[#ffffff] before:bg-[#cbcbd4]  h-8 w-8 inline-block rounded-[50px] relative font-semibold text-lg">
                <span>3</span>
              </div>
              <p className=" w-32 font-semibold text-[#cbcbd4] text-lg mb-2">
                User Profile
              </p>
            </div>
            <div className="flex text-center mt-[3rem]  w-full relative">
              <div className=" before:absolute before:left-[15px] before:top-[-51px] before:h-[54px] before:w-[3px] before:bg-[#cbcbde] text-[#ffffff] h-8 w-8 bg-[#cbcbd4] inline-block rounded-[50px] relative font-semibold text-lg">
                <span>4</span>
              </div>
              <p className=" w-16 font-semibold text-[#cbcbd4] text-lg mb-2">
                Finish
              </p>
              <div></div>
            </div>
          </div>
          <div className="h-[40rem] w-[29rem] mt-10">
            <h1 className=" h-36 w-[36rem] mt-2 text-2xl font-extrabold text-[#3a3a3a] leading-[40px] text-left ">
              Tell us about your business
            </h1>
            <div className="mt-[-5rem]">
              <label className="text-[#3a3a3a]">Business name</label>
              <br />
              <input
                className=" w-[75%] lg:w-[90%] xl:w-[100%] h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
                type={"text"}
                id="business name"
                name="business name"
              />
            </div>
            <div className="mt-7">
              <label className="text-[#3a3a3a]">Business Reg Number</label>
              <br />
              <input
                className="w-[75%] lg:w-[90%]  xl:w-[100%] h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="reg name"
                name="reg name"
              />
            </div>
            <div className="mt-7">
              <label className="text-[#3a3a3a]">Business Website</label>
              <br />
              <input
                className="w-[75%] lg:w-[90%]  xl:w-[100%] h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="text"
                name="text"
              />
            </div>
            <div className="mt-7">
              <label className="text-[#3a3a3a] w-full">Business Address</label>
              <br />
              <input
                className="w-[75%] lg:w-[90%] xl:w-[100%] h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="address"
                name="address"
                placeholder="Select  an Option"
              />
            </div>
            <div className="mt-7">
              <label className="text-[#3a3a3a] w-full">
                Choose business type
              </label>
              <br />
              <input
                className="w-[75%] lg:w-[90%] xl:w-[100%] h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="business type"
                name="business type"
                placeholder="Select Industry"
              />
            </div>
            <div className="mt-7">
              <label className="text-[#3a3a3a] w-full">Description</label>
              <br />
              <input
                className="w-[75%] lg:w-[90%]  xl:w-[100%] h-[6rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="description"
                name="description"
                placeholder="Select Industry"
              />
            </div>
            <button
              onClick={handleFinish}
              className="h-[3.5rem] w-[75%]  lg:w-[90%] xl:w-[100%] mt-8 rounded-[10px] text-[24px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 "
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BusinessInfo;
