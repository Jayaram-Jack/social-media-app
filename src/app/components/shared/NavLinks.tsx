import Image from "next/image";
import Link from "next/link";

interface NavLinksStyles {
  navStyles: string;
}

const NavLinks = ({ navStyles }: NavLinksStyles) => {
  return (
    <div>
      <ul className={`${navStyles} gap-4 py-4 px-6 list-none items-center`}>
        <li>
          <Link
            href="/home"
            className="text-sm flex gap-x-2 px-2 py-1 rounded-md hover:bg-hover-bg items-center justify-center"
          >
            <Image
              src="/home.png"
              alt="homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="pt-[1px]">Home Page</span>
          </Link>
        </li>
        <li>
          <Link
            href="/friends"
            className="text-sm flex gap-x-2 px-2 py-1 rounded-md hover:bg-hover-bg items-center justify-center"
          >
            <Image
              src="/friends.png"
              alt="homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
        </li>
        <li>
          <Link
            href="/stories"
            className="text-sm flex gap-x-2 px-2 py-1 rounded-md hover:bg-hover-bg items-center justify-center"
          >
            <Image
              src="/stories.png"
              alt="homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
