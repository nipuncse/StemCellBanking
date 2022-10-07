import React from "react";

const Card = ({ color, title, text }) => {
  return (
    <div
      className={`border-${color}-500 p-2 border-t-4 shadow-2xl bg-neutral-50 w-80 h-72 rounded-lg `}
    >
      <div>
        <h2 className="text-3xl text-pink-600 font-serif  ">{title}</h2>
        <p className="text-base">{text}</p>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
          Lorem ipsum, dolor sit amet
        </p>
        <div className="flex justify-around mt-2 items-center">
          <button className="h-12 px-4 hover:scale-105 focus:scale-90 scale-100 bg-[#B1B2FF] rounded-lg shadow-lg cursor-pointer">
            BUY NOW
          </button>
          <div className=" rounded-xl">
            <img
              src="/bodycell1.png"
              className="w-28 bg-sky-200 rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
