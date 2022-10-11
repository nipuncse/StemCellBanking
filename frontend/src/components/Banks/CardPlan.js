import React from "react";

const CardPlan = ({ feature1, feature2, feature3 }) => {
  return (
    <div className="border-2 cursor-pointer hover:-translate-y-6 transition-all bg-green-100 shadow-xl h-[60vh] xl:w-[25vw]  rounded-xl p-7  ">
      <div className="mb-5">
        <h1 className="font-serif text-2xl">Starting at </h1>
        <span className="font-serif text-6xl">2 Eth</span>
      </div>
      <div className="bg-lime-50 flex justify-center rounded-xl py-3 mb-4">
        <h4 className="font-serif text-2xl">Annual Storage</h4>
      </div>
      <div>
        <div className="mb-4 flex  ">
          <img src="/tick.png" className="w-7 mx-2" alt="" />
          <p>{feature1}</p>
        </div>
        <div className="mb-4 flex  ">
          <img src="/tick.png" className="w-7 mx-2" alt="" />
          <p>{feature2}</p>
        </div>
        <div className="mb-4 flex  ">
          <img src="/tick.png" className="w-7 mx-2" alt="" />
          <p>{feature3}</p>
        </div>
        <div className="mb-4 flex  ">
          <img src="/tick.png" className="w-7 mx-2" alt="" />
          <p>{feature1}</p>
        </div>
        <div className="flex justify-center">
          <button className=" w-[50%] transition-all px-5 py-1 rounded-lg cursor-pointer shadow-lg bg-[#937DC2] font-bold font-sans text-zinc-50 hover:bg-zinc-50 hover:text-[#937DC2] ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
