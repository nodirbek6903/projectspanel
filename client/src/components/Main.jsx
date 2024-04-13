import React, { useState } from "react";
// import StripeContainer from "./StripeContainer";
// import Spatula from "../images/Screenshot_1.png";

const Main = () => {
  // const [showItem, setShowItem] = useState(false);

  return (
    <div className="p-4 xl:ml-80">
      {/* <h1 className="text-center font-bold uppercase ">The Spatula Store</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">$10.00</h3>
            <div className="flex items-center justify-center mt-4">
              <img
                src={Spatula}
                width={400}
                height={400}
                alt="Spatula"
                className="max-h-[400] rounded-lg"
              />
            </div>
            <button
              className="mt-4 bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowItem(true)}
            >
              Purchase Spatula
            </button>
          </div>
        </>
      )} */}
      <div class="mt-12">
        <div class="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            <div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                  Projects
                </h6>
                <p class="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                  <strong>30 done</strong> this month
                </p>
              </div>
              <button
                aria-expanded="false"
                aria-haspopup="menu"
                id=":r5:"
                class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                type="button"
              >
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></span>
              </button>
            </div>
            <div class="p-6 overflow-x-scroll px-0 pt-0 pb-2">
              <table class="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                        companies
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                        budget
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                        completion
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                          Material XD Version
                        </p>
                      </div>
                    </td>

                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                        $14,000
                      </p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                          60%
                        </p>
                        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div class="w-[60%] flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                          Add Progress Track
                        </p>
                      </div>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                        $3,000
                      </p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                          10%
                        </p>
                        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div class="w-[10%] flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                          Fix Platform Errors
                        </p>
                      </div>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                        Not set
                      </p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                          100%
                        </p>
                        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div class="w-[100%] flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                          Launch our Mobile App
                        </p>
                      </div>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                        $20,500
                      </p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                          100%
                        </p>
                        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div class="w-[100%] flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="flex items-center gap-4">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                          Add the New Pricing Page
                        </p>
                      </div>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                        $500
                      </p>
                    </td>
                    <td class="py-3 px-5 border-b border-blue-gray-50">
                      <div class="w-10/12">
                        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                          25%
                        </p>
                        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                          <div class="w-[25%] flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
