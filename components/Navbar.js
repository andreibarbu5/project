import React, { useState } from "react";
import Logo from "../public/Logo";
import MenuIcon from "../public/MenuIcon";
import CloseMenuIcon from "../public/CloseMenuIcon";
import MenuDropDown from "../components/MenuDropDown";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="sticky z-30 top-0 bg-[#2d5d56]">
      <div className="bg-[#2d5d56] relative z-20 px-6 md:px-7 py-[1.85rem] flex items-center justify-between max-w-[676px] md:max-w-[1000px] mx-auto">
        {/* Left Side - Logo */}
        <div className="">
          <Logo onClick={() => router.push("/")} className="cursor-pointer" />
        </div>

        {/* Right Side*/}

        {/* Burger Menu */}
        <div
          className="lg:hidden bg-[#2b5852] p-1 -my-1 rounded-md"
          onClick={() => setIsMenu(!isMenu)}
        >
          {isMenu ? (
            <CloseMenuIcon className="text-white text-[26px] " />
          ) : (
            <MenuIcon className="text-white text-[26px] " />
          )}
        </div>

        {/* Menu Items List */}
        <div className="hidden lg:block">
          <ul className="font-semibold flex items-center gap-x-10 text-white text-[14px] leading-[20px] ">
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#about">Warum q-bility?</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#trade">Jetzt Quoten handeln</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#team">Team</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#faq">Wissen</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#contact">Kontakt</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a
                onClick={() => router.push("/login")}
                className="cursor-pointer"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* DropDown */}
      <div
        className={`-translate-y-[25rem] ${
          isMenu && "translate-y-[0px]"
        } duration-300 ease-out lg:hidden rounded-full`}
      >
        <div
          className={`absolute bg-[#2d5d56] w-full  rounded-b-[0.8rem] ${
            isMenu && "shadow-lg shadow-black/30"
          }  `}
        >
          <MenuDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
