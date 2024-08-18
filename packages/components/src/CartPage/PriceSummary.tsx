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

  const [couponCode, setCouponCode] = useState<string>("");
  const [couponError, setCouponError] = useState<string | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);
  const [coupons, setCoupons] = useState<any>([]);

  const handleCalculatePriceSummary = () => {
    let totalPrice: number = 0;
    let totalDiscountedPrice: number = 0;

    Object.values(items).forEach((value: any) => {
      totalDiscountedPrice += +value.price * +value.quantity;
      totalPrice +=
        (+value.price / (100 - +value.discountPercentage)) *
        100 *
        +value.quantity;
    });

    let discount = totalPrice - totalDiscountedPrice;

    if (appliedCoupon) {
      if (appliedCoupon.type === "percent") {
        const newDiscountPrice =
          (appliedCoupon.value / 100) * totalDiscountedPrice;
        discount += newDiscountPrice;
        totalDiscountedPrice -= newDiscountPrice;
      } else if (appliedCoupon.type === "fixed") {
        discount += appliedCoupon.value;
        totalDiscountedPrice -= appliedCoupon.value;
      }
    }

    totalPrice = +totalPrice.toFixed(2);
    totalDiscountedPrice = +totalDiscountedPrice.toFixed(2);
    discount = +discount.toFixed(2);

    setSummary({ totalPrice, totalDiscountedPrice, discount });
  };

  const handleApplyCoupon = () => {
    const coupon = coupons.find(
      (c: any) => c.code === couponCode.trim().toUpperCase()
    );
    if (coupon) {
      setAppliedCoupon(coupon);
      setCouponError(null);
    } else {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
    }
  };

  const handleGetCoupouns = async () => {
    const response: any = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/api/coupons`
    );
    const data = await response.json();
    setCoupons(data.data);
  };
  useEffect(() => {
    handleCalculatePriceSummary();
  }, [items, count, appliedCoupon]);

  useEffect(() => {
    handleGetCoupouns();
  }, []);
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

        {/* Coupon Code Input */}
        <div className="my-4">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter Coupon Code"
            className="w-full px-4 py-2 border rounded"
          />
          <button
            onClick={handleApplyCoupon}
            className="mt-2 w-full bg-primary-blue text-white py-2 rounded"
          >
            Apply Coupon
          </button>
          {couponError && (
            <div className="text-red-500 text-sm mt-2">{couponError}</div>
          )}
          {appliedCoupon && (
            <div className="text-green-500 text-sm mt-2">
              Coupon "{appliedCoupon.code}" applied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
