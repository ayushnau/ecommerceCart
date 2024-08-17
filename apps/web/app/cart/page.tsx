import React from "react";
import { CardList, PriceSummary, Divider } from "components";
// import { useRouter } from "next/navigation";
import { StoreState } from "store";

const Cart = async () => {
  // const router = useRouter();
  
  return (
    <div className="p-4 flex items-center justify-center  overflow-scroll my-4">
      <div className="flex gap-x-[50px] flex-col md:flex-row">
        <div className="grid grid-cols-1 gap-3 overflow-scroll bg-white self-start">
          <CardList />
        </div>
        <PriceSummary />
      </div>
    </div>
  );
  Divider;
};

export default Cart;
