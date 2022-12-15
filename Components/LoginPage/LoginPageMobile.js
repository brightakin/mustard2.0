import Image from "next/image";
import icon from "../../Assets/iconmobile.png";

const LoginPageMobile = () => {
  return (
    <div className="containermobile">
      <div className="layermobile">
        <div className="bg-white w-full h-[42rem] sm:h-[55rem] pt-[2rem] px-[1rem] rounded-[50px] mt-8 sm:mt-[6rem]">
          <div className="flex justify-between">
            <h1 className="text-xl sm:text-3xl w-full h-3 font-bold text-[#000000] text-left ">
              Welcome to Mustard!
            </h1>
            <Image src={icon} alt="" />
          </div>
          <p className=" text-sm mt-[2rem] h-4 w-[20rem] font-normal text-[#a6a6aa] text-left ">
            Enter your details below marching your valid ID.
          </p>
          <div>
            <input
              required
              className="w-full h-12 mt-[1.5rem] sm:h-14 sm:mt-[3rem]  text-sm pl-3 font-normal text-left border border-[#a6a6aa] rounded-[9px] "
              type={"email"}
              id="email"
              name="email"
              placeholder="Phone number"
            />
          </div>
          <div>
            <input
              required
              className="w-full h-12 mt-[1.5rem] sm:h-14 sm:mt-[3rem] text-sm pl-3 font-normal text-left border border-[#a6a6aa] rounded-[9px] "
              type={"email"}
              id="email"
              name="email"
              placeholder="Password"
            />
          </div>
          <div className="w-full mt-[1.5rem] sm:mt-[3rem]">
            <input type={"checkbox"} id="terms" name="terms" />
            <label
              className="text-sm text-[#a6a6aa] font-normal leading-[24px] text-left "
              htmlFor="terms"
            >
              Remember Me
            </label>
          </div>
          <button className="h-12 w-full mt-[1.5rem] sm:h-14 sm:mt-[3rem]  rounded-[4px] text-sm bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 ">
            Sign In
          </button>
          <p className="h-2 w-full text-sm font-normal mt-[1.5rem] text-[#a6a6aa] text-center  ">
            Forgot Password?{" "}
            <span className="text-[#28a745]">
              <a href="/">Reset here</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPageMobile;
