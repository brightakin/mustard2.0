const InfoPageDesktop = () => {
  return (
    <div className="w-full">
      <div className="h-[68rem] w-[49rem] mt-40 mx-auto">
        <p className="text-[30px] font-medium">
          <span className="text-[#fdbc1f]">&#x2190; </span> Back
        </p>
        <h1 className=" h-36 w-[36rem] mt-10 text-[40px] font-extrabold text-[#3a3a3a] leading-[40px] text-left ">
          Tell us about you business
        </h1>
        <div>
          <label className="text-[#3a3a3a]">Business name</label>
          <input
            className=" w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
            type={"text"}
            id="business name"
            name="business name"
            placeholder="Agba Designer Ltd"
          />
        </div>
        <div className="mt-14">
          <label className="text-[#3a3a3a]">Phone Number</label>
          <input
            className="w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
            type={"number"}
            id="phone number"
            name="phone number"
            placeholder="070..."
          />
        </div>
        <div className="mt-14">
          <label className="text-[#3a3a3a]">Work email address</label>
          <input
            className="w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
            type={"email"}
            id="email"
            name="email"
            placeholder="sam@mustard.ng"
          />
        </div>
        <div className="mt-14">
          <label className="text-[#3a3a3a] w-full">Country...</label>
          <input
            className="w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
            type={"text"}
            id="country"
            name="country"
            placeholder="Select an option"
          />
        </div>
        <button className="h-[80px] w-[717px] mt-8 rounded-[10px] text-[28px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 ">
          Login
        </button>
        <p className=" h-[24px] w-full mt-14 text-[24px] font-normal leading-[24px] text-[#3a3a3a] text-left">
          Forgot your password?
          <span className="text-[#fdbc1f]">
            <a href="/">Reset Password</a>
          </span>
        </p>
        <p className=" h-[24px] w-full mt-14 text-[24px] font-normal leading-[24px] text-[#3a3a3a] text-left  ">
          Don’t have an account?
          <span className="text-[#fdbc1f]">
            <a href="/">Create Account</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default InfoPageDesktop;
