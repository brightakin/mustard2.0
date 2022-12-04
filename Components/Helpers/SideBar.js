import Link from "next/link";
import addImg from "../../Assets/add.png";
import atmImg from "../../Assets/atm.png";
import messageImg from "../../Assets/message.png";
import creditCardImg from "../../Assets/credit-card.png";
import walletImg from "../../Assets/wallet.png";
import settingImg from "../../Assets/settings.png";
import Image from "next/image";
import peopleImg from "../../Assets/people.png";
import WalletDropdown from "./WalletDropdown";
import { useState } from "react";

const SideBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const handleToggle = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <div className=" w-64 h-full border-r-2 border-[#313c4e]">
      <div className=" border-b border-[#313c4e]">
        <p className=" text-xl font-medium ml-4 mb-5 mt-20 w-44 h-6 text-[#afbdd1]">
          User:#1233d4
        </p>
      </div>
      <div className="border-b border-[#313c4e] pb-5">
        <Link
          className=" h-4 w-36 ml-2 mt-4 flex gap-[2rem]  text-[#56657f] text-sm hover:translate-x-2 duration-500"
          href="/dashboard"
        >
          <Image src={addImg} alt="add" />
          <p>Compliance</p>
        </Link>
        <Link
          className="h-4 w-36 ml-2 mt-8 flex gap-[2rem] text-[#56657f] text-sm hover:translate-x-2 duration-500"
          href="/transactions"
        >
          {" "}
          <Image src={messageImg} alt="message" />
          <p>Transactions</p>
        </Link>
        <Link
          className="h-4 w-36 ml-2 mt-8 flex gap-[2rem] text-[#56657f] text-sm hover:translate-x-2 duration-500"
          href="/customers"
        >
          <Image src={peopleImg} alt="people" />
          <p>Customers</p>
        </Link>
        <Link
          className="h-4 w-36 ml-2 mt-8 flex gap-[2rem] text-[#56657f] text-sm hover:translate-x-2 duration-500"
          href="/cards"
        >
          <Image src={creditCardImg} alt="credit-card" />
          <p>Cards</p>
        </Link>
        <button
          onClick={handleToggle}
          className="h-4 w-36 ml-2 mt-8 flex gap-[2.5rem] lg:gap-[2rem] text-[#56657f] text-sm hover:translate-x-2 duration-500"
        >
          <Image className="w-52 inline" src={walletImg} alt="wallet" /> Wallet{" "}
          {toggleDropdown && <span className="ml-8">&#x25B2;</span>}
          {!toggleDropdown && <span className="ml-8">&#x25BC;</span>}
        </button>
        {toggleDropdown && (
          <Link href="/wallet">
            <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] transition-all ease-in text-sm hover:translate-x-2 duration-500">
              Wallet
            </p>
          </Link>
        )}
        {toggleDropdown && (
          <Link href="/history">
            <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] transition-all ease-in  text-sm hover:translate-x-2 duration-500">
              Balance History
            </p>
          </Link>
        )}
      </div>
      <div>
        <p className="text-[#38455c] mt-4 text-lg ml-4">Settings</p>
        <Link
          className="h-4 w-36 ml-2 mt-8 flex gap-[2rem] text-[#56657f] text-sm hover:translate-x-2 duration-500"
          href="/settings"
        >
          <Image src={settingImg} alt="setting" />
          <p>Main Settings</p>
        </Link>
        <Link
          className="h-4 w-36 ml-2 mt-8 flex gap-[2rem] text-[#56657f] text-sm hover:translate-x-2 duration-500"
          href="/developers"
        >
          <Image src={addImg} alt="add" />
          <p>Developer</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
