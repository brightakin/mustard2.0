const FinishCompliance = () => {
  return (
    <div className="w-[45rem] lg:w-[57rem] xl:w-[70rem] h-[43rem] mr-6 mt-5 bg-white rounded-3xl">
      <p className=" text-2xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
        Compliance
      </p>
      <div className="flex gap-[2rem] lg:gap-[4rem]">
        <div className="mt-[4.5rem] ml-[2rem] lg:ml-[8rem]">
          <div className="flex text-center w-full">
            <div className=" h-8 w-8 bg-[#000] text-[#ffffff] inline-block rounded-[50px] relative font-semibold text-lg">
              <span>&#10004;</span>
            </div>
            <p className="text-[#cbcbd4] w-40 font-semibold text-lg mb-2">
              Business Profile
            </p>
          </div>
          <div className="flex text-center mt-[3rem] w-full relative">
            <div className="before:absolute before:left-[15px] before:top-[-53px] before:h-[54px] before:w-[3px] before:bg-[#cbcbd4] bg-[#000] text-[#ffffff]  h-8 w-8 inline-block rounded-[50px] relative font-semibold text-lg">
              <span>&#10004;</span>
            </div>
            <p className="text-[#cbcbd4] w-48 font-semibold text-lg mb-2">
              Upload Documents
            </p>
          </div>
          <div className="flex text-center mt-[3rem]  w-full relative">
            <div className="before:absolute before:left-[15px] before:top-[-53px] before:h-[54px] before:w-[3px] bg-[#000] text-[#ffffff] before:bg-[#cbcbd4]  h-8 w-8 inline-block rounded-[50px] relative font-semibold text-lg">
              <span>&#10004;</span>
            </div>
            <p className=" w-32 font-semibold text-[#cbcbd4] text-lg mb-2">
              User Profile
            </p>
          </div>
          <div className="flex text-center mt-[3rem]  w-full relative">
            <div className=" before:absolute before:left-[15px] before:top-[-53px] before:h-[54px] before:w-[3px] before:bg-[#cbcbde] text-[#ffffff] h-8 w-8 bg-[#000] inline-block rounded-[50px] relative font-semibold text-lg">
              <span>&#10004;</span>
            </div>
            <p className=" w-16 font-semibold text-[#cbcbd4] text-lg mb-2">
              Finish
            </p>
            <div></div>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-medium">
            <span className="text-[#1976d2]">&#x2190;</span>Back
          </p>
          <p className="h-10 w-[36rem] mt-[2rem] text-2xl font-extrabold text-[#3a3a3a] leading-[40px]">
            All Done!
          </p>
          <button className="h-[3.5rem] w-[68%] lg:w-[80%] xl:w-[95%] rounded-[10px] text-[24px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 ">
            Go to Dashhboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishCompliance;
