import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-evenly gap-4 h-[10vh] w-full bg-secondary text-secondary-foreground">
      <p className="font-bold"> &#xA9; Connectify</p>
      <Link href={"/dashboard"} className="text-primary underline">
        <button className="px-2 py-1 hover:bg-hover-secondary-bg rounded-lg">
          Contact Us
        </button>
      </Link>
      <Link href={"/dashboard"} className="text-primary underline">
        <button className="px-2 py-1 hover:bg-hover-secondary-bg rounded-lg">
          Support
        </button>
      </Link>
    </div>
  );
};

export default Footer;
