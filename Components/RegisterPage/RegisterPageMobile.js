import Image from "next/image";
import { useRouter } from "next/router";
import icon from "../../Assets/iconmobile.png";

export default function RegisterPageMobile() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/login");
  };

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
          <div className="flex gap-[1.5rem]">
            <div>
              <input
                className=" w-full h-12 sm:h-14 sm:mt-[3rem] text-sm mt-[1.5rem] pl-3 font-normal text-left border border-[#a6a6aa] rounded-[9px] "
                type={"text"}
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                className="w-full mt-[1.5rem] sm:h-14 sm:mt-[3rem]  h-12 text-sm pl-3 font-normal text-left border border-[#a6a6aa] rounded-[9px] "
                type={"text"}
                id="Surname"
                name="Surname"
                placeholder="Surname"
              />
            </div>
          </div>
          <div>
            <input
              required
              className="w-full h-12 mt-[1.5rem] sm:h-14 sm:mt-[3rem]  text-sm pl-3 font-normal text-left border border-[#a6a6aa] rounded-[9px] "
              type={"email"}
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
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
          <div>
            <input
              required
              className="w-full h-12 mt-[1.5rem] sm:h-14 sm:mt-[3rem] text-sm pl-3 font-normal text-left border border-[#a6a6aa] rounded-[9px] "
              type={"email"}
              id="email"
              name="email"
              placeholder="Phone number"
            />
          </div>
          <div className="w-full mt-[1.5rem] sm:mt-[3rem]">
            <input type={"checkbox"} id="terms" name="terms" />
            <label
              className="text-sm font-normal leading-[24px] text-left "
              htmlFor="terms"
            >
              By Signing Up, You Agree to the Terms of Service and Privacy
              Policy
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className="h-12 w-full mt-[1.5rem] sm:h-14 sm:mt-[3rem]  rounded-[4px] text-sm bg-[#28a745] text-[#ffffff] hover:scale-105 duration-500 "
          >
            Sign Up
          </button>
          <p className="h-2 w-full text-sm font-normal mt-[1.5rem] text-[#a6a6aa] text-center  ">
            Have an account?{" "}
            <span className="text-[#28a745]">
              <a href="/">Sign in</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
