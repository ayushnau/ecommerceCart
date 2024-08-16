"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { CartIcon } from "icons";
import "./ProductCard.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCartItem, StoreState } from "store";
import { formatNumber } from "utils";

interface ProductCardInterface {
  cardDetails: any;
}
const ProductCard: React.FC<ProductCardInterface> = ({ cardDetails }) => {
  const [selectedImage, setSelectedImage] = useState<any>(
    cardDetails.images[0]
  );
  const dispatch = useDispatch();
  const currentQuantity = useSelector((state: StoreState) => {
    const id: string = cardDetails.id;
    return state.cartItemsSlice[id]?.quantity;
  });
  const [isAdded, setIsAdded] = useState<boolean>(
    currentQuantity ? true : false
  );

  const handleAddToCart = () => {
    const addOrDeduct = isAdded ? -1 : 1;
    setIsAdded((prev) => !prev);
    const id: string = cardDetails.id;
    const quantity = currentQuantity ?? "0";
    console.log({ quantity });
    dispatch(
      setCartItem({
        id,
        quantity: `${parseInt(quantity) + addOrDeduct}`,
      })
    );
  };
  useEffect(() => {
    setSelectedImage(cardDetails.images[0]);
  }, [cardDetails]);
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow relative">
      {/* <button className="bottom-4 right-4 absolute cursor-pointer flex items-center gap-2 bg-primary-blue text-white text-sm font-medium py-2 px-4 rounded-full  hover:bg-primary-dark-blue transition duration-300 hover:shadow-boxShadow">
        <CartIcon className={"inline"} />
        Add to Cart
      </button> */}

      <div className="px-4 pb-5 ">
        <div className="py-5">
          <Image
            src={selectedImage}
            width={300}
            height={300}
            alt={cardDetails.title}
          />
        </div>
        <div className="hover:-translate-y-5 transition-all duration-[500ms] leading-[1.4]">
          <div className="text-sm font-medium text-primary-text-black">
            {cardDetails.title}
          </div>
          <div className="text-secondary-text-gray text-xs font-normal pb-[5px]">
            {cardDetails.brand}
          </div>
          <div className="my-1">
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              width={66}
              height={18}
              alt={"flipkart logo"}
            />
          </div>
          <div className="">
            <span className="text-base font-medium leading-[1.4] text-prmary-text-black">
              ₹{formatNumber(cardDetails.price)}
            </span>
            <span className="mx-2 line-through text-secondary-text-gray text-sm">
              ₹
              {formatNumber(
                (
                  (+cardDetails.price /
                    (100 - +cardDetails.discountPercentage)) *
                  100
                ).toFixed(1)
              )}
            </span>
            <span className="text-secondary-emerald-green text-[13px] font-medium">
              {cardDetails.discountPercentage}% Off
            </span>
          </div>
          <div className=" text-[13px] font-medium -leading-[0.2] mt-[5px] mb-2">
            Saver Deal
          </div>
          <div className="flex justify-between">
            <div className="flex">
              {cardDetails.images.map((value: string) => {
                return (
                  <div
                    key={value}
                    onClick={(e: any) => {
                      setSelectedImage(value);
                    }}
                    className={twMerge(
                      "w-8 h-8 cursor-pointer  hover:border-[2px] border-primary-blue rounded-full box-border",
                      selectedImage === value ? "border-[2px]" : ""
                    )}
                  >
                    <Image
                      src={value}
                      width={30}
                      height={30}
                      alt="watch image"
                    />
                  </div>
                );
              })}
            </div>
            {!isAdded && (
              <button
                onClick={handleAddToCart}
                className={`whitespace-nowrap cursor-pointer flex items-center gap-2 bg-primary-blue text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-primary-dark-blue transition duration-300 ${
                  isAdded ? "fade-out-slide-right" : ""
                }`}
              >
                <CartIcon
                  className={`${isAdded ? "fade-out-slide-right" : ""}`}
                />
                <span className={`${isAdded ? "fade-out-slide-right" : ""}`}>
                  Add to Cart
                </span>
              </button>
            )}
            {isAdded && (
              <button
                onClick={handleAddToCart}
                className="whitespace-nowrap cursor-pointer flex items-center gap-2 text-green-600 text-sm font-medium py-2 px-4 rounded-full fade-in-slide-left"
              >
                {/* <CheckIcon className="inline fade-in-slide-left" /> */}
                <Image
                  width="24"
                  height="24"
                  src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png"
                  alt="check-mark-button-emoji"
                  className="fade-in-slide-left"
                />

                <span className="fade-in-slide-left">Added</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
