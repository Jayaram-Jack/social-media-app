import { NavbarLinks } from "../types/shared.config";
import NavbarLink from "./NavbarLink";

const UserNavbar = () => {
  return (
    <nav className="p-4 rounded-md bg-card">
      <ul className="list-none flex flex-col">
        {NavbarLinks.map((link, index) => (
          <NavbarLink key={link.altText} link={link} showDivider={index > 0} />
        ))}
      </ul>
    </nav>
  );
};

export default UserNavbar;
