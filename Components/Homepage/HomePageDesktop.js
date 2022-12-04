import butterflyImg from "../../Assets/butterfly.png";
import circleLinesImg from "../../Assets/circlelines.png";
import patriciaImg from "../../Assets/patricia.png";
import obiexImg from "../../Assets/obiex.png";
import carbonImg from "../../Assets/carbon.png";
import cardImg from "../../Assets/card.png";
import Image from "next/image";
import { Fragment } from "react";
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
import { useRouter } from "next/router";

const HomePageDesktop = () => {
  const router = useRouter();
  const handleDashboard = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <Fragment>
      <div className="w-full h-[100vh] bg-[#000000]">
        <div className="flex gap-[14rem]">
          <div>
            <h1 className="text-[#f8f7fa] w-[28rem] mt-6 ml-12 h-44 text-5xl font-bold text-left leading-[60px]">
              API Development for Fintech Solutions
            </h1>
            <hr className="bg-[#fdbc1f] w-32 ml-12 h-[4px]" />
            <p className=" h-36 w-[28rem] text-[#f8f7fa] mt-8 text-2xl font-semibold text-left leading-[40px] ml-12">
              We provide API development and other professional tools for
              fintechs for them to build a great solution out there.{" "}
            </p>
            <button
              onClick={handleDashboard}
              className=" w-52 h-14 rounded-xl mt-4 ml-12 hover:scale-105 duration-500 text-[#3a3a3a] text-2xl font-semibold bg-[#f8f7fa] hover:"
            >
              Explore Bindent
            </button>
          </div>
          <div>
            <Image
              className="w-[30rem] h-[28rem]"
              src={butterflyImg}
              alt="butterfly"
            />
            <Image
              className="w-full mt-8 h-[11rem]"
              src={circleLinesImg}
              alt=" circlelines"
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-10 h-[75rem] bg-[#f8f7fa]">
        <div className="flex gap-[14rem] lg:gap-0 lg:justify-between">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 ml-12 h-[4px]" />
            <p className="w-full h-10 font-bold text-2xl ml-12 mt-5 text-left text-[#3a3a3a]">
              What is Zenfin?
            </p>
            <p className="h-20 w-full ml-12 mt-4 text-xl font-semibold text-[#a6a6aa]">
              The solution every fintech needs
            </p>
          </div>
          <div>
            <p className="w-[25rem] lg:w-[40rem] mr-10 h-48 text-lg text-[#3a3a3a] mt-2">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla non ante iaculis.
              Vestibulum diam turpis dignissim ac suspendisse a sagittis.
            </p>
          </div>
        </div>
        <div className="flex gap-[25rem] lg:gap-0 lg:justify-between">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 ml-12 h-[4px]" />
            <p className="w-full h-10 font-bold text-2xl ml-12 mt-10 text-left text-[#3a3a3a]">
              Our Products
            </p>
            <p className="h-20 w-full ml-12 mt-8 text-xl font-semibold text-[#a6a6aa]">
              The solution every fintech needs
            </p>
          </div>
          <div className="flex w-[100rem] lg:w-[36rem] rounded-xl mr-28 h-56 bg-[#ffffff]">
            <Image className=" h-40 w-52" src={cardImg} alt="card" />
            <div className="mt-10">
              <p className="w-56 h-8 text-lg lg:text-xl font-bold text-[#3a3a3a] ">
                Virtual Dollar Card
              </p>
              <p className="w-[13rem] lg:w-[25rem] pr-5 h-40 text-sm lg:text-lg text-[#3a3a3a]">
                Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
                sit nullam blandit velit diam enim. Placerat ac id semper leo
                sed vitae. Consectetur at etiam vitae nulla.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mr-28 mt-[3rem]">
          <div>
            <Image
              className="absolute h-[30rem] w-[30rem] left-[2rem]"
              src={bigCircleImg}
              alt="bigcircle"
            />
            <Image
              className="absolute z-20 h-[25rem] w-[25rem] left-[12rem]"
              src={pointerLineImg}
              alt="pointerline"
            />
          </div>
          <div>
            <div className="flex w-[25rem] lg:w-[36rem] rounded-xl h-56 bg-[#ffffff]">
              <Image
                className=" h-28 lg:h-48 w-40 lg:w-60"
                src={atmImg}
                alt="card"
              />
              <div className="mt-10">
                <p className="w-full h-8 text-lg lg:text-xl font-bold text-[#3a3a3a] ">
                  Dedicated Virtual Account Number
                </p>
                <p className="w-[15rem] lg:w-[25rem] pr-5 h-40 text-sm lg:text-lg text-[#3a3a3a]">
                  Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus
                  sem sit nullam blandit velit diam enim. Placerat ac id semper
                  leo sed vitae. Consectetur at etiam vitae nulla.
                </p>
              </div>
            </div>
            <div className="flex absolute z-10 w-[25rem] lg:w-[36rem] mt-[3rem] rounded-xl mr-10 h-56 bg-[#ffffff]">
              <Image className="h-48 w-60" src={apiImg} alt="card" />
              <div className="mt-10">
                <p className="w-56 h-8 text-xl font-bold text-[#3a3a3a] ">
                  APIs
                </p>
                <p className="w-[15rem] lg:w-[25rem] pr-5 h-40 text-sm lg:text-lg text-[#3a3a3a]">
                  Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus
                  sem sit nullam blandit velit diam enim. Placerat ac id semper
                  leo sed vitae. Consectetur at etiam vitae nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="ml-[60rem] relative mt-[4.4rem]"
          src={cutCircleImg}
          alt="cutcircle"
        />
      </div>
      <div className="w-full h-[145rem] bg-[#ffffff]">
        <div>
          <p className="w-full h-12 text-4xl mt-[5rem] text-center font-extrabold text-[#3a3a3a]">
            Our Pay as you Grow Pricing model
          </p>
          <p className=" h-40 w-[30rem] mx-auto mt-8 text-[#a6a6aa] text-2xl text-center font-medium">
            You don’t have to worry about a fixed pricing, you only as your card
            transactions and issuance increases.
          </p>
          {/* <Image src={curvedLineImg} alt="curvedline" /> */}
        </div>
        <div className="flex gap-[12rem] mr-5 lg:mr-0 lg:gap-[16rem] mt-[1rem]">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 ml-12 h-[4px]" />
            <p className="w-[34rem] h-10 font-bold text-2xl ml-12 mt-2 text-left text-[#3a3a3a]">
              A better Experience for your developers at every step
            </p>
            <p className="h-20 w-[30rem] ml-12 mt-[2rem] text-xl font-semibold text-[#a6a6aa]">
              Zenfin open source and pro tools have helped millions of ApI
              developers, teams and finance organizations deliver great APIs.
            </p>
          </div>
          <div>
            <Image
              className="w-[20rem] h-[11rem]"
              src={consoleImg}
              alt="console"
            />
          </div>
        </div>
        <div className="flex mt-[6rem] gap-2 lg:gap-[5rem] justify-center">
          <div className="w-[30rem] h-[16rem] border-2 border-[#a6a6aa] rounded-xl">
            <Image
              className=" w-10 h-10 mt-[3rem] mx-auto"
              src={documentationImg}
              alt="documentation"
            />
            <p className="w-full h-8 mt-8 text-center text-lg font-bold text-[#000000]">
              Documentation
            </p>
            <p className="w-full h-16 text-sm text-center text-[#3a3a3a]">
              Easy-to-edit guides to help developers get started.
            </p>
          </div>
          <div className="w-[30rem] h-[16rem] border-2 border-[#a6a6aa] rounded-xl">
            {" "}
            <Image
              className="mt-[3rem] mx-auto w-10 h-10"
              src={metricsImg}
              alt="metrics"
            />
            <p className="w-full h-8 mt-8 text-center text-lg font-bold text-[#000000]">
              Metrics
            </p>
            <p className="w-full h-16 text-sm text-center text-[#3a3a3a]">
              Easy-to-edit guides to help developers get started.
            </p>
          </div>
        </div>
        <div className="w-[30rem] mt-[4rem] mx-auto h-[16rem] border-2 border-[#a6a6aa] rounded-xl">
          {" "}
          <Image
            className="mt-[3rem] mx-auto w-10 h-10"
            src={communityImg}
            alt="community"
          />
          <p className="w-full h-8 text-center text-lg font-bold mt-8 text-[#000000]">
            Community
          </p>
          <p className="w-full h-16 text-sm text-center text-[#3a3a3a]">
            Changelog and more to keep users in the loop.
          </p>
        </div>
        <div className="flex gap-14 w-[52rem] mt-[6rem] h-[18rem] bg-[#f8f7fa] rounded-2xl mx-auto">
          <div>
            <Image
              className="w-[25rem] h-[18rem]"
              src={patriciaPictureImg}
              alt="patriciapicture"
            />
          </div>
          <div>
            <p className="w-[22rem] h-40 mt-[2rem] text-lg text-[#3a3a3a] font-medium">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla.
            </p>
            <p className="w-32 h-8 text-lg font-bold text-[#3a3a3a]">
              Community
            </p>
            <p className="h-8 w-40 text-lg text-[#a6a6aa]">Hanu, Patricia</p>
          </div>
        </div>
        <div className="flex lg:justify-center mt-[10rem]">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 ml-12 h-[4px]" />
            <p className="w-[34rem] h-10 font-bold text-2xl ml-12 mt-10 text-left text-[#3a3a3a]">
              Get Started
            </p>
            <p className="h-20 w-[26rem] ml-12 mt-[1rem] text-xl font-medium text-[#a6a6aa]">
              Build the solution the world needs.
            </p>
          </div>
          <form className=" w-[26rem] lg:w-[36rem] px-[3rem] py-[3rem] h-[30rem] bg-[#3a3a3a] rounded-3xl ">
            <p className="w-64 h-10 text-[#cbcbd4] text-xl font-bold">
              Get Started here
            </p>
            <input
              className="w-[21rem] lg:w-[30rem] text-sm text-[#cbcbd4] p-5 bg-[#5a5757] mt-[2rem] rounded-3xl"
              type="text"
              placeholder="Business Name"
            />
            <input
              className=" w-[21rem] lg:w-[30rem] text-sm text-[#cbcbd4] p-5  bg-[#5a5757] mt-[2rem] rounded-3xl"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="w-[21rem] lg:w-[30rem] text-sm text-[#cbcbd4] p-5 bg-[#5a5757] mt-[2rem] rounded-3xl"
              type="text"
              placeholder="Password"
            />
            <button className="w-[21rem] lg:w-[30rem] text-xl font-medium text-[#000000] h-16 px-10 bg-[#ffffff] mt-[2rem] rounded-3xl">
              {" "}
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="h-[30rem] w-full flex pl-5 justify-start  bg-gradient-to-r from-[#93939c] via-transparent">
        <div className="mt-[10rem]">
          <p className="h-10 w-40 text-xl text-left text-[#000000] font-bold ">
            Products
          </p>
          <p className="h-10 w-72 text-lg text-left text-[#3a3a3a] font-bold ">
            Virtual Dollar Cards
          </p>
          <p className="h-10 w-72 text-lg text-left text-[#3a3a3a] font-bold ">
            Dedicated User Account
          </p>
          <p className="h-10 w-40 text-lg text-left text-[#3a3a3a] font-bold ">
            Docs
          </p>
          <p className="h-10 w-40 text-lg text-left text-[#3a3a3a] font-bold ">
            Metrics
          </p>
        </div>
        <div className="mt-[10rem]">
          <p className="h-[43px] w-[206px] text-xl text-left text-[#000000] font-bold ">
            Resources
          </p>
          <p className="h-10 w-40 text-lg text-left text-[#3a3a3a] font-bold ">
            Pricing
          </p>
          <p className="h-10 w-72 text-lg text-left text-[#3a3a3a] font-bold ">
            Customer Stories
          </p>
          <p className="h-10 w-40 text-lg text-left text-[#3a3a3a] font-bold ">
            Zenfin Docs
          </p>
        </div>
        <div className="mt-[10rem]">
          <p className="h-[43px] w-[206px] text-xl text-left text-[#000000] font-bold ">
            Company
          </p>
          <p className="h-10 w-40 text-lg text-left text-[#3a3a3a] font-bold ">
            Team
          </p>
          <p className="h-10 w-72 text-lg text-left text-[#3a3a3a] font-bold ">
            Career Support
          </p>{" "}
          <a
            className="h-10 w-72 text-lg text-left text-[#3a3a3a] font-bold "
            href="/contactus"
          >
            Contact Support
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageDesktop;
