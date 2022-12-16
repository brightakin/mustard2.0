import { Fragment } from "react";
import cardImg from "../../Assets/cardmobile.png";
import Image from "next/image";
import homePhoneMobile from "../../Assets/homephonemobile.png";
import happyManMobile from "../../Assets/happymanmobile.png";
import phoneDashboardMobile from "../../Assets/phonedashboardmobile.png";
import card2Mobile from "../../Assets/card2.png";
import worldMobileImg from "../../Assets/worldmobile.png";
import ladyleftImg from "../../Assets/ladyleft.png";
import sponsorIconMobile from "../../Assets/sponsoriconmobile.png";
import socialIconsMobile from "../../Assets/socialiconsmobile.png";
import footerLogoImg from "../../Assets/footerlogomobile.png";
import Link from "next/link";
import { useRouter } from "next/router";

const HomePageMobile = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <Fragment>
      <div className="w-full h-[100vh] text-center sm:h-full px-6 py-[4rem] bg-[#28a745]">
        <h1 className="text-[#f8f7fa] w-full h-16 text-4xl sm:text-7xl font-bold text-center leading-[32px]">
          Take Control of your money with Mustard!
        </h1>
        <p className=" h-8 w-full text-[#f8f7fa] mt-14 sm:mt-[12rem] text-2xl sm:text-4xl text-center leading-[30px]">
          We’re here to help you get the best out of your money, no strings
          attached.
        </p>
        <button
          onClick={handleRegister}
          className="w-52 sm:w-72 h-14 sm:h-24 rounded-xl mt-[5rem] hover:scale-105 duration-500 text-[#28a745] text-xl sm:text-3xl font-semibold bg-[#f8f7fa]"
        >
          Create an Account
        </button>
        <Image className="sm:w-full" src={homePhoneMobile} alt="homephone" />
      </div>
      <div className="w-full pt-6 px-10 sm:px-20 h-[140rem] sm:h-[240rem] bg-[#f8f7fa]">
        <p className="w-full h-10 font-bold sm:text-6xl text-3xl mt-5 text-center text-[#28a745]">
          What does Mustard offers?
        </p>
        <Image
          className="mt-[5rem] w-full sm:mt-[14rem]"
          src={phoneDashboardMobile}
          alt="phonedashboard"
        />
        <p className="w-full h-10 font-bold sm:text-6xl text-3xl mt-10 sm:mt-[8rem] text-center text-[#28a745]">
          Save in Dollars & Spend Dollar easily, Anytime, Anywhere.
        </p>
        <p className="mt-[6rem] sm:mt-[12rem] text-center text-lg sm:text-3xl text-[#3a3a3a]">
          Mustard uses the highest level of internet security and it is
          protected by Comodo SSL certificate with end-to-end data encryption to
          completely protect your data.
        </p>
        <Image
          className="mt-[5rem] sm:mt-[7rem] w-full"
          src={card2Mobile}
          alt="card"
        />
        <p className="w-full h-10 font-bold sm:text-6xl text-3xl mt-10 sm:mt-[8rem] text-center text-[#28a745]">
          Create Dollar Card for Internet transactions.
        </p>
        <p className="mt-[6rem] sm:mt-[8rem] text-center text-lg sm:text-3xl text-[#3a3a3a]">
          Mustard uses the highest level of internet security and it is
          protected by Comodo SSL certificate with end-to-end data encryption to
          completely protect your data.
        </p>
        <Image
          className="mt-[5rem] sm:mt-[8rem] w-full"
          src={happyManMobile}
          alt="happyman"
        />
        <p className="w-full h-10 font-bold sm:text-6xl text-3xl mt-10 text-center text-[#28a745]">
          You can make your money work when you In tangible Assets.
        </p>
        <p className="mt-[8rem] sm:mt-[11rem] text-center text-lg sm:text-3xl text-[#3a3a3a]">
          Mustard uses the highest level of internet security and it is
          protected by Comodo SSL certificate with end-to-end data encryption to
          completely protect your data.
        </p>
      </div>
      <div className="w-full h-[40rem]sm:h-[60rem] py-[5rem] px-[2rem] bg-[#28a745]">
        <div>
          <Image className="w-full" src={worldMobileImg} alt="worldmobile" />
          <p className="w-full text-white text-2xl sm:text-5xl mt-5 font-bold text-center ">
            Send money to anyone, anywhere, anytime without any limitation.
          </p>
          <p className="w-full text-white mt-[2rem] h-[10rem] text-sm sm:text-2xl font-normal text-center ">
            You can easily send money to Domiliciary accounts and local banks
            without stress. You can easily send money to your loved ones and
            they do cash pickup or send in-app through their Mustard tags.
          </p>
        </div>
      </div>
      <div className="w-full h-[50rem] py-[2rem] px-[2rem] bg-[#ffffff]">
        <div>
          <p className="w-full text-[#28a745] text-xl font-extrabold text-center ">
            For every Mustard User, We provide you an Accountability Manager
          </p>
          <div className="h-[26rem] w-full p-[2rem] mt-16 gap-[5rem] text-[#3a3a3a] bg-white shadow-2xl">
            <div>
              <Image src={ladyleftImg} alt="ladyleft" />
            </div>
            <div>
              <p className=" w-full text-[#3a3a3a] text-xl sm:text-2xl font-bold text-center ">
                A better way to improve on your finances
              </p>
              <p className="mt-[2rem] text-xs sm:text-sm w-full h-[12rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[20rem] sm:h-[30rem] py-[5rem] px-[5rem] bg-[#f8f7fa]">
        <p className="w-full text-2xl sm:text-5xl text-[#28a745] font-extrabold text-center ">
          Our Partners
        </p>
        <Image
          className="mt-5 w-full"
          src={sponsorIconMobile}
          alt="partnerslogo"
        />
        <Image
          className="mt-5 w-full"
          src={sponsorIconMobile}
          alt="partnerslogo"
        />
      </div>
      <div className="w-full h-[42rem] py-[3rem] px-[2rem] border-b-2 bg-[#ffffff]">
        <div className="h-[30rem] w-full rounded-3xl px-[2rem] py-[2rem] bg-[#28A74533]">
          <div>
            <p
              className="w-full text-3xl sm:text-4xl font-bold text-center
             text-[#28A745]"
            >
              Take Control of your money with Mustard!
            </p>
            <p className="w-full text-xl sm:text-2xl font-bold mt-[2rem] text-center text-[#3a3a3a] ">
              We’re here to help you get the best out of your money, no strings
              attached.
            </p>
          </div>
          <Image
            className="w-full mt-[3rem]"
            src={socialIconsMobile}
            alt="tiltphone"
          />
        </div>
      </div>
      <div className="w-full py-[5rem] px-[2rem] bg-[#ffffff]">
        <div>
          <Image
            className="w-[10rem] sm:w-[20rem]"
            src={footerLogoImg}
            alt="footerlogo"
          />
        </div>
        <div className="flex justify-between mt-5 sm:mt-10">
          <div>
            <p className="h-10 w-full text-base text-left text-[#28a745] font-bold ">
              Features
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              Dollar Card
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              Save
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              Invest
            </p>
          </div>
          <div>
            <p className="h-[43px] w-full text-base text-left text-[#28a745] font-bold ">
              Company
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              Blog
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              Join Our Team
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              About Us
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div>
            <p className="h-[43px] w-full text-base text-left text-[#28a745] font-bold ">
              Help
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              Get help
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              FAQs
            </p>{" "}
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              <Link href="/contactus">Contact us</Link>
            </p>
          </div>
          <div>
            <p className="h-[43px] w-full text-base text-left text-[#28a745] font-bold ">
              Transparency
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              Terms & Condition
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              Privacy policy
            </p>
            <p className="h-10 w-full text-base text-left text-[#3a3a3a] font-bold ">
              Investment policy
            </p>
          </div>
        </div>
        <Image
          className="w-full mt-[3rem]"
          src={socialIconsMobile}
          alt="tiltphone"
        />
      </div>
    </Fragment>
  );
};

export default HomePageMobile;
