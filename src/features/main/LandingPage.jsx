import React from "react";
import Header from "../../containers/components/Header/Header";
import hero from "../../assets/images/hero.png";
import sideLeaf from "../../assets/images/sideLeaf.png";
import customerSupport from "../../assets/images/customerSupport.svg";
import delivery from "../../assets/images/delivery.svg";
import customize from "../../assets/images/customize.png";
import terrarium from "../../assets/images/terrarium.png";
import hoyaCornasa from "../../assets/images/HoyaCornasa.png";
import regrow from "../../assets/images/regrow.png";

const LandingPage = () => {
  return (
    <>
      <div className="relative text-white">
        <img className="" src={hero} alt="hero" width="100%" height="900px" />
        <div className="w-[85%] absolute top-0 left-0 right-0 mx-auto">
          <Header color="text-white" />
          <div className="max-w-[800px] text-center top-0 left-0 right-0 mx-auto mt-[180px]">
            <h1 className="text-[80px] leading-[120%]">
              I’m rooting for my flowers to grow.
            </h1>
          </div>
          <div className="flex gap-5 top-0 left-0 right-0 justify-center mt-10">
            <button className="bg-[white] text-[18px] text-black px-10 py-3 rounded-lg">
              Shop Now
            </button>
            <button className="border text-[18px] text-white px-10 py-3 rounded-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[70px] relative">
        <div className="text-center text-[50px] font-normal">
          Best Ever Service
        </div>
        <div className="absolute top-[-70px]">
          <img className="" src={sideLeaf} alt="hero" width="100%" height="" />
        </div>

        <div className="grid grid-cols-12 gap-5 px-[100px] font-normal text-center mt-8 text-[34px] justify-center items-center">
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col gap-5 justify-center items-center">
            <img
              className=""
              src={customerSupport}
              alt="customer-support"
              width="63px"
              height=""
            />
            <div>Customer Support</div>
            <p className="text-[16px] text-[#999999]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              minima, consequuntur officiis eaque commodi sequi magnam
              exercitationem odio architecto temporibus, alias recusandae culpa
              cum. Maiores saepe qui exercitationem ipsam architecto?
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col gap-5 justify-center items-center">
            <img
              className=""
              src={delivery}
              alt="delivery"
              width="63px"
              height=""
            />
            <div>Customize terrarium& Natural aquariums</div>
            <p className="text-[16px] text-[#999999]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              minima, consequuntur officiis eaque commodi sequi magnam
              exercitationem odio architecto temporibus, alias recusandae culpa
              cum. Maiores saepe qui exercitationem ipsam architecto?
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col gap-5 justify-center items-center">
            <img
              className=""
              src={customize}
              alt="customize"
              width="63px"
              height=""
            />
            <div>Home Delivery</div>
            <p className="text-[16px] text-[#999999]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              minima, consequuntur officiis eaque commodi sequi magnam
              exercitationem odio architecto temporibus, alias recusandae culpa
              cum. Maiores saepe qui exercitationem ipsam architecto?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 px-[100px] mt-8 text-white text-[24px]">
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 flex flex-col justify-center bg-[#2F5233] p-5">
            <p>Faux watermelon peperomia plant in a gray pot</p>
            <p className="text-[16px]">Discount up to 30% off today </p>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 flex flex-col justify-center bg-[#E3B957] p-5">
            <p>Faux watermelon peperomia plant in a gray pot</p>
            <p className="text-[16px]">Discount up to 50% off today </p>
          </div>
        </div>

        <div className="text-center text-[50px] font-normal mt-10">
          New Arrivals
        </div>

        <div className="grid grid-cols-12 gap-5 px-[100px] mt-8 text-white text-[24px]">
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative">
            <div className="absolute p-2 bg-[#2F5233] text-white rounded-tl-lg rounded-br-lg text-[16px]">
              20% Off
            </div>
            <div>
              <img src={hoyaCornasa} alt="plant" width="" height="" />
              <div className="text-[25px] text-black font-normal text-center">
              Hoya Carnosa
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
                <span className="text-black">₹400</span>
              </div>
              <div className="text-[16px] text-black font-normal text-center"> ₹800</div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative">
            <div>
              <img src={terrarium} alt="plant" width="" height="" />
              <div className="text-[25px] text-black font-normal text-center">
                Regrow Spring Onions in Water
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <div className="text-[16px] font-normal text-black text-center"> ₹300</div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative">
            <div className="absolute p-2 bg-[#2F5233] text-white rounded-tl-lg rounded-br-lg text-[16px]">
              50% Off
            </div>
            <div>
              <img src={regrow} alt="plant" width="" height="" />
              <div className="text-[25px] text-black font-normal text-center">
              Terrarium
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
                <span className="text-black">₹3000</span>
              </div>
              <div className="text-[16px] font-normal text-black text-center"> ₹1500</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
