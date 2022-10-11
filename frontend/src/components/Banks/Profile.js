import React from "react";

const Profile = () => {
  return (
    <div className=" items-center justify-center font-medium flex-col">
      {/* <h2>  Profile</h2> */}
      <div className="bg-teal-300 w-full rounded-xl py-1 px-5 flex items-center text-slate-50 font-bold shadow-lg h-[100%]">
        <h2>Profile Details</h2>
      </div>
      {/* <div className="mt-10 ">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <label htmlFor="name">email</label>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <label htmlFor="name">Eth ID</label>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <label htmlFor="name"></label>
          <input type="text" placeholder="name" />
        </div>
      </div> */}
      <>
        <div class="overflow-x-auto relative mt-7 shadow-lg rounded-lg   ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Product name
                </th>
                <th scope="col" class="py-3 px-6">
                  Color
                </th>
                <th scope="col" class="py-3 px-6">
                  Category
                </th>
                <th scope="col" class="py-3 px-6">
                  Update
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Name
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6">
                  <input
                    type="text"
                    className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 "
                    placeholder="Name"
                  />
                </td>
                <td class="py-4 px-6">
                  <button className="bg-teal-200 px-4 py-1 rounded-md shadow-md focus:outline-none focus:border-none ">
                    EDIT
                  </button>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Email
                </th>
                <td class="py-4 px-6">White</td>
                <td class="py-4 px-6">
                  <input
                    type="text"
                    className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 "
                    placeholder="Email"
                  />
                </td>
                <td class="py-4 px-6">
                  <button className="bg-teal-200 px-4 py-1 rounded-md shadow-md">
                    EDIT
                  </button>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Password
                </th>
                <td class="py-4 px-6">Black</td>
                <td class="py-4 px-6">
                  <input
                    type="text"
                    className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 "
                    placeholder="Password"
                  />
                </td>
                <td class="py-4 px-6">
                  <button className="bg-teal-200 px-4 py-1 rounded-md shadow-md">
                    EDIT
                  </button>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  HLA data
                </th>
                <td class="py-4 px-6">Black</td>
                <td class="py-4 px-6">
                  <input
                    type="text"
                    className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 "
                    placeholder="HLA Data"
                  />
                </td>
                <td class="py-4 px-6">
                  <button className="bg-teal-200 px-4 py-1 rounded-md shadow-md">
                    EDIT
                  </button>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Ethereum ID
                </th>
                <td class="py-4 px-6">Black</td>
                <td class="py-4 px-6">
                  <input
                    type="text"
                    className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 "
                    placeholder="Ethereum ID"
                  />
                </td>
                <td class="py-4 px-6">
                  <button className="bg-teal-200 px-4 py-1 rounded-md shadow-md">
                    EDIT
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default Profile;
