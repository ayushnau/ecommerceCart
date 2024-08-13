"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Router } from "react-router-dom";

interface NavbarDropdownProps {
  list: any;
}
const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ list }) => {
  const router = useRouter();
  return (
    <div className="p-[15px] shadow-none lg-shadow-lg w-[250px] box-border">
      {Object.keys(list).map((value: any) => {
        return (
          <div
            onClick={() => router.push(`/${list[value]}`)}
            className=" px-[15px] py-[7px] hover:bg-slate-100"
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default NavbarDropdown;
