import React from "react";
import Header from "../../containers/components/Header/Header";
import hero from "../../assets/images/hero.png";
import Footer from "../../containers/components/Footer/Footer";
// import BreadCrumbs from "../../containers/components/BreadCrumbs";
import productIamge1 from "../../assets/images/product-image-small1.png";
import productIamge2 from "../../assets/images/product-image-small-2.png";
import productIamge3 from "../../assets/images/product-image-small-3.png";
import swisschees from "../../assets/images/swisschees.png";
import bonsai from "../../assets/images/bonsai.png";
import moneyplant from "../../assets/images/moneyplant.png";
import aquarium from "../../assets/images/aquarium.png";
import devilsplant from "../../assets/images/devilsplant.png";
import terarium from "../../assets/images/terarium.png";
import terariumone from "../../assets/images/terariumone.png";
import anthurium from "../../assets/images/anthurium.png";
import cactus from "../../assets/images/cactus.png";
import terrariumtwo from "../../assets/images/terrariumtwo.png";
import lemon from "../../assets/images/lemon.png";
import terrariumthree from "../../assets/images/terrariumthree.png";
import filter from "../../assets/images/Filter.svg";
import sort from "../../assets/images/Sort.svg";
import PlantCard from "../../components/PlantCard";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
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

      <div className="w-full hidden justify-center items-center sm:hidden md:flex lg:flex">
        <div className="bg-white p-10 absolute !mt-[300px]">
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
            <button className="border border-neutral-400 text-[18px] text-black px-10 py-3 flex items-center gap-2">
              <img src={filter} alt="filter" width="" height="" />
              Filter
            </button>
            <button className="border border-neutral-400 text-[18px] text-black px-10 py-3 flex items-center gap-2">
              <img src={sort} alt="filter" width="" height="" />
              Sort
            </button>
          </div>

          <div className="grid grid-cols-12 mt-[80px] gap-10">
            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/swisschees", {
                  state: {
                    name: "Swiss Chees Plant",
                    amount: "₹350",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard
                image={swisschees}
                name="Swiss Chees Plant"
                amount="₹350"
              />
            </div>
            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/bonsai", {
                  state: {
                    name: "Bonsai",
                    amount: "₹2000",
                    offer: "₹2400",
                  },
                });
              }}
            >
              <PlantCard
                image={bonsai}
                name="Bonsai"
                amount="₹2400"
                offer="₹2000"
                percentage="20% off"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/moneyplant", {
                  state: {
                    name: "Money Plant",
                    amount: "₹1200",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard image={moneyplant} name="Money Plant" amount="₹1200" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/aquarium", {
                  state: {
                    name: "Aquariums",
                    amount: "₹5000",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard image={aquarium} name="Aquariums" amount="₹5000" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/devilsplant", {
                  state: {
                    name: "devilsplant",
                    amount: "₹550",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard
                image={devilsplant}
                name="Devil’s Plant"
                amount="₹550"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/terarium", {
                  state: {
                    name: "Terrarium",
                    amount: "₹2450",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard image={terarium} name="Terrarium" amount="₹2450" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/terariumone", {
                  state: {
                    name: "Terrarium",
                    amount: "₹4000",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard image={terariumone} name="Terrarium" amount="₹4000" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/anthurium", {
                  state: {
                    name: "Anthurium Crystallinum",
                    amount: "₹800",
                    offer: "₹960",
                  },
                });
              }}
            >
              <PlantCard
                image={anthurium}
                name="Anthurium Crystallinum"
                amount="₹960"
                offer="₹800"
                percentage="20% off"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/cactus", {
                  state: {
                    name: "Cactus",
                    amount: "₹888",
                    offer: "₹1110",
                  },
                });
              }}
            >
              <PlantCard
                image={cactus}
                name="Cactus"
                amount="₹1110"
                offer="₹888"
                percentage="20% off"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/terrariumtwo", {
                  state: {
                    name: "Terrarium",
                    amount: "₹4160",
                    offer: "₹5000",
                  },
                });
              }}
            >
              <PlantCard
                image={terrariumtwo}
                name="Terrarium"
                amount="₹5000"
                offer="₹4160"
                percentage="20% off"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/lemon", {
                  state: {
                    name: "Lemon Cypress",
                    amount: "",
                    offer: "₹800",
                  },
                });
              }}
            >
              <PlantCard image={lemon} name="Lemon Cypress" amount="₹800" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/terrariumthree", {
                  state: {
                    name: "Terrarium",
                    amount: "₹5600",
                    offer: "₹7000",
                  },
                });
              }}
            >
              <PlantCard
                image={terrariumthree}
                name="Terrarium"
                amount="₹7000"
                offer="₹5600"
                percentage="20% off"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center sm:flex md:hidden lg:hidden">
        <div className="bg-white p-10">
          <div className="flex flex-wrap flex-col justify-center items-center gap-[100px] text-[24px] mt-10">
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
            <button className="border border-neutral-400 text-[18px] text-black px-10 py-3 flex items-center gap-2">
              <img src={filter} alt="filter" width="" height="" />
              Filter
            </button>
            <button className="border border-neutral-400 text-[18px] text-black px-10 py-3 flex items-center gap-2">
              <img src={sort} alt="filter" width="" height="" />
              Sort
            </button>
          </div>

          <div className="grid grid-cols-12 mt-[80px] gap-10">
            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/swisschees", {
                  state: {
                    name: "Swiss Chees Plant",
                    amount: "₹350",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard
                image={swisschees}
                name="Swiss Chees Plant"
                amount="₹350"
              />
            </div>
            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/bonsai", {
                  state: {
                    name: "Bonsai",
                    amount: "₹2000",
                    offer: "₹2400",
                  },
                });
              }}
            >
              <PlantCard
                image={bonsai}
                name="Bonsai"
                amount="₹2400"
                offer="₹2000"
                percentage="20% off"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/moneyplant", {
                  state: {
                    name: "Money Plant",
                    amount: "₹1200",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard image={moneyplant} name="Money Plant" amount="₹1200" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/aquarium", {
                  state: {
                    name: "Aquariums",
                    amount: "₹5000",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard image={aquarium} name="Aquariums" amount="₹5000" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/devilsplant", {
                  state: {
                    name: "devilsplant",
                    amount: "₹550",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard
                image={devilsplant}
                name="Devil’s Plant"
                amount="₹550"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/terarium", {
                  state: {
                    name: "Terrarium",
                    amount: "₹2450",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard image={terarium} name="Terrarium" amount="₹2450" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/terariumone", {
                  state: {
                    name: "Terrarium",
                    amount: "₹4000",
                    offer: "",
                  },
                });
              }}
            >
              <PlantCard image={terariumone} name="Terrarium" amount="₹4000" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/anthurium", {
                  state: {
                    name: "Anthurium Crystallinum",
                    amount: "₹800",
                    offer: "₹960",
                  },
                });
              }}
            >
              <PlantCard
                image={anthurium}
                name="Anthurium Crystallinum"
                amount="₹960"
                offer="₹800"
                percentage="20% off"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/cactus", {
                  state: {
                    name: "Cactus",
                    amount: "₹888",
                    offer: "₹1110",
                  },
                });
              }}
            >
              <PlantCard
                image={cactus}
                name="Cactus"
                amount="₹1110"
                offer="₹888"
                percentage="20% off"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/terrariumtwo", {
                  state: {
                    name: "Terrarium",
                    amount: "₹4160",
                    offer: "₹5000",
                  },
                });
              }}
            >
              <PlantCard
                image={terrariumtwo}
                name="Terrarium"
                amount="₹5000"
                offer="₹4160"
                percentage="20% off"
              />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/lemon", {
                  state: {
                    name: "Lemon Cypress",
                    amount: "",
                    offer: "₹800",
                  },
                });
              }}
            >
              <PlantCard image={lemon} name="Lemon Cypress" amount="₹800" />
            </div>

            <div
              className="col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-4 relative flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                navigate("/plants-view/terrariumthree", {
                  state: {
                    name: "Terrarium",
                    amount: "₹5600",
                    offer: "₹7000",
                  },
                });
              }}
            >
              <PlantCard
                image={terrariumthree}
                name="Terrarium"
                amount="₹7000"
                offer="₹5600"
                percentage="20% off"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="aboutUs" className="mt-0 sm:mt-0 md:mt-[1200px] lg:mt-[1200px]">
        <Footer />
      </div>
    </>
  );
};

export default Products;
