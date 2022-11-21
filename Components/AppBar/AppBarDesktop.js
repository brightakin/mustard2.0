import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AppBarDesktop = () => {
  const router = useRouter();
  const signUpHandler = () => {
    router.push("/register");
  };

  const loginHandler = () => {
    router.push("/login");
  };

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[80px]">
      <div
        className={`h-[80px] flex justify-around gap-[20rem] pr-10 transition-all ease-in-out delay-1000 z-30 w-full bg-[#000000] ${
          scrolled ? "fixed" : ""
        }`}
      >
        <div></div>
        <ul className="flex mt-5 ml-[7rem]">
          <li className="  h-[34px] w-[110px] text-[#f8f7fa] text-[16px] font-bold leading-[32px] text-center ">
            <a href="/">Tools</a>
          </li>
          <li className=" h-[34px] w-[110px] text-[#f8f7fa] text-[16px] font-bold leading-[32px] text-center ">
            <a href="/">Resources</a>
          </li>
          <li className=" h-[34px] w-[110px] text-[#f8f7fa] text-[16px] font-bold leading-[32px] text-center ">
            <a href="/">Pricing</a>
          </li>
        </ul>
        <div className="flex justify-around mt-3 gap-[1rem]">
          <button
            onClick={loginHandler}
            className="w-32 h-14 rounded-[10px] hover:scale-105 duration-500 border-2 border-[#3a3a3a] bg-black text-[14px] font-bold text-[#f8f7fa] "
          >
            Sign In
          </button>
          <button
            onClick={signUpHandler}
            className="h-14 w-32 rounded-[10px] hover:scale-105 duration-500 bg-[#f8f7fa] text-[14px] font-bold text-[#000000] "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBarDesktop;
