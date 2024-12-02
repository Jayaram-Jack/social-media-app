import Image from "next/image";
import Link from "next/link";
import { NavbarLink as NavbarLinkType } from "../types/shared.config";

interface NavbarLinkProps {
  link: NavbarLinkType;
  showDivider?: boolean;
}

const NavbarLink = ({ link, showDivider = true }: NavbarLinkProps) => {
  return (
    <>
      {showDivider === true && <hr className="border-t-2 my-2" />}
      <Link
        href={link?.linkUrl}
        className="hover:bg-hover-bg rounded-md px-2 py-1"
      >
        <li className="flex gap-4 items-center">
          <Image
            width={16}
            height={16}
            src={link?.imageUrl}
            alt={link?.altText}
            className="w-4 h-4"
          />
          <span>{link?.linkName}</span>
        </li>
      </Link>
    </>
  );
};

export default NavbarLink;
