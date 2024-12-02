"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginHeader = () => {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };
  return (
    <div className="h-24 flex justify-between items-center bg-background text-foreground">
      {/* Left Content */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-lg text-primary">
          Connectify
        </Link>
      </div>
      {/* Center Content */}
      <div className="hidden md:block w-[60%]">This is middle content</div>
      {/* Right Content */}
      <div className="w-[20%] flex justify-end">
        <button
          className="text-foreground px-2 py-1"
          onClick={navigateToDashboard}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginHeader;
