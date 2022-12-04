import { Fragment } from "react";
import butterflyImg from "../../Assets/butterfly.png";
import circleLinesImg from "../../Assets/circlemobile.png";
import patriciaImg from "../../Assets/patricia.png";
import obiexImg from "../../Assets/obiex.png";
import carbonImg from "../../Assets/carbon.png";
import cardImg from "../../Assets/card.png";
import Image from "next/image";
import bigCircleImg from "../../Assets/bigcircle.png";
import pointerLineImg from "../../Assets/pointerline.png";
import apiImg from "../../Assets/api.png";
import atmImg from "../../Assets/atm.png";
import cutCircleImg from "../../Assets/cutcircle.png";
import curvedLineImg from "../../Assets/curvedline.png";
import consoleImg from "../../Assets/console.png";
import metricsImg from "../../Assets/metrics.png";
import communityImg from "../../Assets/community.png";
import documentationImg from "../../Assets/documentation.png";
import patriciaPictureImg from "../../Assets/patriciapicture.png";

const HomePageMobile = () => {
  return (
    <Fragment>
      <div className="w-full h-[100vh] bg-[#000000]">
        <div className="flex flex-col gap-[14rem]">
          <div>
            <h1 className="text-[#f8f7fa] w-[21rem] sm:w-[42rem] mt-[10rem] ml-6 h-16 text-4xl sm:text-7xl font-bold text-left leading-[32px]">
              API Development for Fintech Solutions
            </h1>
            <hr className="bg-[#fdbc1f] mt-[4rem] sm:mt-[13rem] w-32 ml-6 h-[4px]" />
            <p className=" h-8 w-[19rem] sm:w-[45rem] text-[#f8f7fa] mt-8 sm:mt-10 text-lg sm:text-3xl font-semibold text-left leading-[20px] ml-6">
              We provide API development and other professional tools for
              fintechs for them to build a great solution out there.{" "}
            </p>
            <button className=" w-52 sm:w-64 h-14 sm:h-24 rounded-xl mt-[8rem] ml-6 hover:scale-105 duration-500 text-[#3a3a3a] text-2xl sm:text-3xl font-semibold bg-[#f8f7fa] hover:">
              Explore Bindent
            </button>
          </div>
          <div>
            <Image
              className=" sm:ml-[42rem] ml-[16rem] mt-[-16rem]"
              src={circleLinesImg}
              alt=" circlelines"
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-10 px-10 sm:px-20 h-[110rem] bg-[#f8f7fa]">
        <div>
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 h-[4px]" />
            <p className="w-full h-10 font-bold sm:text-6xl text-2xl mt-5 text-left text-[#3a3a3a]">
              What is Bident?
            </p>
            <p className="h-20 w-full mt-4 sm:mt-14 text-xl sm:text-4xl font-semibold text-[#a6a6aa]">
              The solution every fintech needs
            </p>
          </div>
          <div>
            <p className="w-[16rem] sm:w-[34rem] h-40 sm:text-2xl text-lg text-[#3a3a3a]">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla non ante iaculis.
              Vestibulum diam turpis dignissim ac suspendisse a sagittis.
            </p>
          </div>
        </div>
        <div className="mt-[13rem]">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 h-[4px]" />
            <p className="w-full h-10 font-bold sm:text-6xl text-2xl mt-5 text-left text-[#3a3a3a]">
              Our Products
            </p>
            <p className="h-20 w-full mt-4 sm:mt-14 text-xl sm:text-4xl font-semibold text-[#a6a6aa]">
              The solution every fintech needs
            </p>
          </div>
          <div>
            <p className="w-[16rem] sm:w-[34rem] h-40 sm:text-2xl text-lg text-[#3a3a3a]">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla non ante iaculis.
              Vestibulum diam turpis dignissim ac suspendisse a sagittis.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageMobile;
