import { UserImageProps } from "@/app/types/ui/user-profile.config";
import Image from "next/image";

interface UserImageCardProps {
  userImageProps: UserImageProps;
  className: string;
}

const UserImagecard = ({ userImageProps, className }: UserImageCardProps) => {
  return (
    <div className={`w-full relative ${className}`}>
      <Image
        fill
        src={`${userImageProps?.bgImage}`}
        alt={userImageProps?.bgAltText || "image"}
        className="object-cover rounded-sm w-full relative"
      />
      <Image
        width={48}
        height={48}
        src={`${userImageProps?.coverImage}`}
        alt={userImageProps?.bgAltText || "image"}
        className="w-12 h-12 rounded-full ring-2 absolute left-0 right-0 -bottom-[3.5vh] m-auto ring-primary-foreground"
      />
    </div>
  );
};

export default UserImagecard;
