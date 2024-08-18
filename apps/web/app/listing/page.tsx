import React from "react";
import { Sidebar, ProductCard } from "components";
import { useSelector } from "react-redux";
import { StoreState } from "store";
import axios from "axios";

const Listing = async () => {
  const data: any = await axios.get(
    `http://localhost:3000/api/products`
    // { method: "GET", cache: "force-cache" }
  );
  // const response = await fetch("https://dummyjson.com/products/search?q=watch");

  // const data = await response.json();
  console.log(data.data);
  const products = data.data.products;
  console.log(process.env.NEXT_PUBLIC_ENDPOINT, "localhost>>");

  return (
    <div className="p-4 flex items-center justify-center  overflow-scroll">
      <div className="flex gap-x-[50px] ">
        <Sidebar />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-scroll">
          {products?.map((value: any) => {
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