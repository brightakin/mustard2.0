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
        <p className=" text-xl font-medium ml-4 mt-20 w-44 h-6 text-[#afbdd1]">
          Sam Eniola
        </p>
        <p className="w-44 h-6 text-lg font-light text-[#afbdd1] ml-4 mt-1">
          Mustard Ltd
        </p>
      </div>
      <div className="border-b border-[#313c4e] pb-5">
        <Link href="/dashboard">
          <p className=" h-4 w-36 ml-16 mt-4  text-[#56657f] text-sm hover:translate-x-2 duration-500">
            <Image className="inline" src={addImg} alt="add" /> Compliance
          </p>
        </Link>
        <Link href="/transactions">
          {" "}
          <p className="h-4 w-36 ml-16 mt-8 text-[#56657f] text-sm hover:translate-x-2 duration-500">
            <Image className="inline" src={messageImg} alt="message" />
            Transactions
          </p>
        </Link>
        <Link href="/customers">
          <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] text-sm hover:translate-x-2 duration-500">
            <Image className="inline" src={peopleImg} alt="people" /> Customers
          </p>
        </Link>
        <Link href="/cards">
          <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] text-sm hover:translate-x-2 duration-500">
            <Image className="inline" src={creditCardImg} alt="credit-card" />{" "}
            Cards
          </p>
        </Link>
        <button
          onClick={handleToggle}
          className="h-4 w-36 ml-14 mt-7 text-[#56657f] text-sm hover:translate-x-2 duration-500"
        >
          <Image className="inline" src={walletImg} alt="wallet" /> Wallet{" "}
          {toggleDropdown && <span className="ml-12">&#x25B2;</span>}
          {!toggleDropdown && <span className="ml-12">&#x25BC;</span>}
        </button>
        {toggleDropdown && (
          <Link href="/wallet">
            <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] transition-all ease-in text-sm hover:translate-x-2 duration-500">
              Wallet
            </p>
          </Link>
        )}
        {toggleDropdown && (
          <Link href="/wallet">
            <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] transition-all ease-in  text-sm hover:translate-x-2 duration-500">
              Balance History
            </p>
          </Link>
        )}
      </div>
      <div>
        <p className="text-[#56657f] text-sm ml-4">Settings</p>
        <Link href="/settings">
          <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] text-sm hover:translate-x-2 duration-500">
            <Image className="inline" src={settingImg} alt="setting" /> Main
            Settings
          </p>
        </Link>
        <Link href="/developer">
          <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] text-sm hover:translate-x-2 duration-500">
            <Image className="inline" src={addImg} alt="add" /> Developer
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
