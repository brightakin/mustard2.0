import { useEffect, useState } from "react";
import hamburgerImg from "../../Assets/hamburger.png";
import Image from "next/image";

const AppBarMobile = () => {
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
    <div className="h-[2rem]">
      <div
        className={`flex transition-all z-30 justify-between w-full pt-5 px-3 h-[5rem] bg-[#000000] ${
          scrolled ? "fixed" : ""
        }`}
      >
        <div></div>
        <Image className="h-4 w-6 " src={hamburgerImg} alt="hamburger" />
      </div>
    </div>
  );
};

export default AppBarMobile;
