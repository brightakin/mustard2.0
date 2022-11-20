import blackCardImg from "../../Assets/blackcard.png";
import Image from "next/image";
import circleLinesImg from "../../Assets/circlelines.png";

export default function RegisterPageDesktop() {
  return (
    <div className="flex w-full h-[86rem] gap-32">
      <div className="w-[33rem] h-[86rem] bg-[#000000]">
        <Image className="mt-[10rem]" src={blackCardImg} alt="blackcard" />
        <Image className="z-10 " src={circleLinesImg} alt="circlelines" />
      </div>
      <div className="h-[68rem] w-[49rem] mt-56 mr-10">
        <h1 className=" h-10 w-72 text-[40px] font-normal text-[##a3a3a] leading-[40px] text-center ">
          Create Account
        </h1>
        <p className=" h-8 w-[27rem] mt-6 text-[24px] font-normal text-[#a6a6aa] text-left ">
          To get started, setup your account below
        </p>
        <div className="flex gap-5 mt-14">
          <div>
            <label>First Name</label>
            <input
              className="w-[334px] h-[72px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
              type={"text"}
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              className=" w-[334px] h-[72px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
              type={"text"}
              id="Surname"
              name="Surname"
              placeholder="Surname"
            />
          </div>
        </div>
        <div className="flex gap-5 mt-14">
          <div>
            <label>Business Name</label>
            <input
              className="w-[334px] h-[72px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
              type={"text"}
              id="business name"
              name="business name"
              placeholder="Business Name"
            />
          </div>
          <div>
            <label>Registration Country</label>
            <input
              className="w-[334px] h-[72px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px]"
              type={"text"}
              id="country"
              name="country"
              placeholder="Country"
            />
          </div>
        </div>

        <div className="mt-14">
          <label>Work Email</label>
          <input
            className=" w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
            type={"email"}
            id="email"
            name="email"
            placeholder="email"
          />
        </div>
        <div className="mt-14">
          <label>Password</label>
          <input
            className="w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
            type={"text"}
            id="text"
            name="text"
            placeholder="Password"
          />
        </div>
        <p className=" h-[24px] w-[350px] mt-14 text-[24px] font-normal leading-[24px] text-[#3a3a3a] text-right  ">
          Already Have an account?
          <span className="text-[#fdbc1f]">
            <a href="/">Sign in</a>
          </span>
        </p>
        <button className="h-[80px] w-[717px] mt-8 rounded-[10px] text-[28px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 ">
          Create Account
        </button>
        <div className="w-[723px] h-[24px] mt-8 ">
          <input type={"checkbox"} id="terms" name="terms" />
          <label
            className="text-[20px] font-normal leading-[24px] text-left "
            htmlFor="terms"
          >
            By Signing Up, You Agree to the{" "}
            <span className="text-[#fdbc1f]">Terms of Service</span> and{" "}
            <span className="text-[#fdbc1f]">Privacy Policy</span>
          </label>
        </div>
      </div>
    </div>
  );
}
