"use client";
import { useState } from "react";
import UserNavbar from "../UserNavbar";

const RightHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex flex-col gap-1 cursor-pointer hover:bg-hover-bg p-2 rounded-full"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={`w-6 h-1 bg-blue-400 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></span>
        <span
          className={`w-6 h-1 bg-blue-400 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        ></span>
        <span
          className={`w-6 h-1 bg-blue-400 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></span>
      </button>
      {isOpen && (
        <div className="absolute z-10 top-24 right-0 float-right w-fit flex items-center justify-center bg-background rounded-sm pr-1 transition-all">
          <UserNavbar />
        </div>
      )}
    </div>
  );
};

export default RightHeader;
