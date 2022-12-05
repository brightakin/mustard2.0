import BusinessInfo from "../Helpers/BusinessInfo";
import UploadDocs from "../Helpers/UploadDocs";
import { Fragment, useState } from "react";
import PersonalInfo from "../Helpers/PersonalInfo";
import UploadPersonalDocs from "../Helpers/UploadPersonalDocs";
import FinishCompliance from "../Helpers/FInishCompliance";
import SideBar from "../Helpers/SideBar";

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

  const goToBusinessInfo = () => {
    setSubmitBusinessInfo(false);
    setSubmitDocsState(false);
    setSubmitPersonalInfo(false);
    setSubmitPersonalDocs(false);
  };

  const goToPersonalInfo = () => {
    setSubmitBusinessInfo(false);
    setSubmitDocsState(true);
    setSubmitPersonalInfo(false);
  };

  const goToUploadPersonalDocs = () => {
    setSubmitBusinessInfo(false);
    setSubmitDocsState(false);
    setSubmitPersonalInfo(true);
    setSubmitPersonalDocs(false);
  };

  return (
    <Fragment>
      <div className="bg-[#212936] flex gap-10 h-[63rem] w-full">
        <SideBar />
        {!SubmitBusinessInfo &&
          !submitDocsState &&
          !submitPersonalInfoState &&
          !submitPersonalDocsState && (
            <BusinessInfo onSubmit={submitBusinessInfoHandler} />
          )}
        {SubmitBusinessInfo && (
          <UploadDocs prevBtn={goToBusinessInfo} onSubmit={submitDocs} />
        )}
        {submitDocsState && <PersonalInfo onSubmit={submitPersonalInfo} />}
        {submitPersonalInfoState && (
          <UploadPersonalDocs
            prevBtn={goToPersonalInfo}
            onSubmit={submitPersonalDocs}
          />
        )}
        {submitPersonalDocsState && (
          <FinishCompliance
            onSubmit={goToBusinessInfo}
            prevBtn={goToUploadPersonalDocs}
          />
        )}
      </div>
    </Fragment>
  );
};

export default DashboardDesktop;
