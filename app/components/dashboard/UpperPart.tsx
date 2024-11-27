"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import Calendar from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const UpperPart = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <section className="grid grid-cols-12  text-white h-full">
      {/* Left Section */}
      <div className="col-span-9 pl-7 py-7 w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] leading-[36px] font-normal text-black mb-12">
            👋 Welcome, Exam Assistant!
          </h2>
          <p className="text-xs text-[#A5A5A5]">Today's Date</p>
        </div>

        {/* Progress Cards */}
        <div className="flex mt-5 gap-6">
          {/* Card 1 */}
          

          {/* Card 2 */}
          

          {/* Card 3 */}
          
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-3 px-8 py-4 h-96 space-y-4 flex flex-col items-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow bg-white text-black"
        />
      </div>
    </section>
  );
};

export default UpperPart;
