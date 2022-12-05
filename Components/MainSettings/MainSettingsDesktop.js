import Image from "next/image";
import filterImg from "../../Assets/filtericon.png";
import noTransactionImg from "../../Assets/NoTransactions.png";
import TransactionsList from "../Helpers/TransactionsList";
import SideBar from "../Helpers/SideBar";
import HistoryList from "../Helpers/HistoryList";
import shieldImg from "../../Assets/shield.png";
import avatarImg from "../../Assets/avatar.png";

const MainSettingsDesktop = () => {
  return (
    <div className="bg-[#212936] flex gap-10 h-[88rem] w-full">
      <SideBar />
      <div className=" w-[56rem] xl:w-[68rem] h-[80rem] mr-5 mt-5 bg-white rounded-3xl">
        <p className=" text-lg lg:text-xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
          Main Settings
        </p>
        <p className="ml-7 text-base lg:text-lg mt-16 text-[#1976d2] font-bold">
          Profile
        </p>
        <hr />
        <div className="flex gap-[8rem] xl:gap-[13rem]">
          <div className=" ml-10 mt-16">
            <p className=" text-sm lg:text-lg font-bold">
              <Image className="inline mr-3" src={avatarImg} alt="avatar" />{" "}
              Personal information
            </p>
            <p className=" text-sm lg:text-lg font-bold mt-52">
              <Image className="inline mr-3" src={shieldImg} alt="shield" />{" "}
              Password
            </p>
            <p className="text-sm lg:text-lg font-bold mt-52">
              <Image className="inline mr-3" src={avatarImg} alt="avatar" />{" "}
              Business info
            </p>
          </div>
          <div className="h-[40rem] w-[20rem] lg:w-[29rem] mt-[2rem]">
            <div className="flex lg:gap-5 mt-8">
              <div>
                <label className="text-sm lg:text-lg text-[#3a3a3a]">
                  First Name
                </label>
                <input
                  className="w-[9rem] lg:w-[12.5rem] xl:w-[15rem] h-[3rem] text-[14px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
                  type={"text"}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="text-sm lg:text-lg text-[#3a3a3a]">
                  Last Name
                </label>
                <input
                  className="w-[9rem] lg:w-[12.5rem] xl:w-[15rem]  h-[3rem] text-[14px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
                  type={"text"}
                  id="Surname"
                  name="Surname"
                  placeholder="Surname"
                />
              </div>
            </div>
            <div className="mt-7">
              <label className="text-sm lg:text-lg text-[#3a3a3a]">Email</label>
              <br />
              <input
                className="w-[19rem] lg:w-[27.5rem] xl:w-[31rem] h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal text-left  rounded-[15px] "
                type={"email"}
                id="email"
                name="email"
                placeholder="eniolaogunremi255@gmail.com"
              />
            </div>
            <div className=" mt-16">
              <label className="text-sm lg:text-lg text-[#3a3a3a]">
                Old Password
              </label>
              <br />
              <input
                className="w-[9rem] lg:w-[15.5rem] xl:w-[17rem]  h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                type={"text"}
                id="text"
                name="text"
              />
            </div>
            <div className="flex gap-2 lg:gap-5 mt-8">
              <div>
                <label className="text-sm lg:text-lg text-[#3a3a3a]">
                  New Password
                </label>
                <input
                  className="w-[9rem] lg:w-[12.5rem] xl:w-[15rem]  h-[3rem] text-[14px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
                  type={"password"}
                  id="password"
                  name="password"
                  placeholder="New Password"
                />
              </div>
              <div>
                <label className="text-sm lg:text-lg text-[#3a3a3a]">
                  Confirm Password
                </label>
                <input
                  className="w-[9rem] lg:w-[12.5rem] xl:w-[15rem]  h-[3rem] text-[14px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left rounded-[15px] "
                  type={"password"}
                  id="password"
                  name="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="flex lg:gap-5 mt-8">
              <div className="mt-7">
                <label className="text-sm lg:text-lg text-[#3a3a3a]">
                  Business Name
                </label>
                <input
                  className="w-[9rem] lg:w-[12.5rem] xl:w-[15rem]  h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                  type={"text"}
                  id="businessname"
                  name="businessname"
                  placeholder="Agba Designer"
                />
              </div>
              <div className="mt-7">
                <label className="text-sm lg:text-lg text-[#3a3a3a]">
                  Business Reg No
                </label>
                <input
                  className="w-[9rem] lg:w-[12.5rem] xl:w-[15rem]  h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                  type={"text"}
                  id="business reg"
                  name="business reg"
                  placeholder="7b59eneeoww9u495r"
                />
              </div>
            </div>
            <div className="flex lg:gap-2 mt-2">
              <div className="mt-7">
                <label className="text-sm lg:text-lg text-[#3a3a3a]">
                  Business Address
                </label>
                <input
                  className="w-[8.5rem] lg:w-[12.5rem] xl:w-[15rem]  h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                  type={"text"}
                  id="business address"
                  name="business address"
                  placeholder="No 47, Unibadan Road"
                />
              </div>
              <div className="mt-7">
                <label className="text-sm lg:text-lg text-[#3a3a3a]">
                  Business Email
                </label>
                <input
                  className="w-[8.5rem] lg:w-[12.5rem] xl:w-[15rem]  h-[3rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[15px] "
                  type={"text"}
                  id="business email"
                  name="business email"
                  placeholder="samuelogunremi255@gmail.com"
                />
              </div>
            </div>
            <div className="mt-7">
              <label className="text-sm lg:text-lg text-[#3a3a3a]">
                Description
              </label>
              <input
                className="w-[18rem] lg:w-[27.5rem] xl:w-[31rem] h-[6rem] text-[16px] bg-[#f8f7fa] pl-3 font-normal leading-[24px] text-left  rounded-[9x] "
                type={"text"}
                id="description"
                name="description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSettingsDesktop;
