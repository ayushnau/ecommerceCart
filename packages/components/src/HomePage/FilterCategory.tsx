"use client";
import { ChevronDown } from "icons";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Divider from "../../misc/Divider";

interface FilterCategoryInterface {
  category: {
    options: string[];
    name: string;
  };
}
const FilterCategory: React.FC<FilterCategoryInterface> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between w-full text-left"
        >
          <h4 className="text-[13px] font-medium uppercase text-primary-text-black">
            {category.name}
          </h4>
          <div className={twMerge(isOpen ? "rotate-90" : "-rotate-90")}>
            <ChevronDown className=" mb-[2px] mr-[2px] inline scale-50" />
          </div>
        </button>
        {isOpen && (
          <ul className="mt-2 space-y-2">
            {category.options.map((option, idx) => (
              <>
                <li key={idx}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-500"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
      <Divider color="black" className="m-0" />
    </div>
  );
};

export default FilterCategory;
