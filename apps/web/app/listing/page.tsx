import React from "react";
import { Sidebar, ProductCard } from "components";
import { useSelector } from "react-redux";
import { StoreState } from "store";

const Listing = async () => {
  const response = await fetch("https://dummyjson.com/products/search?q=watch");
  const data = await response.json();

  return (
    <div className="p-4 flex items-center justify-center  overflow-scroll">
      <div className="flex gap-x-[50px]">
        <Sidebar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-scroll">
          {data.products.map((value: any) => {
            return (
              <ProductCard
                key={`${value.id}${value.title}`}
                cardDetails={value}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listing;
