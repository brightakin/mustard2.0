import { useRef } from "react";

const UploadDocs = (props) => {
  const handleSubmitInfo = () => {
    props.onSubmit();
  };

  const hiddenFileInputOtherDocs = useRef(null);

  const handleClickOtherDocs = () => {
    hiddenFileInputOtherDocs.current.click();
  };

  const handleChangeOtherDocs = (event) => {
    const fileUploadedOtherDocs = event.target.files[0];
  };

  const hiddenFileMemo = useRef(null);

  const handleClickMemo = () => {
    hiddenFileInputOtherDocs.current.click();
  };

  const handleChangeMemo = (event) => {
    const fileUploadedMemo = event.target.files[0];
  };

  const hiddenFileInputCert = useRef(null);

  const handleClickCert = () => {
    hiddenFileInputCert.current.click();
  };

  const handleChangeCert = (event) => {
    const fileUploadedCert = event.target.files[0];
  };

  return (
    <div className=" w-[45rem] lg:w-[54rem] xl:w-[68rem] h-[43rem] mr-6 mt-5 bg-white rounded-3xl">
      <p className=" text-2xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
        Compliance
      </p>
      <div className="flex gap-[4rem]">
        <div className="mt-[4.5rem] ml-[2rem] lg:ml-[8rem]">
          <div className="flex text-center w-full">
            <div className=" h-8 w-8 bg-[#000] text-[#ffffff] inline-block rounded-[50px] relative font-semibold text-lg">
              <span>&#10004;</span>
            </div>
            <p className="text-[#cbcbd4] w-40 font-semibold text-lg mb-2">
              Business Profile
            </p>
          </div>
          <div className="flex text-center mt-[3rem] w-full relative">
            <div className="before:absolute before:left-[15px] before:top-[-53px] before:h-[54px] before:w-[3px] before:bg-[#cbcbd4] bg-[#1976d2] text-[#ffffff]  h-8 w-8 inline-block rounded-[50px] relative font-semibold text-lg">
              <span>2</span>
            </div>
            <p className="text-[#1976d2] w-48 font-semibold text-lg mb-2">
              Upload Documents
            </p>
          </div>
          <div className="flex text-center mt-[3rem]  w-full relative">
            <div className="before:absolute before:left-[15px] before:top-[-51px] before:h-[54px] before:w-[3px] bg-[#cbcbd4] text-[#ffffff] before:bg-[#cbcbd4]  h-8 w-8 inline-block rounded-[50px] relative font-semibold text-lg">
              <span>3</span>
            </div>
            <p className=" w-32 font-semibold text-[#cbcbd4] text-lg mb-2">
              User Profile
            </p>
          </div>
          <div className="flex text-center mt-[3rem]  w-full relative">
            <div className=" before:absolute before:left-[15px] before:top-[-51px] before:h-[54px] before:w-[3px] before:bg-[#cbcbde] text-[#ffffff] h-8 w-8 bg-[#cbcbd4] inline-block rounded-[50px] relative font-semibold text-lg">
              <span>4</span>
            </div>
            <p className=" w-16 font-semibold text-[#cbcbd4] text-lg mb-2">
              Finish
            </p>
            <div></div>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-medium">
            <span className="text-[#1976d2]">&#x2190; </span> Back
          </p>
          <h1 className=" h-36 w-[36rem] mt-[2rem] text-2xl font-extrabold text-[#3a3a3a] leading-[40px] text-left ">
            Upload Documents
          </h1>
          <div className="h-[20rem] w-[23rem] lg:w-[26rem] xl:w-[36.5rem] mr-[2rem] border-2 border-[#a6a6aa] p-9 rounded-3xl mt-[-3rem]">
            <div className="flex gap-5">
              <label className="text-[#3a3a3a] text-lg xl:text-2xl font-bold w-full">
                Certificate Of Incorporation
              </label>
              <button
                className="bg-[#cbcbd4] w-28 h-8 rounded-lg text-sm font-semibold text-[#3a3a3a]"
                onClick={handleClickCert}
              >
                Upload
              </button>
              <input
                className=" hidden"
                onChange={handleChangeCert}
                ref={hiddenFileInputCert}
                type={"file"}
                id="business name"
                name="business name"
              />
            </div>
            <hr className="w-full mt-[2rem]"></hr>
            <div className="mt-7 flex">
              <label className="text-[#3a3a3a] text-lg xl:text-2xl font-bold w-full">
                Memorandum and Articles of Association
              </label>
              <button
                className="bg-[#cbcbd4] w-28 h-8 rounded-lg text-sm font-semibold text-[#3a3a3a]"
                onClick={handleClickMemo}
              >
                Upload
              </button>
              <input
                className=" hidden"
                onChange={handleChangeMemo}
                ref={hiddenFileMemo}
                type={"file"}
                id="reg name"
                name="reg name"
              />
            </div>
            <hr className="w-full mt-[2rem]"></hr>
            <div className="mt-7 flex">
              <label className="text-[#3a3a3a] text-lg xl:text-2xl font-bold w-full">
                Other Documents
              </label>
              <button
                className="bg-[#cbcbd4] w-28 h-8 rounded-lg text-sm font-semibold text-[#3a3a3a]"
                onClick={handleClickOtherDocs}
              >
                Upload
              </button>
              <input
                onChange={handleChangeOtherDocs}
                ref={hiddenFileInputOtherDocs}
                className="hidden"
                type={"file"}
                id="text"
                name="text"
              />
            </div>
          </div>
          <button
            onClick={handleSubmitInfo}
            className="h-[3.5rem] w-[63%] lg:w-[70%] xl:w-[95%] mr-[5rem] mt-8 rounded-[10px] text-[24px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 "
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocs;
