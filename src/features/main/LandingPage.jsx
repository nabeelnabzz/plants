import React, { useEffect, useState } from "react";
import Header from "../../containers/components/Header/Header";
import hero from "../../assets/images/hero.png";
import sideLeaf from "../../assets/images/sideLeaf.png";
import customerSupport from "../../assets/images/customer-support.png";
import delivery from "../../assets/images/home-delivery.png";
import customize from "../../assets/images/customize-terrarium.png";
import terrarium from "../../assets/images/terrarium.png";
import hoyaCornasa from "../../assets/images/HoyaCornasa.png";
import faux from "../../assets/images/faux.png";
import plant5 from "../../assets/images/plant5.png";
import naturalAquarium from "../../assets/images/naturalAquarium.png";
import ourWork from "../../assets/images/our-works.png";
import gasteria from "../../assets/images/gasteria.png";
import thelocactus from "../../assets/images/thelocactus.png";
import ubelmannie from "../../assets/images/Ubelmannie.jpg";
import astropytum from "../../assets/images/astropytum.png";
import pepper from "../../assets/images/pepper.png";
import mammmileria from "../../assets/images/mammileria.png";
import regrow from "../../assets/images/regrow.png";
import Footer from "../../containers/components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";

const LandingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="relative text-white">
        <img className="" src={hero} alt="hero" width="100%" height="800px" />
        <div
          className="w-[85%] absolute top-0 left-0 right-0 mx-auto"
          data-aos="fade-up"
        >
          <Header
            color="text-white"
            menuOpen={menuOpen}
            handleMenuToggle={handleMenuToggle}
          />
          {!menuOpen ? (
            <>
              <div className="max-w-[800px] text-center top-0 left-0 right-0 mx-auto mt-0 sm:mt-0 md:mt-[100px[] lg:mt-[180px] ">
                <h1 className="mt-8 md:mt-2 lg:mt-2 text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-[120%]">
                  I’m rooting for my flowers to grow.
                </h1>
              </div>
              <div className="flex gap-5 top-0 left-0 right-0 justify-center mt-10">
                <button
                  className="bg-[white] text-[12px] md:text-[18px] lg:text-[18px] text-black px-10 py-3 rounded-[14px] hover:bg-[#2F5233] hover:text-white"
                  onClick={() => navigate("/products")}
                >
                  Shop Now
                </button>
                <button className="border text-[12px] md:text-[18px] lg:text-[18px] text-white px-10 py-3 rounded-[14px] hover:bg-[#2F5233] hover:text-white">
                  Continue
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="mt-[70px] relative" id="customize" data-aos="fade-up">
        <div className="text-center text-[35px] md:text-[50px] lg:text-[50px] font-normal">
          Best Ever Service
        </div>
        <div className="absolute top-[-70px]">
          <img
            className="w-[30%] sm:w-[50%] md:w-[70%] lg:w-[100%]:"
            src={sideLeaf}
            alt="hero"
            height=""
          />
        </div>

        <div className="grid grid-cols-12 gap-5 px-[50px] md:px-[100px] lg:px-[100px] font-normal text-center mt-8 text-[34px] justify-center items-center">
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5 justify-center items-center">
            <img
              className=""
              src={customerSupport}
              alt="customer-support"
              width=""
              height=""
            />
            <div>Customer Support</div>
            <p className="text-[16px] text-[#999999]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5 justify-center items-center">
            <img
              className=""
              src={customize}
              alt="delivery"
              width=""
              height=""
            />
            <div>Customize terrarium& Natural aquariums</div>
            <p className="text-[16px] text-[#999999]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5 justify-center items-center">
            <img
              className=""
              src={delivery}
              alt="customize"
              width=""
              height=""
            />
            <div>Home Delivery</div>
            <p className="text-[16px] text-[#999999]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 px-5 md:px-[100px] lg:px-[100px] mt-8 text-white text-[16px] md:text-[22px] lg:text-[22px] ml-[-20px]">
          <div
            className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 flex flex-col justify-center relative"
            data-aos="fade-left"
          >
            <img className="" src={faux} alt="customize" width="" height="" />
            <div className="absolute right-[2px] top-[10px] md:top-[50px] lg:top-[50px] max-w-[200px] md:max-w-[350px] lg:max-w-[350px]">
              <p className="font-light">
                Faux watermelon peperomia plant in a gray pot
              </p>
              <p className="text-[10px] md:text-[16px] lg:text-[16px] mt-1 md:mt-8 lg:mt-8 ">
                Discount up to 30% off today{" "}
              </p>
            </div>
          </div>
          <div
            className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 flex flex-col justify-center relative"
            data-aos="fade-right"
          >
            <img className="" src={pepper} alt="customize" width="" height="" />
            <div className="absolute right-[2px] md:right-[12px] lg:right-[12px] top-[20px] md:top-[60px] lg:top-[60px] max-w-[180px] md:max-w-[350px] lg:max-w-[350px]">
              <p className="font-light">Pepper face plant in a small pot</p>
              <p className="text-[10px] md:text-[16px] lg:text-[16px] mt-1 md:mt-8 lg:mt-8">
                Discount up to 50% off today{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center text-[35px] md:text-[50px] lg:text-[50px] font-normal mt-10"
          id="terrarium"
        >
          New Arrivals
        </div>

        <div
          className="grid grid-cols-12 gap-5 px-[50px] md:px-[100px] lg:px-[100px] mt-8 text-white text-[24px]"
          data-aos="fade-up"
        >
          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 relative flex felx-col justify-center">
            <div>
              <div className="absolute p-2 bg-[#2F5233] text-white rounded-tl-lg rounded-br-lg text-[16px]">
                20% Off
              </div>
              <img src={hoyaCornasa} alt="plant" width="" height="" />
              <div className="text-[25px] text-black font-normal text-center">
                Hoya Carnosa
              </div>
              <div className="flex gap-3 justify-center">
                <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
                  <span className="text-black">₹400</span>
                </div>
                <div className="text-[16px] text-black font-normal text-center">
                  {" "}
                  ₹800
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 relative flex felx-col justify-center">
            <div>
              <div className="absolute p-2 bg-[#2F5233] text-white rounded-tl-lg rounded-br-lg text-[16px]">
                50% Off
              </div>
              <img src={terrarium} alt="plant" width="" height="" />
              <div className="text-[25px] text-black font-normal text-center">
                Terrarium
              </div>
              <div className="flex gap-3 justify-center">
                <div className="text-[16px] font-normal text-black text-center">
                  ₹300
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 relative flex felx-col justify-center">
            <div>
              <img src={regrow} alt="plant" width="" height="" />
              <div className="text-[25px] text-black font-normal text-center">
                Regrow Spring Onions in Water
              </div>
              <div className="flex gap-3 justify-center">
                <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
                  <span className="text-black">₹3000</span>
                </div>
                <div className="text-[16px] font-normal text-black text-center">
                  ₹1500
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-12 gap-5 px-[50px] md:px-[100px] lg:px-[100px] font-normal text-left mt-[80px] text-[34px] justify-center !items-center relative"
        id="ourWork"
        data-aos="fade-left"
      >
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
          <img src={ourWork} alt="plant" width="" height="" />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 flex flex-col justify-center items-start">
          <div className="text-[50px]">
            <span className="text-[black]">Our</span>{" "}
            <span className="text-[#2F5233]">Works</span>
          </div>
          <div>
            <p className="text-[16px] text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              reprehenderit perspiciatis necessitatibus blanditiis reiciendis
              officiis eaque distinctio accusantium qui architecto dolor
              laudantium, molestiae omnis, assumenda mollitia at possimus
              dolorem. Magni?
            </p>
          </div>
          <div className="mt-5">
            <button className="border border-neutral-900 text-[18px] text-black px-10 py-3 rounded-[15px] hover:bg-[#2F5233] hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-[35px] md:text-[50px] lg:text-[50px] text-center mt-[100px]">
        Cactus
      </h3>
      <div
        className="flex flex-col justify-center items-center gap-10 mt-[80px] px-[50px] md:px-[100px] lg:px-[100px]"
        data-aos="fade-up"
      >
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={astropytum} alt="plant" width="" height="" />
            </div>
            <div className="text-[25px] font-normal text-center">
              Astrophytum Capricorn
            </div>
            <div className="text-[16px] font-normal text-center"> ₹1800</div>
          </div>
          <div className="relative flex flex-col justify-center items-center">
            <div>
              <div className="absolute p-2 bg-[#2F5233] text-white rounded-tl-lg rounded-br-lg">
                50% Off
              </div>
              <img src={plant5} alt="plant" width="373px" height="" />
            </div>
            <div className="text-[25px] font-normal text-center">
              Think Planty Cactus
            </div>
            <div className="flex gap-3 justify-center">
              <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
                <span className="text-black">₹1000</span>
              </div>
              <div className="text-[16px] font-normal text-center"> ₹800</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={mammmileria} alt="plant" width="" height="" />
            </div>
            <div className="text-[25px] font-normal text-center">
              Mammillaria
            </div>
            <div className="text-[16px] font-normal text-center"> ₹800</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={gasteria} alt="plant" width="" height="" />
            </div>
            <div className="text-[25px] font-normal text-center">Gasteria</div>
            <div className="flex gap-3 justify-center">
              <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
                <span className="text-black">₹1000</span>
              </div>
              <div className="text-[16px] font-normal text-center"> ₹800</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={thelocactus} alt="plant" width="" height="" />
            </div>
            <div className="text-[25px] font-normal text-center">
              Thelocactus
            </div>
            <div className="text-[16px] font-normal text-center"> ₹800</div>
          </div>
          <div className="relative flex flex-col justify-center items-center">
            <div>
              <div className="absolute p-2 bg-[#2F5233] text-white rounded-tl-lg rounded-br-lg">
                50% Off
              </div>
              <img src={ubelmannie} alt="plant" width="" height="" />
            </div>
            <div className="text-[25px] font-normal text-center">
              Ubelmannia
            </div>
            <div className="flex gap-3 justify-center">
              <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
                <span className="text-black">₹1000</span>
              </div>
              <div className="text-[16px] font-normal text-center"> ₹800</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row lg:flex-row gap-10 md:gap-5 lg:gap-0"
        id="naturalAquarium"
      >
        <div
          className="flex flex-col justify-center items-start"
          data-aos="fade-left"
        >
          <div>
            <img src={naturalAquarium} alt="plant" width="" height="" />
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center md:items-start lg:items-start text-[35px] md:text-[50px] lg:text-[50px] ml-0 md:ml-[-200px] lg:ml-[-200px] px-10"
          data-aos="fade-right"
        >
          <div>
            <span className="text-[#2F5233]">Natural</span> Aquarium
            Customization
          </div>
          <p className="text-[16px] max-w-[500px] md:max-w-[600px] lg:max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            veniam veritatis explicabo iure architecto. Accusantium quas, fugit
            similique dolor eveniet qui! Pariatur, voluptate similique
            blanditiis accusantium quas consequatur architecto praesentium!
          </p>
          <div className="mt-5">
            <button className="border border-neutral-900 text-[18px] text-black px-10 py-3 rounded-[15px] hover:bg-[#2F5233] hover:text-white">
              Know more
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-[30px] md:text-[50px] lg:text-[50px] text-center mt-[50px] text-[#2F5233]">
        What People Are Saying....
      </h3>
      <div
        className="flex flex-col md:flex-row lg:flex-row mt-[80px] text-[#333333] gap-10 px-[20px] md:px-[100px] lg:px-[100px]"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-[50px] text-[#2F5233] font-extrabold">“</h2>
            <div>
              <p className="text-[16px]">
                Nice plant..Well packed and arrived on time.! So here i
                discribed one more brand which delivers healthy plants at
                reasonable rates in almost perfect condition.. Keep it up..!
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="border-t border-black w-[80px]"></div>
              <p className="text-[#2F5233] !font-medium">Shankar Raj</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[50px] text-[#2F5233] font-extrabold">“</h2>
          <div>
            <p className="text-[16px]">
              Good service at correct time. My terttariums and i can maintain
              very well because of green museum. The team is very kind and
              helpfull. Periodical maintain can very help full to grow to grow
              my plants. Thnaks to green museum ..
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <div className="border-t border-black w-[80px]"></div>
            <p className="text-[#2F5233] !font-medium">Meenakshi</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[50px] text-[#2F5233] font-extrabold">“</h2>
          <div>
            <p className="text-[16px]">
              It was a greate experience.. Thanks to green museum to help me.
              They are providing good service and healthy plants. So definitly i
              will suggest my all friends. Thank you green museum team. Keep it
              up
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <div className="border-t border-black w-[80px]"></div>
            <p className="text-[#2F5233] !font-medium">Karthik</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mt-[53px]">
        <div className="w-[15px] p-3 bg-[#1A140F] rounded-full"></div>
        <div className="w-[15px] p-3 bg-[#D9D9D9] rounded-full"></div>
        <div className="w-[15px] p-3 bg-[#D9D9D9] rounded-full"></div>
      </div>

      <div id="aboutUs">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
