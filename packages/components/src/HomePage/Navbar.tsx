"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon, CartIcon } from "icons";

function classNames(...classes: any): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-[#2874F0]">
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
                      width={32} // Example width
                      height={32} // Example height
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

              {/* Desktop Search Bar */}

              {/* Desktop Profile and Cart Icons */}
              <div className="items-center space-x-6 flex">
                <div className="hidden sm:flex items-center">
                  <Link
                    href="/profile"
                    className="flex items-center text-white"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 18.75a9 9 0 1115 0v.75H4.5v-.75z"
                      />
                    </svg> */}
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ffffff/external-kmg-design-glyph-kmg-design/32/external-login-ui-essentials-kmg-design-glyph-kmg-design.png"
                      alt="external-login-ui-essentials-kmg-design-glyph-kmg-design"
                    />
                    <span className="ml-2">Login</span>
                  </Link>
                </div>
                <Link
                  href="/cart"
                  className="flex items-center text-white pr-2"
                >
                  <CartIcon />
                  <span className="ml-2">Cart</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-3 px-2 pb-3 pt-2">
              {/* Mobile Search Bar */}
              <Disclosure.Button as="div" className="block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className="w-full p-2 pl-4 rounded-l-md"
                  />
                  <button className="absolute right-0 top-0 h-full p-2 bg-yellow-400 text-gray-800 rounded-r-md">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
                      />
                    </svg>
                  </button>
                </div>
              </Disclosure.Button>

              {/* Mobile Login Button */}
              <Disclosure.Button
                as={Link}
                href="/profile"
                className="block rounded-md hover:bg-blue-900 px-3 py-2 text-base font-medium text-white pt-2"
              >
                <img
                  className="inline mr-1"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ffffff/external-kmg-design-glyph-kmg-design/32/external-login-ui-essentials-kmg-design-glyph-kmg-design.png"
                  alt="external-login-ui-essentials-kmg-design-glyph-kmg-design"
                />
                Login
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
