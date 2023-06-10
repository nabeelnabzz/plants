import React from "react";
import Header from "../../containers/components/Header/Header";
import hero from "../../assets/images/hero.png";
import Footer from "../../containers/components/Footer/Footer";
// import BreadCrumbs from "../../containers/components/BreadCrumbs";
import productIamge1 from "../../assets/images/product-image-small1.png";
import productIamge2 from "../../assets/images/product-image-small-2.png";
import productIamge3 from "../../assets/images/product-image-small-3.png";
import plant9 from "../../assets/images/plant9.png";
import plant10 from "../../assets/images/plant10.png";
import plant11 from "../../assets/images/plant11.png";
import plant12 from "../../assets/images/plant12.png";
import plant13 from "../../assets/images/plant13.png";
import plant14 from "../../assets/images/plant14.png";
import plant15 from "../../assets/images/plant15.png";
import plant16 from "../../assets/images/plant16.png";
import plant17 from "../../assets/images/plant17.png";
import plant18 from "../../assets/images/plant18.png";
import plant19 from "../../assets/images/plant19.png";
import plant20 from "../../assets/images/plant20.png";

const Products = () => {
  return (
    <>
      <div className="relative text-white">
        <img className="" src={hero} alt="hero" width="100%" height="800px" />
        <div className="w-[85%] absolute top-0 left-0 right-0 mx-auto">
          <Header color="text-white" />
          <div className="max-w-[800px] text-center top-0 left-0 right-0 mx-auto mt-10">
            <h1 className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-[120%]">
              Products
            </h1>
            {/* <BreadCrumbs name="Home" subName="Products" color={"absolute"} /> */}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="bg-white w-[1160px] absolute mt-[300px] ">
          <div className="flex justify-center items-center gap-[100px] text-[24px] mt-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <img src={productIamge1} alt="plant" width="" height="" />
              <h6>Terrarium</h6>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img src={productIamge2} alt="plant" width="" height="" />
              <h6>Natural Aquarium</h6>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img src={productIamge3} alt="plant" width="" height="" />
              <h6>Plants</h6>
            </div>
          </div>
          <div className="flex gap-5 px-10 py-5 justify-between mt-10">
            <button className="border border-neutral-400 text-[18px] text-black px-10 py-3">
              Filter
            </button>
            <button className="border border-neutral-400 text-[18px] text-black px-10 py-3">
              Sort
            </button>
          </div>

          <div className="grid grid-cols-12 mt-[80px] gap-10">
            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant9} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">Bonsai</div>
              <div className="text-[16px] font-normal text-center"> ₹350</div>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center">
              <div>
                <div className="absolute p-2 bg-[#2F5233] text-white rounded-tl-lg rounded-br-lg">
                  50% Off
                </div>
                <img src={plant10} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">Bonsai</div>
              <div className="flex gap-3 justify-center">
                <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
                  <span className="text-black">₹2400</span>
                </div>
                <div className="text-[16px] font-normal text-center">
                  ₹2000
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant11} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
                Money Plant
              </div>
              <div className="text-[16px] font-normal text-center"> ₹1200</div>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant12} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
                Aquariums
              </div>
              <div className="text-[16px] font-normal text-center"> ₹5500</div>
            </div>
            
            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant13} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
                Devil’s Plant
              </div>
              <div className="text-[16px] font-normal text-center"> ₹550</div>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant14} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
                Terrarium
              </div>
              <div className="text-[16px] font-normal text-center"> ₹2450</div>
            </div>{" "}
            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant15} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
                Terrarium
              </div>
              <div className="text-[16px] font-normal text-center"> ₹4000</div>
            </div>{" "}
            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant16} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
                Anthurium Crystallinum
              </div>
              <div className="text-[16px] font-normal text-center"> ₹960</div>
            </div>{" "}
            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant17} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
              Cactus
              </div>
              <div className="text-[16px] font-normal text-center"> ₹800</div>
            </div>{" "}
            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant18} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
              Terrarium
              </div>
              <div className="text-[16px] font-normal text-center"> ₹800</div>
            </div>{" "}
            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant19} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
              Lemon Cypress
              </div>
              <div className="text-[16px] font-normal text-center"> ₹800</div>
            </div>{" "}
            <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center">
              <div>
                <img src={plant20} alt="plant" width="" height="" />
              </div>
              <div className="text-[25px] font-normal text-center">
              Terrarium
              </div>
              <div className="text-[16px] font-normal text-center"> ₹800</div>
            </div>
          </div>
        </div>
      </div>
      <div id="aboutUs" className="mt-[1200px]">
        <Footer />
      </div>
    </>
  );
};

export default Products;
