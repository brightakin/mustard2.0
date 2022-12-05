import { useRef } from "react";

const UploadPersonalDocs = (props) => {
  const submitHandler = () => {
    props.onSubmit();
  };

  const hiddenFileInputId = useRef(null);

  const handleClickId = () => {
    hiddenFileInputId.current.click();
  };

  const handleChangeId = (event) => {
    const fileUploadedId = event.target.files[0];
  };

  const hiddenFilePicture = useRef(null);

  const handleClickPicture = () => {
    hiddenFilePicture.current.click();
  };

  const handleChangePicture = (event) => {
    const fileUploadedPicture = event.target.files[0];
  };

  const handlePrevBtn = () => {
    props.prevBtn();
  };

  return (
    <div className=" w-[39rem] lg:w-[48rem] xl:w-[70rem] h-[43rem] mr-6 mt-5 bg-white rounded-3xl">
      <p className=" text-2xl w-40 h-6 font-bold mt-5 ml-7 text-[#3a3a3a]">
        Compliance
      </p>
      <div className="flex gap-[2rem] lg:gap-[4rem]">
        <div className="mt-[4.5rem] ml-[2rem] xl:ml-[6rem]">
          <div className="flex text-center w-full">
            <div className=" h-8 w-8 bg-[#000] text-[#ffffff] inline-block rounded-[50px] relative font-semibold text-lg">
              <span>&#10004;</span>
            </div>
            <p className="text-[#cbcbd4] w-40 font-semibold text-lg mb-2">
              Business Profile
            </p>
          </div>
          <div className="flex text-center mt-[3rem] w-full relative">
            <div className="before:absolute before:left-[15px] before:top-[-53px] before:h-[54px] before:w-[3px] before:bg-[#cbcbd4] bg-[#000] text-[#ffffff]  h-8 w-8 inline-block rounded-[50px] relative font-semibold text-lg">
              <span>&#10004;</span>
            </div>
            <p className="text-[#cbcbd4] w-48 font-semibold text-lg mb-2">
              Upload Documents
            </p>
          </div>
          <div className="flex text-center mt-[3rem]  w-full relative">
            <div className="before:absolute before:left-[15px] before:top-[-53px] before:h-[54px] before:w-[3px] bg-[#000] text-[#ffffff] before:bg-[#cbcbd4]  h-8 w-8 inline-block rounded-[50px] relative font-semibold text-lg">
              <span>&#10004;</span>
            </div>
            <p className=" w-32 font-semibold text-[#cbcbd4] text-lg mb-2">
              User Profile
            </p>
          </div>
          <div className="flex text-center mt-[3rem]  w-full relative">
            <div className=" before:absolute before:left-[15px] before:top-[-53px] before:h-[54px] before:w-[3px] before:bg-[#cbcbde] text-[#ffffff] h-8 w-8 bg-[#1976d2] inline-block rounded-[50px] relative font-semibold text-lg">
              <span>4</span>
            </div>
            <p className=" w-16 font-semibold text-[#cbcbd4] text-lg mb-2">
              Finish
            </p>
            <div></div>
          </div>
        </div>
        <div>
          <button onClick={handlePrevBtn} className="text-[20px] font-medium">
            <span className="text-[#1976d2]">&#x2190; </span> Back
          </button>
          <h1 className=" h-36 w-[36rem] mt-[2rem] text-2xl font-extrabold text-[#3a3a3a] leading-[40px] text-left ">
            Almost Done!
          </h1>
          <div className="h-[14rem] w-[20rem] lg:w-[27rem] xl:w-[36.5rem] mr-[2rem] border-2 border-[#a6a6aa] p-9 rounded-3xl mt-[-3rem]">
            <div className="flex gap-5">
              <label className="text-[#3a3a3a] lg:text-lg xl:text-2xl font-bold w-full">
                Upload a Picture
              </label>
              <button
                className="bg-[#cbcbd4] w-28 h-8 rounded-lg text-sm font-semibold text-[#3a3a3a]"
                onClick={handleClickPicture}
              >
                Upload
              </button>
              <input
                className=" hidden"
                onChange={handleChangePicture}
                ref={hiddenFilePicture}
                type={"file"}
                id="business name"
                name="business name"
              />
            </div>
            <hr className="w-full mt-[2rem]"></hr>
            <div className="mt-7 flex">
              <label className="text-[#3a3a3a] lg:text-lg xl:text-2xl font-bold w-full">
                Upload ID
              </label>
              <button
                className="bg-[#cbcbd4] w-28 h-8 rounded-lg text-sm font-semibold text-[#3a3a3a]"
                onClick={handleClickId}
              >
                Upload
              </button>
              <input
                className=" hidden"
                onChange={handleChangeId}
                ref={hiddenFileInputId}
                type={"file"}
                id="reg name"
                name="reg name"
              />
            </div>
          </div>
          <button
            onClick={submitHandler}
            className="h-[3.5rem] w-[55%] lg:w-[75%] xl:w-[95%] mt-8 rounded-[10px] text-[24px] bg-[#000000] text-[#ffffff] hover:scale-105 duration-500 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPersonalDocs;
