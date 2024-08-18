"use client";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon, CartIcon, LoginIcon } from "icons";
import { useSelector } from "react-redux";
import { StoreState } from "store";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { handleLogin, getUserData, handleLogout } from "services";
import { twMerge } from "tailwind-merge";

function classNames(...classes: any): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const cartItems = useSelector((state: StoreState) => {
    return state.cartItemsSlice.items;
  });
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [userData, setUserData] = useState<any>({
    name: "",
    email: "",
    profilePicture: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown state

  useEffect(() => {
    const cartItemsList = cartItems ? Object.values(cartItems) : [];
    const quantity = cartItemsList.reduce((total, item) => {
      return total + Number(item.quantity);
    }, 0);
    setTotalQuantity(quantity);
  }, [cartItems]);

  useEffect(() => {
    handleGetUserData();
  }, []);

  const handleGetUserData = async () => {
    try {
      const response = await getUserData();
      const { name, email, profilePicture } = response;
      setUserData({ name, email, profilePicture });
    } catch (error) {
      throw error;
    }
  };

  const handleLoginClick = async () => {
    try {
      await handleLogin();
      await handleGetUserData();
    } catch (error) {
      throw error;
    }
  };

  const handleLogoutClick = async () => {
    setDropdownOpen(false);
    try {
      await handleLogout();
      setUserData({ name: "", email: "", profilePicture: "" });
    } catch (error) {
      throw error;
    }
  };

  return (
    <Disclosure as="nav" className="bg-[#2874F0] shadow-boxShadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center flex-1">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link href="/" passHref>
                    <Image
                      className="h-8 w-auto"
                      src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                      alt="Flipkart"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <div className="flex-1 mx-4 max-w-xl">
                  <div className="relative hidden sm:block">
                    <input
                      type="text"
                      placeholder="Search for products, brands and more"
                      className="w-full p-2 pl-4 rounded-l-md rounded-r-md"
                    />
                    <button className="absolute right-0 top-0 h-full p-2 bg-yellow-400 text-gray-800 rounded-r-md">
                      <MagnifyingGlassIcon />
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop Profile and Cart Icons */}
              <div className="items-center space-x-3 flex">
                <Link
                  href="/cart"
                  className={twMerge(
                    "flex items-center text-white pr-2 relative ",
                    totalQuantity <= 0 ? "pointer-events-none" : ""
                  )}
                >
                  <CartIcon />
                  <span className="ml-2">Cart</span>
                  {totalQuantity > 0 && (
                    <span className="bg-red-600 rounded-full w-4 h-4 absolute -top-2 left-1 inline-flex items-center justify-center p-1 text-[11px] font-medium">
                      {totalQuantity}
                    </span>
                  )}
                </Link>
                <div className="hidden sm:flex items-center text-white relative">
                  {userData.name ? (
                    <div onMouseLeave={() => setDropdownOpen(false)}>
                      <Image
                        src={userData.profilePicture}
                        width={30}
                        height={30}
                        alt="Profile Picture"
                        className="rounded-full cursor-pointer"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      />
                      {dropdownOpen && (
                        <div className="absolute top-5 right-0 mt-2 w-48 z-50 bg-white shadow-lg rounded-lg py-2">
                          <div className="px-4 py-2 text-gray-700">
                            {userData.name}
                          </div>
                          <button
                            onClick={handleLogoutClick}
                            className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      onClick={handleLoginClick}
                      className="pr-2 relative cursor-pointer"
                    >
                      <LoginIcon />
                      <span className="ml-2">Login</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-3 px-2 pb-3 pt-2">
              <DisclosureButton as="div" className="block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className="w-full p-2 pl-4 rounded-l-md rounded-r-md"
                    onClick={(e: any) => e.stopPropagation()}
                  />
                  <button
                    onClick={(e: any) => e.stopPropagation()}
                    className="absolute right-0 top-0 h-full p-2 bg-yellow-400 text-gray-800 rounded-r-md"
                  >
                    <MagnifyingGlassIcon />
                  </button>
                </div>
              </DisclosureButton>
              <div className="block cursor-pointer rounded-md hover:bg-blue-900 px-3 py-2 text-base font-medium text-white pt-2">
                {!userData.name ? (
                  <span onClick={handleLoginClick}>
                    <LoginIcon />
                    Login
                  </span>
                ) : (
                  <span onClick={handleLogoutClick}>Logout</span>
                )}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
