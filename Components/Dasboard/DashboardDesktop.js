import addImg from "../../Assets/add.png";
import atmImg from "../../Assets/atm.png";
import messageImg from "../../Assets/message.png";
import creditCardImg from "../../Assets/credit-card.png";
import peopleImg from "../../Assets/people.png";
import settingImg from "../../Assets/settings.png";
import Image from "next/image";

const DashboardDesktop = () => {
  return (
    <div className="bg-[#212936] h-[102rem] w-full">
      <div className="flex gap-10">
        <div className=" w-64 h-[70rem] border-r-2 border-[#313c4e]">
          <div className=" border-b border-[#313c4e]">
            <p className=" text-xl font-medium ml-4 mt-48 w-44 h-6 text-[#afbdd1]">
              Sam Eniola
            </p>
            <p className=" w-44 h-6 text-lg font-light text-[#afbdd1] ml-4 mt-1">
              Mustard Ltd
            </p>
          </div>
          <div className="border-b border-[#313c4e] pb-5">
            <div>
              <p className=" h-4 w-36 ml-16 mt-4  text-[#56657f] text-sm">
                <Image className="inline" src={addImg} alt="add" /> Compliance
              </p>
            </div>

            <p className="h-4 w-36 ml-16 mt-8 text-[#56657f] text-sm">
              <Image className="inline" src={messageImg} alt="message" />
              Transactions
            </p>
            <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] text-sm">
              <Image className="inline" src={creditCardImg} alt="credit card" />{" "}
              Card
            </p>
            <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] text-sm">
              <Image className="inline" src={messageImg} alt="message" /> Wallet
            </p>
          </div>
          <div>
            <p className="text-[#56657f] text-sm ml-4">Settings</p>
            <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] text-sm">
              <Image className="inline" src={settingImg} alt="setting" /> Main
              Settings
            </p>
            <p className="h-4 w-36 ml-16 mt-7 text-[#56657f] text-sm">
              <Image className="inline" src={addImg} alt="add" /> Developer
            </p>
          </div>
        </div>
        <div className=" w-[70rem] h-[97rem] mr-6 mt-10 bg-white rounded-3xl">
          <p className=" text-4xl w-40 h-6 font-bold mt-14 ml-7 text-[#3a3a3a]">
            Compliance
          </p>
          <div className="h-[68rem] w-[49rem] mt-40 mx-auto">
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
              />
            </div>
            <div className="mt-14">
              <label className="text-[#3a3a3a]">Business Reg Number</label>
              <input
                className="w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="reg name"
                name="reg name"
              />
            </div>
            <div className="mt-14">
              <label className="text-[#3a3a3a]">Business Website</label>
              <input
                className="w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="text"
                name="text"
              />
            </div>
            <div className="mt-14">
              <label className="text-[#3a3a3a] w-full">Business Address</label>
              <input
                className="w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="address"
                name="address"
                placeholder="Select  an Option"
              />
            </div>
            <div className="mt-14">
              <label className="text-[#3a3a3a] w-full">
                Choose business type
              </label>
              <input
                className="w-[717px] h-[73px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="business type"
                name="business type"
                placeholder="Select Industry"
              />
            </div>
            <div className="mt-14">
              <label className="text-[#3a3a3a] w-full">Description</label>
              <input
                className="w-[717px] h-[215px] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="description"
                name="description"
                placeholder="Select Industry"
              />
            </div>
            <button className="h-[80px] w-[717px] mt-8 rounded-[10px] text-[28px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 ">
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDesktop;
