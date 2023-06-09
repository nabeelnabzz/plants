import React from "react";
import star from "../../../assets/images/Star.svg";
import plant1 from "../../../assets/images/plant1.png";
import plant2 from "../../../assets/images/plant2.png";
import plant3 from "../../../assets/images/plant3.png";
import plant4 from "../../../assets/images/plant4.png";
import plant5 from "../../../assets/images/plant5.png";
import plant6 from "../../../assets/images/plant6.png";

const PalntsViewTail = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="grid grid-cols-12 gap-5">
          <div className="flex flex-col gap-3 col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-3">
            <div className="text-[25px] mt-5">Devil's ivy plant</div>
            <div className="flex gap-3">
              <div className="line-through text-[#E84F27] text-[24px]">
                <span className="text-black">₹750.00</span>
              </div>
              <div className="text-[#2F5233] text-[24px]">₹550.00</div>
            </div>
            <div className="flex gap-3 items-center">
              <img src={star} alt="star" width={30} />
              <img src={star} alt="star" width={30} />
              <img src={star} alt="star" width={30} />
              <img src={star} alt="star" width={30} />
              <img src={star} alt="star" width={30} />
              <div className="text-[#666666] text-[18px] !font-light">
                Reviews
              </div>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <ul className="list-disc w-[90%] mx-auto text-[16px] font-normal">
              <li>Family : Araceae.</li>
              <li>Ever green vine, Indoor, Air purifying.</li>
              <li>
                Devil’s ivy Helps to remove harmful & often toxic pollutant in
                air such as formaldehyde and high levels of dust.
              </li>
              <li>
                The average lifespan of an indoor pothos plant is between 5 and
                10 years. But there are many factors that play into that,
                including maintenance, care, and proper watering
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-6">
            <img src={plant1} alt="plant" width={"570px"} height={"521px"} />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <div className="flex">
                <div className="text-[24px] col-span-1 border border-black p-2 w-[50px] h-[56px] text-center">
                  1
                </div>
                <div className="flex flex-col">
                  <button className="border border-black w-[28px] h-[28px]">
                    +
                  </button>
                  <button className="border border-black  w-[28px] h-[28px]">
                    -
                  </button>
                </div>
              </div>
              <div>
                <button className="border border-black w-[150px] h-[56px]">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="text-[#ffffff] bg-[#2F5233] h-[56px] w-[246px] flex items-center justify-center">
              <button>Buy now</button>
            </div>
          </div>
        </div>
        <div className="border-t border-grey-50 my-5"></div>
        <ul className="flex justify-start items-center flex-wrap col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-2 gap-5">
          <li className="text-[16px]">
            Description
            <div className="border-t border-black"></div>
          </li>

          <li className="text-[16px]">Additional Information</li>
          <li className="text-[16px]">Reviews</li>
          <li className="text-[16px]">How to Care</li>
        </ul>

        <div className="border-t border-grey-50 my-5"></div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-6 mt-10 text-[#666666] font-light">
            <img src={plant2} alt="plant" width="472px" height="511px" />
            <p>
              It is also called devil's vine or devil's ivy because it is almost
              impossible to kill and it stays green even when kept in the dark.
              It is sometimes mistakenly labeled as a Philodendron, Pothos or
              Scindapsus in plant stores. It is commonly known as a money plant
              in many parts of the Indian subcontinent
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-6 mt-10">
            <p className="text-[34px] font-light">
              What is Devil's Ivy good for?
            </p>
            <p className="text-[#666666] font-light">
              Pothos featured in NASA's Clean Air Study, and was proven to
              remove indoor pollutants such as formaldehyde, trichloroethene,
              toluene, xylene, and benzene. Many of these are found in common
              cleaning products we use in our homes. Sometimes mistakenly
              labelled as a philodendron in nurseries, it fights nasty toxins
              like benzene (found in paints and varnishes), xylene and
              trichloroethylene (found in solvents), and formaldehyde (found in
              carpets and upholstery), which is why it's a great indoor plant
              for air purification.
            </p>
            <div className="flex justify-end mt-8">
              <img src={plant3} alt="plant" width={"571px"} height={"464px"} />
            </div>
          </div>
        </div>

        <h3 className="text-[32px] text-center mt-[70px]">Related Product</h3>
        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4">
            <div>
              <img src={plant4} alt="plant" width="" height="" />
            </div>
            <div className="text-[25px] font-normal text-center">
              Astrophytum Capricorn
            </div>
            <div className="text-[16px] font-normal text-center"> ₹800</div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative">
            <div className="absolute p-2 bg-[#2F5233] text-white rounded-tl-lg rounded-br-lg">
              50% Off
            </div>
            <div>
              <img src={plant5} alt="plant" width="" height="" />
            </div>
            <div className="text-[25px] font-normal text-center">
              Think Planty Cactus
            </div>
            <div className="flex gap-3 justify-center">
              <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
                <span className="text-black">₹400</span>
              </div>
              <div className="text-[16px] font-normal text-center"> ₹800</div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4">
            <div>
              <img src={plant6} alt="plant" width="" height="" />
            </div>
            <div className="text-[25px] font-normal text-center">
              Mammillaria
            </div>
            <div className="text-[16px] font-normal text-center"> ₹900</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-[53px]">
          <div className="w-[19px] p-3 bg-[#D9D9D9] rounded-full"></div>
          <div className="w-[19px] p-3 bg-[#D9D9D9] rounded-full"></div>
          <div className="w-[19px] p-3 bg-[#D9D9D9] rounded-full"></div>
          <div className="w-[19px] p-3 bg-[#D9D9D9] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PalntsViewTail;
