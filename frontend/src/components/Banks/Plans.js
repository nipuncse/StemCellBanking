import React from "react";
import CardPlan from "./CardPlan";

const Plans = () => {
  return (
    <div className=" xl:h-[85vh] px-20 pt-14 md:mb-2 pb-10  ">
      <h1 className="text-3xl flex justify-center mb-10">
        Customised Storage Plans With Maximum Benefits & Security
      </h1>
      <div className="flex gap-9  justify-center flex-wrap lg:flex-nowrap ">
        <CardPlan
          plan="Annual Storage 1st Year Storage Free"
          feature1="Unlimited Retrieval"
          feature2="Dual-site storage"
          feature3="Free shipping of matched units"
        />
        <CardPlan
          plan="Annual Storage 1st Year Storage Free"
          feature1="Unlimited Retrieval"
          feature2="Dual-site storage"
          feature3="Free shipping of matched units"
        />
        <CardPlan
          plan="Annual Storage 1st Year Storage Free"
          feature1="Unlimited Retrieval"
          feature2="Dual-site storage"
          feature3="Free shipping of matched units"
        />
      </div>
    </div>
  );
};

export default Plans;
