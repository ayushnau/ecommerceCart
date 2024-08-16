import React from "react";
import { Sidebar, ProductCard } from "components";

const Listing = async () => {
  const response = await fetch("https://dummyjson.com/products/search?q=watch");
  const data = await response.json();
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="flex gap-x-[50px]">
        <Sidebar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
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
