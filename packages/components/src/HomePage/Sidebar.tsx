"use client";
import React, { useEffect, useState } from "react";
import Divider from "../../misc/Divider";
import FilterCategory from "./FilterCategory";
import PriceSlider from "./PriceSlider";
import { ChevronDown } from "icons";
import { filters } from "utils";

interface SidebarInterface {}
const Sidebar: React.FC<SidebarInterface> = () => {
  // const [priceRange, setPriceRange] = useState([0, 10000]);

  // const handlePriceChange = (newRange: any) => {
  //   setPriceRange(newRange);
  //   console.log("Price range:", newRange);
  // };

  // const check = async () => {
  //   const response: any = await fetch(
  //     `${process.env.NEXT_PUBLIC_ENDPOINT}/api/products`,
  //     { method: "GET", cache: "force-cache" }
  //   );
  //   // const response = await fetch("https://dummyjson.com/products/search?q=watch");

  //   const data = await response.json();
  //   console.log({ data });
  //   console.log(process.env.NEXT_PUBLIC_ENDPOINT, "localhost>>");
  // };
  // check();
  return (
    <div className=" primary-text-black w-[270px] shadow-boxShadow hidden xl:block self-start ">
      {/* Filters Title */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-primary-text-black">Filters</h3>
      </div>
      <Divider color="#f0f0f0" className="m-0" />
      <div className="p-4">
        <div className="text-xs font-medium text-primary-text-black mb-[5px] uppercase">
          Categories
        </div>
        <div className="py-[5px]">
          <ChevronDown className=" mb-[2px] mr-[2px] inline scale-50" />
          <span className="text-sm font-normal text-secondary-text-gray">
            Wearable Smart Devic...
          </span>
        </div>
        <div className="pl-4 text-sm py-[5px] font-medium text-primary-text-black">
          Smart Watches
        </div>
      </div>
      <Divider color="#f0f0f0" className="m-0" />
      {/* Price Slider */}
      <div className="p-4">
        <div className="uppercase text-[13px] font-medium">Price</div>
        <PriceSlider
          min={0}
          max={1000}
          onChange={({ min, max }: { min: number; max: number }) =>
            console.log(`min = ${min}, max = ${max}`)
          }
        />
      </div>
      <Divider color="#f0f0f0" className="m-0" />

      {/* Dynamic Categories */}
      {filters.map((category, idx) => (
        <FilterCategory key={idx} category={category} />
      ))}
    </div>
  );
};

export default Sidebar;
