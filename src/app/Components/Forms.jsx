"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GiCheckMark } from "react-icons/gi";
const Forms = () => {
  const router = useRouter();

  return (
    <div className="h-max py-7 w-full  md:px-16 lg:px-[6rem] ">
      <div className="flex items-center justify-center h-full w-full  px-4  sm:px-8  lg:px-0 ">
        <div className="grid  md:px-10 lg:px-0  grid-flow-col  auto-cols-max gap-2 sm:gap-2.5 md:gap-2 overflow-x-auto ">
          {/* Card 1 */}

          <div
            className="md:h-[28rem] h-[24rem] w-[250px]  md:w-[300px] lg:w-[310px] xl:w-[330px] bg-black text-white rounded-lg p-4 relative flex flex-col justify-between flex-shrink-0"
            onClick={() => {
              router.push("/dashboard/Driver");
            }}
          >
            <div>
              <h2 className="text-4xl font-sans  font-extrabold ">Driver</h2>
              <h3 className="text-2xl font-sans font-semibold mb-2">
                Registration
              </h3>

              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" /> Quick service access
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" /> Engaging downtime
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" /> Stress-free journeys
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" /> Instant Routes
              </h1>
            </div>
            <div
              className="absolute bottom-4 right-4 cursor-pointer"
              onClick={() => {
                router.push("/dashboard/Driver");
              }}
            >
              <HiArrowNarrowRight className="h-10 w-10 text-white " />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="md:h-[28rem] h-[24rem] w-[300px] lg:w-[310px] bg-gray-700 xl:w-[330px] text-white rounded-lg p-4 relative flex flex-col justify-between flex-shrink-0"
            onClick={() => {
              router.push("/dashboard/Mechanic");
            }}
          >
            <div>
              <h2 className="text-4xl font-sans  font-extrabold ">Mechanic</h2>
              <h3 className="text-2xl font-sans font-semibold mb-2">
                Registration
              </h3>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" />
                Steady work flow
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" /> Real-time alerts
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" /> Expand client base
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" /> Increase your Earnings
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" /> Expert Mechanic Adivse
              </h1>
            </div>
            <div
              className="absolute bottom-4 right-4 cursor-pointer"
              onClick={() => {
                router.push("/dashboard/Mechanic");
              }}
            >
              <HiArrowNarrowRight className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="md:h-[28rem] h-[24rem] w-[300px] lg:w-[310px] bg-black xl:w-[330px]  text-white rounded-lg p-4 relative flex flex-col justify-between flex-shrink-0"
            onClick={() => {
              router.push("/dashboard/Carriers");
            }}
          >
            <div>
              <h2 className="text-4xl font-sans  font-extrabold ">Carriers</h2>
              <h3 className="text-2xl font-sans font-semibold mb-2">
                Registration
              </h3>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5 mb-1" /> Reliable support
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5 mb-1" /> Minimize downtime
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5 mb-1" /> Verified providers
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5 mb-1" /> Multiple Truck Listings
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5 mb-1" />
                Save time to find leads
              </h1>
            </div>
            <div
              className="absolute bottom-4 right-4 cursor-pointer"
              onClick={() => {
                router.push("/dashboard/Carriers");
              }}
            >
              <HiArrowNarrowRight className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Card 4 */}

          <div
            className="md:h-[28rem] h-[24rem] w-[300px] lg:w-[310px] bg-gray-700 xl:w-[330px] text-white rounded-xl p-4 relative flex flex-col justify-between flex-shrink-0"
            onClick={() => {
              router.push("/dashboard/Towing");
            }}
          >
            <div className="">
              <h2 className="text-4xl font-sans  font-extrabold ">Towing</h2>
              <h3 className="text-2xl font-sans font-semibold mb-2">
                Registration
              </h3>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" />
                Maximize visibility
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" />
                Immediate job alerts
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" />
                Boost earnings
              </h1>
              <h1 className="gap-x-3 flex items-center text-left text-white font-sans">
                <GiCheckMark className="h-5 w-5" />
                Grow your Buisness
              </h1>
            </div>

            <div
              className="absolute bottom-4 right-4 cursor-pointer"
              onClick={() => {
                router.push("/dashboard/Towing");
              }}
            >
              <HiArrowNarrowRight className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
