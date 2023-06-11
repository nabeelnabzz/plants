import React from "react";
import twiter from "../../../assets/images/twitter.svg";
import facebook from "../../../assets/images/facebook.svg";
import instagram from "../../../assets/images/instagram.svg";
import mail from "../../../assets/images/mail.svg";
import youtube from "../../../assets/images/youtube.svg";

const Footer = () => {
  return (
    <div className="bg-[#2F5233] h-full lg:h-[410px]  w-full mt-[53px] p-10">
      <div className="flex flex-col justify-around md:flex-row lg:flex-row mt-8 text-[#F2FFF4] font-normal gap-8">
        <div className="flex flex-col items-left justify-center gap-5">
          <h3 className="text-[34px] font-light">Green Museum</h3>
          <div className="max-w-[300px]">
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              architecto error quisquam eaque delectus ab amet veniam soluta
              beatae quis, quod dolore magni ullam dolores possimus, maxime iure
              eos at!
            </p>
          </div>
          <div className="flex gap-5">
            <img src={twiter} alt="star" width={24} />
            <img src={facebook} alt="star" width={24} />
            <img src={instagram} alt="star" width={24} />
            <img src={mail} alt="star" width={24} />
            <img src={youtube} alt="star" width={24} />
          </div>
        </div>
        <div className="mr-auto sm:mx-auto">
          <div className="flex flex-col gap-5 items-left">
            <div>
              <div className="">Help & Information</div>
              <div className="border-t border-grey-50 w-[39px]"></div>
            </div>
            <div className="">Privacy Policys</div>
            <div className="">Contact Us</div>
            <div className="">FAQ’s</div>
            <div className="">Shipping & Cancellation</div>
            <div className="">Store Location</div>
          </div>
        </div>
        <div className="mr-auto sm:mx-auto">
          <div className="flex flex-col gap-3">
            <div>
              <div className="">Services</div>
              <div className="border-t border-grey-50 w-[39px]"></div>
            </div>
            <div className="">Customer service</div>
            <div className="">Customization</div>
            <div className="">Product Selling</div>
          </div>
        </div>
        <div className="mr-auto sm:mx-auto">
          <div className="flex flex-col gap-3">
            <div>
              <div className="">Quick Links</div>
              <div className="border-t border-grey-50 w-[39px]"></div>
            </div>
            <div className="">Search</div>
            <div className="">About Us</div>
            <div className="">Refund Policys</div>
            <div className="">Social Media</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
