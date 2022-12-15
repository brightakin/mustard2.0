import Image from "next/image";
import { Fragment } from "react";
import happyManImg from "../../Assets/happyman.png";
import { useRouter } from "next/router";
import rectangleImg from "../../Assets/rectangle.png";
import phoneDashboardImg from "../../Assets/dashboard.png";
import card2Img from "../../Assets/card2.png";
import homePagePhone from "../../Assets/homepagephone.png";
import worldImg from "../../Assets/world.png";
import ladyleftImg from "../../Assets/ladies.png";
import partnersLogoImg from "../../Assets/partnerslogo.png";
import tiltPhoneImg from "../../Assets/tiltphone.png";
import footerLogoImg from "../../Assets/footerlogo.png";
import storeIconsImg from "../../Assets/storeicons.png";
import Link from "next/link";
import socialIconsImg from "../../Assets/socialicons.png";

const HomePageDesktop = () => {
  const router = useRouter();
  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <Fragment>
      <div className="w-full h-[100%] bg-[#28a745]">
        <div className="flex gap-[14rem]">
          <div>
            <h1 className="text-[#f8f7fa] w-[30rem] mt-6 ml-12 h-44 text-5xl font-bold text-left leading-[60px]">
              Take Control of your money with Mustard!
            </h1>
            <p className=" h-36 w-[28rem] text-[#f8f7fa] mt-4 text-2xl font-semibold text-left leading-[40px] ml-12">
              We’re here to help you get the best out of your money, no strings
              attached.
            </p>
            <button
              onClick={handleRegister}
              className=" w-56 h-14 rounded-xl mt-4 ml-12 hover:scale-105 duration-500 text-[#28a745] text-2xl font-semibold bg-[#f8f7fa] hover:"
            >
              Create an Account
            </button>
          </div>
          <div>
            <Image
              className="w-[30rem] h-[28rem]"
              src={homePagePhone}
              alt="butterfly"
            />
          </div>
        </div>
        <div className="flex justify-between ml-12 mr-2">
          <div className="mt-[3rem]">
            <Image src={rectangleImg} alt="rectangle" />
            <p className="text-2xl mt-3 font-bold text-left text-[#ffffff] ">
              Mustard Key figures
            </p>
          </div>
          <div className="mt-[5rem]">
            <p className=" text-xl text-center text-[#ffffff] font-bold ">
              Active accounts
            </p>
            <p className="text-3xl text-center text-[#ffffff] font-bold ">
              10K+
            </p>
          </div>
          <div className="mt-[5rem]">
            <p className="text-xl text-center text-[#ffffff] font-bold ">
              Total transactions
            </p>
            <p className="text-3xl text-center text-[#ffffff] font-bold ">
              100K+
            </p>
          </div>
          <div className="mt-[5rem]">
            <p className="text-xl text-center text-[#ffffff] font-bold ">
              Total payouts
            </p>
            <p className=" text-3xl text-center text-[#ffffff] font-bold ">
              500.3M
            </p>
          </div>
          <div className="mt-[5rem]">
            <p className="text-xl text-center text-[#ffffff] font-bold ">
              Total Investment
            </p>
            <p className="text-3xl text-center text-[#ffffff] font-bold ">
              10.3K+
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pt-10 h-[115rem] bg-[#ffffff] px-12">
        <div className="flex gap-[14rem] lg:gap-0 lg:justify-between">
          <div className="">
            <p className="h-[12rem] w-[30rem] text-4xl font-bold text-[#28a745] text-left ">
              Save in Dollars & Spend Dollar easily, Anytime, Anywhere.
            </p>
            <p className="h-[10rem] w-[38rem] text-xl text-left text-[#3a3a3a] ">
              Mustard uses the highest level of internet security and it is
              protected by Comodo SSL certificate with end-to-end data
              encryption to completely protect your data.
            </p>
            <a
              href="/"
              className="h-[4rem] w-[43rem] text-2xl text-left text-[#28a745] "
            >
              Start saving in dollar on our new app{" "}
              <span className="text-[20px] text-[#28a745] m-2 ">&#8594;</span>
            </a>
          </div>
          <div>
            <Image
              className="z-10 w-[38rem] h-[28rem]"
              src={phoneDashboardImg}
              alt="phoneDashboard"
            />
          </div>
        </div>
        <div className="flex gap-[25rem] lg:gap-0 lg:justify-between">
          <Image
            className="mt-[10rem] w-[30rem] h-[28rem] "
            src={card2Img}
            alt="img"
          />
          <div className=" mt-[10rem] ">
            <p className="h-[10rem] w-[28rem] text-4xl font-bold text-[#28a745] text-left ">
              Create Dollar Card for Internet transactions.
            </p>
            <p className="h-[8rem] w-[38rem] text-xl text-left text-[#3a3a3a] ">
              Mustard uses the highest level of internet security and it is
              protected by Comodo SSL certificate with end-to-end data
              encryption to completely protect your data.
            </p>
            <a
              href="/"
              className="h-[4rem] w-[43rem] text-2xl text-left text-[#28a745] "
            >
              Start saving in dollar on our new app{" "}
              <span className="text-[20px] text-[#28a745] m-2 ">&#8594;</span>
            </a>
          </div>
        </div>
        <div className="flex gap-[14rem] mt-[10rem] lg:gap-0 lg:justify-between">
          <div className="">
            <p className="h-[12rem] w-[30rem] text-4xl font-bold text-[#28a745] text-left ">
              You can make your money work when you In tangible Assets.
            </p>
            <p className="h-[10rem] w-[38rem] text-xl text-left text-[#3a3a3a] ">
              Mustard uses the highest level of internet security and it is
              protected by Comodo SSL certificate with end-to-end data
              encryption to completely protect your data.
            </p>
            <a
              href="/"
              className="h-[4rem] w-[43rem] text-2xl text-left text-[#28a745] "
            >
              Start saving in dollar on our new app{" "}
              <span className="text-[20px] text-[#28a745] m-2 ">&#8594;</span>
            </a>
          </div>
          <div>
            <Image
              className="z-10 w-[38rem] h-[32rem]"
              src={happyManImg}
              alt="happyman"
            />
          </div>
        </div>
        <div className="flex justify-between mr-28 mt-[3rem]"></div>
      </div>
      <div className="w-full h-[65rem] py-[5rem] px-[5rem] bg-[#28a745]">
        <div>
          <p className="h-[8rem] w-full text-white text-5xl font-bold text-right ">
            Send money to anyone, anywhere, anytime without any limitation.
          </p>
          <p className="w-full text-white h-[10rem] text-xl font-normal text-right ">
            You can easily send money to Domiliciary accounts and local banks
            without stress. You can easily send money to your loved ones and
            they do cash pickup or send in-app through their Mustard tags.
          </p>
          <Image className="" src={worldImg} alt="world" />
        </div>
      </div>
      <div className="w-full h-[50rem] py-[5rem] px-[5rem] bg-[#ffffff]">
        <div>
          <p className="w-full text-[#28a745] text-4xl font-extrabold text-center ">
            For every Mustard User, We provide you an Accountability Manager
          </p>
          <div className="flex h-[20rem] w-full p-[3rem] mt-16 gap-[5rem] text-[#3a3a3a] bg-white shadow-2xl">
            <div>
              <Image className="" src={ladyleftImg} alt="ladyleft" />
            </div>
            <div>
              <p className="h-[3rem] w-full text-[#3a3a3a] text-3xl font-bold text-left ">
                A better way to improve on your finances
              </p>
              <p className="mt-[2rem] w-full h-[12rem]">
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
      <div className="w-full h-[20rem] py-[5rem] px-[5rem] bg-[#f8f7fa]">
        <p className="w-full text-5xl text-[#28a745] font-extrabold text-center ">
          Our Partners
        </p>
        <Image className="mt-5" src={partnersLogoImg} alt="partnerslogo" />
      </div>
      <div className="w-full h-[42rem] py-[5rem] px-[5rem] border-b-2 bg-[#ffffff]">
        <div className="flex h-[30rem] w-full rounded-3xl px-[2rem] bg-[#28A74533]">
          <div>
            <p className="h-[8rem] w-full text-4xl font-bold text-left text-[#28A745] mt-[4rem] ">
              Take Control of your money with Mustard!
            </p>
            <p className="h-[4rem] w-full text-2xl font-bold text-left text-[#3a3a3a] ">
              We’re here to help you get the best out of your money, no strings
              attached.
            </p>
            <button
              type="submit"
              className="bg-[#28a745] text-xl font-bold w-56 h-[4rem] text-[#ffffff] rounded-[20px] cursor-pointer mt-[4rem] hover:scale-105 duration-500"
            >
              Create an Account
            </button>
          </div>
          <Image className="" src={tiltPhoneImg} alt="tiltphone" />
        </div>
      </div>
      <div className="w-full flex gap-[7rem] py-[5rem] px-[5rem] bg-[#ffffff]">
        <div>
          <Image className="w-[10rem]" src={footerLogoImg} alt="footerlogo" />
        </div>
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
      <div>
        <Image
          className="w-[18rem] ml-[4rem]"
          src={storeIconsImg}
          alt="storeicons"
        />
        <p className="text-[#28a745] w-full text-xl ml-[4rem] font-bold text-left ">
          Contact
        </p>
        <a
          href="/"
          className="text-[#28a745] ml-[4rem] w-full text-sm font-normal text-left "
        >
          help@mustard.ng
        </a>
        <Image
          className=" ml-[4rem] w-[10rem]"
          src={socialIconsImg}
          alt="socialicons"
        />
      </div>
    </Fragment>
  );
};

export default HomePageDesktop;
