"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NavigateToListing = () => {
  const router = useRouter();
  router.push("/listing");
  return <div></div>;
};

export default NavigateToListing;
