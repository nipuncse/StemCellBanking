import React from "react";

import classes from "../../Css/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <header class={`text-gray-600 body-font ${classes.navbar}`}>
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/logo.png" className="h-16 scale-x-125" alt="" />
            <span class="ml-3 text-3xl font-serif text-fuchsia-800 ">
              Eth Cell Bank
            </span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <p class="mr-5 cursor-pointer hover:bg-[#ECC5FB] hover:text-white p-2 rounded-lg">
              First Link
            </p>
            <p class="mr-5 cursor-pointer hover:bg-[#ECC5FB] hover:text-white p-2 rounded-lg">
              Second Link
            </p>
            <p class="mr-5 cursor-pointer hover:bg-[#ECC5FB] hover:text-white p-2 rounded-lg">
              Third Link
            </p>
            <p class="mr-5 cursor-pointer hover:bg-[#ECC5FB] hover:text-white p-2 rounded-lg">
              Fourth Link
            </p>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
