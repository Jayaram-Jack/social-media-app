import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <div className="h-24 flex justify-between items-center px-4 bg-background text-foreground">
      {/* Left Content */}
      <div className="md:hidden lg:block w-[20%]">
        <Link
          href="/dashboard"
          className="font-bold text-lg flex space-x-2 items-center w-fit hover:bg-hover-bg rounded-md px-2 py-1"
        >
          <div className="w-8 h-8 relative">
            <Image
              fill
              className="w-full h-full relative rounded-full object-cover "
              src={"/connectify.png"}
              alt="Connectify"
            />
          </div>
          <span className="">Connectify</span>
        </Link>
      </div>
      {/* Center Content */}
      <nav className="hidden md:block w-[60%]">
        <NavLinks navStyles="flex" />
      </nav>
      {/* Right Content */}
      <div className="w-[20%] flex justify-end">
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;
