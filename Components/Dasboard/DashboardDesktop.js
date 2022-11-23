import addImg from "../../Assets/add.png";
import atmImg from "../../Assets/atm.png";
import messageImg from "../../Assets/message.png";
import creditCardImg from "../../Assets/credit-card.png";
import peopleImg from "../../Assets/people.png";
import settingImg from "../../Assets/settings.png";
import Image from "next/image";
import BusinessInfo from "../Helpers/BusinessInfo";
import UploadDocs from "../Helpers/UploadDocs";
import { useState } from "react";
import PersonalInfo from "../Helpers/PersonalInfo";
import UploadPersonalDocs from "../Helpers/UploadPersonalDocs";
import EndCompliance from "../Helpers/endCompliance";

const DashboardDesktop = () => {
  const [SubmitBusinessInfo, setSubmitBusinessInfo] = useState(false);
  const [submitDocsState, setSubmitDocsState] = useState(false);
  const [submitPersonalInfoState, setSubmitPersonalInfo] = useState(false);
  const [submitPersonalDocsState, setSubmitPersonalDocs] = useState(false);

  const submitBusinessInfoHandler = () => {
    setSubmitBusinessInfo(true);
  };
  const submitDocs = () => {
    setSubmitDocsState(true);
    setSubmitBusinessInfo(false);
  };

  const submitPersonalInfo = () => {
    setSubmitBusinessInfo(false);
    setSubmitDocsState(false);
    setSubmitPersonalInfo(true);
  };

  const submitPersonalDocs = () => {
    setSubmitBusinessInfo(false);
    setSubmitDocsState(false);
    setSubmitPersonalInfo(false);
    setSubmitPersonalDocs(true);
  };

  return (
    <div className="bg-[#212936] flex gap-10 h-[63rem] w-full">
      <div className=" w-64 h-[30rem] border-r-2 border-[#313c4e]">
        <div className=" border-b border-[#313c4e]">
          <p className=" text-xl font-medium ml-4 mt-20 w-44 h-6 text-[#afbdd1]">
            Sam Eniola
          </p>
          <p className="w-44 h-6 text-lg font-light text-[#afbdd1] ml-4 mt-1">
            Mustard Ltd
          </p>
        </div>
        <div className="border-b border-[#313c4e] pb-5">
          <a href="#">
            <p className=" h-4 w-36 ml-16 mt-4  text-[#56657f] text-sm">
              <Image className="inline" src={addImg} alt="add" /> Compliance
            </p>
          </a>
          <a href="#">
            {" "}
            <p className="h-4 w-36 ml-16 mt-8 text-[#56657f] text-sm">
              <Image className="inline" src={messageImg} alt="message" />
              Transactions
            </p>
          </a>
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
      {!SubmitBusinessInfo &&
        !submitDocsState &&
        !submitPersonalInfoState &&
        !submitPersonalDocsState && (
          <BusinessInfo onSubmit={submitBusinessInfoHandler} />
        )}
      {SubmitBusinessInfo && <UploadDocs onSubmit={submitDocs} />}
      {submitDocsState && <PersonalInfo onSubmit={submitPersonalInfo} />}
      {submitPersonalInfoState && (
        <UploadPersonalDocs onSubmit={submitPersonalDocs} />
      )}
      {submitPersonalDocsState && <EndCompliance />}
    </div>
  );
};

export default DashboardDesktop;
