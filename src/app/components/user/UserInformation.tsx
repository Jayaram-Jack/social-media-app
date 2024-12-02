import Image from "next/image";
import Link from "next/link";

const UserInformation = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-card rounded md">
      <div className="font-medium flex justify-between items-center">
        <h4 className="text-secondary-text">User Information</h4>
        <Link
          href="/"
          target="_blank"
          title="Freind requests"
          className="text-primary text-xs"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h3>
          <span className="font-semibold text-sm pr-2">Jayaram</span>
          <span className="text-secondary-text text-sm">@aram</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos
          suscipit exercitationem nisi? Qui quia molestias aut eius, perferendis
          maxime, doloribus cumque, quos debitis magnam odit quas sunt quaerat
          repudiandae?
        </p>
        <ul className="flex flex-col gap-4 list-none text-xs text-secondary-text">
          <li className="flex items-center gap-2">
            <Image
              src="/map.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
            />
            Living in
            <span className="text-secondary-foreground">East Godavari</span>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/school.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
            />
            went to
            <span className="text-secondary-foreground">
              Ipolavaram High school
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/work.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
            />
            works at<span className="text-secondary-foreground">Rome</span>
          </li>
          <li className="">
            <ul className="list-none flex justify-between">
              <li className="flex gap-2 items-center">
                <Image
                  src="/market.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <Link
                  href="/"
                  target="_blank"
                  title="Freind requests"
                  className="text-primary text-xs"
                >
                  jay.dev
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <Image
                  src="/date.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <Link
                  href="/"
                  target="_blank"
                  title="Freind requests"
                  className="text-primary text-xs"
                >
                  Joined on Jan 2023
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className={`px-2 py-1 rounded-md w-full text-xs ${
            true
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {true ? "Following" : "Follow"}
        </button>
        <button className="text-error text-xs self-end px-2 py-1 rounded-md hover:bg-hover-bg">
          Block User
        </button>
      </div>
    </div>
  );
};

export default UserInformation;
