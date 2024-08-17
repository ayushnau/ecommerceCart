"use client";
import React, { useEffect, useState } from "react";
import Divider from "../../misc/Divider";
import { useSelector } from "react-redux";
import { StoreState } from "store";
import { formatNumber } from "utils";

const PriceSummary = () => {
  const { items, productCount: count } = useSelector((state: StoreState) => {
    const { items, productCount } = state.cartItemsSlice;
    return { items, productCount };
  });
  const [summary, setSummary] = useState({
    totalPrice: 0,
    totalDiscountedPrice: 0,
    discount: 0,
  });

  const handleCalculatePriceSummary = () => {
    let totalPrice: number = 0;
    let totalDiscountedPrice: number = 0;

    Object.values(items).map((value: any) => {
      totalDiscountedPrice += +value.price * +value.quantity;
      totalPrice +=
        (+value.price / (100 - +value.discountPercentage)) *
        100 *
        +value.quantity;
    });
    let discount = totalPrice - totalDiscountedPrice;
    totalPrice = +totalPrice.toFixed(2);
    totalDiscountedPrice = +totalDiscountedPrice.toFixed(2);
    discount = +discount.toFixed(2);
    setSummary({ totalPrice, totalDiscountedPrice, discount });
  };
  useEffect(() => {
    handleCalculatePriceSummary();
  }, [items, count]);
  return (
    <div className=" bg-white self-start w-full md:w-[400px] mx-auto mt-5 lg:mt-0">
      <div className="uppercase text-base font-medium text-secondary-text-gray p-4">
        Price details
      </div>
      <Divider color="#f0f0f0" className="m-0" />
      <div className="px-4 pb-4 text-primary-text-black font-normal text-base">
        <div className="text-secondary-text-black my-5 flex items-center justify-between">
          <span>Price ({count} items)</span>
          <span> ₹{formatNumber(summary.totalPrice)}</span>
        </div>
        <div className="text-secondary-text-black my-5 flex items-center justify-between">
          <span>Discount</span>
          <span className="text-secondary-emerald-green">
            -₹{formatNumber(summary.discount)}
          </span>
        </div>
        <div className="text-secondary-text-black my-5 flex items-center justify-between">
          <span>Delivery Charges</span>
          <span className="text-secondary-emerald-green">Free</span>
        </div>
        <div className="border-y border-dotted border-[#f0f0f0]"></div>
        <div className="my-5 text-lg font-medium flex items-center justify-between">
          <span>Total Amount</span>
          <span>₹{formatNumber(summary.totalDiscountedPrice)}</span>
        </div>
        <div className="border-y border-dotted border-[#f0f0f0]"></div>
        <div className="pt-2 text-secondary-emerald-green font-medium text-base">
          You will save ₹{formatNumber(summary.discount)} on this order
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
