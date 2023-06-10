import React from "react";

const PlantCard = ({ image, name, amount, offer, percentage }) => {
  return (
    <>
      <div>
        {offer ? (
          <div className="absolute p-2 bg-[#2F5233] text-white rounded-tl-lg rounded-br-lg">
           {percentage}
          </div>
        ) : (
          ""
        )}
        <img src={image} alt="plant" width="" height="" />
      </div>
      {offer ? (
        <>
          <div className="text-[25px] font-normal text-center">{name}</div>
          <div className="flex gap-3 justify-center">
            <div className="text-[16px] font-normal text-center line-through text-[#E84F27] ">
              <span className="text-black">{amount}</span>
            </div>
            <div className="text-[16px] font-normal text-center">{offer}</div>
          </div>
        </>
      ) : (
        <>
          <div className="text-[25px] font-normal text-center">{name}</div>
          <div className="text-[16px] font-normal text-center">{amount}</div>
        </>
      )}
    </>
  );
};

export default PlantCard;
