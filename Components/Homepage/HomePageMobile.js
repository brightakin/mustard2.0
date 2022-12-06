import { Fragment } from "react";
import butterflyImg from "../../Assets/butterfly.png";
import circleLinesImg from "../../Assets/circlemobile.png";
import patriciaImg from "../../Assets/patricia.png";
import obiexImg from "../../Assets/obiex.png";
import carbonImg from "../../Assets/carbon.png";
import cardImg from "../../Assets/cardmobile.png";
import Image from "next/image";
import bigCircleImg from "../../Assets/bigcirclemobile.png";
import pointerLineImg from "../../Assets/pointerline.png";
import apiImg from "../../Assets/apimobile.png";
import atmImg from "../../Assets/atmmobile.png";
import cutCircleImg from "../../Assets/cutcircle.png";
import curvedLineImg from "../../Assets/curvedline.png";
import consoleImg from "../../Assets/consolemobile.png";
import metricsImg from "../../Assets/metricsmobile.png";
import communityImg from "../../Assets/communitymobile.png";
import documentationImg from "../../Assets/documentationmobile.png";
import patriciaPictureImg from "../../Assets/patriciapicture.png";

const HomePageMobile = () => {
  return (
    <Fragment>
      <div className="w-full h-[100vh] sm:h-full px-6 bg-[#000000]">
        <div className="flex flex-col gap-[14rem]">
          <div>
            <h1 className="text-[#f8f7fa] w-full mt-[7rem] h-16 text-4xl sm:text-7xl font-bold text-left leading-[32px]">
              API Development for Fintech Solutions
            </h1>
            <hr className="bg-[#fdbc1f] mt-[4rem] sm:mt-[13rem] w-32 h-[4px]" />
            <p className=" h-8 w-full text-[#f8f7fa] mt-8 sm:mt-10 text-lg sm:text-3xl font-semibold text-left leading-[20px]">
              We provide API development and other professional tools for
              fintechs for them to build a great solution out there.{" "}
            </p>
            <button className=" w-52 sm:w-64 h-14 sm:h-24 rounded-xl mt-[8rem] hover:scale-105 duration-500 text-[#3a3a3a] text-2xl sm:text-3xl font-semibold bg-[#f8f7fa] hover:">
              Explore Bindent
            </button>
          </div>
          <div>
            <Image
              className=" sm:ml-[42rem] ml-[70%] mt-[-16rem]"
              src={circleLinesImg}
              alt=" circlelines"
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-10 px-10 sm:px-20 h-[111rem] sm:h-[121rem] bg-[#f8f7fa]">
        <div>
          <div>
            <hr className="bg-[rgb(253,188,31)] mx-auto w-16 h-[4px]" />
            <p className="w-full h-10 font-bold sm:text-6xl text-2xl mt-5 text-center text-[#3a3a3a]">
              What is Bident?
            </p>
            <p className="h-20 w-full mt-4 sm:mt-14 text-xl sm:text-4xl text-center font-semibold text-[#a6a6aa]">
              The solution every fintech needs
            </p>
          </div>
          <div>
            <p className="w-full h-40 sm:text-2xl text-lg text-[#3a3a3a] text-center">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla non ante iaculis.
              Vestibulum diam turpis dignissim ac suspendisse a sagittis.
            </p>
          </div>
        </div>
        <div className="mt-[13rem]">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 mx-auto h-[4px]" />
            <p className="w-full h-10 text-center font-bold sm:text-6xl text-2xl mt-5 text-[#3a3a3a]">
              Our Products
            </p>
            <p className="h-20 w-full mt-4 sm:mt-14 text-xl sm:text-4xl font-semibold text-center text-[#a6a6aa]">
              The solution every fintech needs
            </p>
          </div>
          <div className="w-full mx-auto px-10 py-2 rounded-xl h-68 sm:h-[20rem] bg-[#ffffff]">
            <div className="mt-10 flex">
              <Image src={cardImg} alt="card" />
              <p className="w-56 sm:w-64 h-8 text-base sm:text-3xl font-bold text-center text-[#3a3a3a] ">
                Virtual Dollar Card
              </p>
            </div>
            <p className="w-full sm:w-[29rem] mt-6 pr-5 h-40 text-xs sm:text-2xl text-center text-[#3a3a3a]">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla.
            </p>
          </div>
          <div className="w-full mx-auto px-10 py-2 rounded-xl mt-7 h-68 bg-[#ffffff]">
            <div className="mt-10 flex">
              <Image src={atmImg} alt="card" />
              <p className="w-full h-8 sm:w-64 text-base sm:text-3xl text-center font-bold text-[#3a3a3a] ">
                Dedicated Virtual Account Number
              </p>
            </div>
            <p className="w-full text-center mt-10 sm:mt-10 pr-5 h-40 text-xs sm:text-2xl text-[#3a3a3a]">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla.
            </p>
          </div>
          <div className="w-full mx-auto px-10 py-2 rounded-xl mt-7 h-68 bg-[#ffffff]">
            <div className="mt-10 flex">
              <Image src={apiImg} alt="card" />
              <p className="w-full h-8 sm:w-64 text-lg sm:text-3xl font-bold text-center text-[#3a3a3a] ">
                API
              </p>
            </div>
            <p className="w-full mt-8 sm:mt-10 pr-5 h-40 text-xs sm:text-2xl text-center text-[#3a3a3a]">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla.
            </p>
          </div>
        </div>
        <Image
          className="mt-5 sm:mt-6 ml-[80%] sm:ml-[37.5rem]"
          src={bigCircleImg}
          alt="bigcircle"
        />
      </div>
      <div className="w-full h-[120rem] sm:h-[160rem] px-10 sm:px-20 bg-[#ffffff]">
        <p className="w-full h-12 text-2xl sm:text-5xl mt-[5rem] text-center font-extrabold text-[#3a3a3a]">
          Our Pay as you Grow Pricing model
        </p>
        <p className=" h-40 w-full mt-8 sm:mt-16 text-[#a6a6aa] mx-auto text-sm sm:text-2xl text-center font-medium">
          You don’t have to worry about a fixed pricing, you only as your card
          transactions and issuance increases.
        </p>
        <div>
          <hr className="bg-[rgb(253,188,31)] mx-auto w-16 h-[4px]" />
          <p className="w-full h-10 font-bold text-2xl sm:text-3xl mt-5 text-center text-[#3a3a3a]">
            A better Experience for your developers at every step
          </p>
          <p className="h-20 w-full mt-20 text-sm sm:text-2xl font-semibold text-center text-[#a6a6aa]">
            Zenfin open source and pro tools have helped millions of ApI
            developers, teams and finance organizations deliver great APIs.
          </p>
        </div>
        <Image className="w-full" src={consoleImg} alt="console" />
        <div className="w-full h-[16rem] sm:h-[24rem] mt-20 border-2 border-[#a6a6aa] rounded-xl">
          <Image
            className=" w-10 h-10 mt-[3rem] mx-auto"
            src={documentationImg}
            alt="documentation"
          />
          <p className="w-full h-8 mt-8 text-center text-xl sm:text-3xl font-bold text-[#000000]">
            Documentation
          </p>
          <p className="w-full h-16 text-sm sm:text-2xl sm:mt-5 text-center text-[#3a3a3a]">
            Easy-to-edit guides to help developers get started.
          </p>
        </div>
        <div className="w-full h-[16rem] sm:h-[24rem] mt-20 border-2 border-[#a6a6aa] rounded-xl">
          <Image
            className=" w-10 h-10 mt-[3rem] mx-auto"
            src={metricsImg}
            alt="documentation"
          />
          <p className="w-full h-8 mt-8 text-center text-xl sm:text-3xl font-bold text-[#000000]">
            Metrics
          </p>
          <p className="w-full h-16 text-sm sm:text-2xl sm:mt-5 text-center text-[#3a3a3a]">
            Easy-to-edit guides to help developers get started.
          </p>
        </div>
        <div className="w-full h-[16rem] sm:h-[24rem] mt-20 border-2 border-[#a6a6aa] rounded-xl">
          <Image
            className=" w-10 h-10 mt-[3rem] mx-auto"
            src={communityImg}
            alt="documentation"
          />
          <p className="w-full h-8 mt-8 text-center text-xl sm:text-3xl font-bold text-[#000000]">
            Community
          </p>
          <p className="w-full h-16 text-sm sm:text-2xl sm:mt-5 text-center text-[#3a3a3a]">
            Easy-to-edit guides to help developers get started.
          </p>
        </div>
      </div>
      <div className="w-full pt-10 px-10 sm:px-20 h-[55rem] sm:h-[60rem] bg-[#f8f7fa]">
        <div>
          <hr className="bg-[rgb(253,188,31)] mx-auto w-16 h-[4px]" />
          <p className="w-full h-10 font-bold sm:text-6xl text-2xl mt-5 text-center text-[#3a3a3a]">
            Get Started
          </p>
          <p className="h-20 w-full mt-4 sm:mt-14 text-xl sm:text-4xl font-semibold text-center text-[#a6a6aa]">
            Build the solution the world needs
          </p>
        </div>
        <form className=" w-full px-[1rem] py-[3rem] h-[30rem] bg-[#3a3a3a] rounded-2xl ">
          <p className="w-64 h-10 text-[#cbcbd4] text-xl font-bold">
            Get Started here
          </p>
          <input
            className="w-full text-sm text-[#cbcbd4] p-3 bg-[#5a5757] mt-[2rem] rounded-lg"
            type="text"
            placeholder="Business Name"
          />
          <input
            className=" w-full text-sm text-[#cbcbd4] p-3  bg-[#5a5757] mt-[2rem] rounded-lg"
            type="text"
            placeholder="Your Email"
          />
          <input
            className="w-full text-sm text-[#cbcbd4] p-3 bg-[#5a5757] mt-[2rem] rounded-lg"
            type="text"
            placeholder="Password"
          />
          <button className="w-full text-lg font-medium text-[#000000] h-12 px-10 bg-[#ffffff] mt-[2rem] rounded-lg">
            {" "}
            Sign Up
          </button>
        </form>
      </div>
      <div className="h-[30rem] w-full pl-2  bg-gradient-to-r from-[#93939c] via-transparent">
        <div className="flex gap-[3rem]">
          <div className="mt-[2rem]">
            <p className="h-10 w-full text-lg text-left text-[#000000] font-bold ">
              Products
            </p>
            <p className="h-10 w-full text-sm text-left text-[#3a3a3a] font-bold ">
              Virtual Dollar Cards
            </p>
            <p className="h-10 w-full text-sm text-left text-[#3a3a3a] font-bold ">
              Dedicated User Account
            </p>
            <p className="h-10 w-full text-sm text-left text-[#3a3a3a] font-bold ">
              Docs
            </p>
            <p className="h-10 w-full text-sm text-left text-[#3a3a3a] font-bold ">
              Metrics
            </p>
          </div>
          <div className="mt-[2rem]">
            <p className="h-[43px] w-full text-lg text-left text-[#000000] font-bold ">
              Resources
            </p>
            <p className="h-10 w-full  text-sm text-left text-[#3a3a3a] font-bold ">
              Pricing
            </p>
            <p className="h-10 w-full text-sm text-left text-[#3a3a3a] font-bold ">
              Customer Stories
            </p>
            <p className="h-10 w-full  text-sm text-left text-[#3a3a3a] font-bold ">
              Zenfin Docs
            </p>
          </div>
        </div>

        <div className="mt-[2rem]">
          <p className="h-[43px] w-full text-lg text-left text-[#000000] font-bold ">
            Company
          </p>
          <p className="h-10 w-full text-sm text-left text-[#3a3a3a] font-bold ">
            Team
          </p>
          <p className="h-10 w-full text-sm text-left text-[#3a3a3a] font-bold ">
            Career Support
          </p>{" "}
          <a
            className="h-10 w-full text-sm text-left text-[#3a3a3a] font-bold "
            href="/contactus"
          >
            Contact Support
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageMobile;
