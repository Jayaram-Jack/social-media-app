import { UserImageProps } from "@/app/types/ui/user-profile.config";
import UserImagecard from "../shared/UserImageCard";
import UserFollowersImagescard from "../shared/UserFollowersImagesCard";
import Button from "../ui/Button";
import { ButtonType } from "@/app/types/ui/button.config";
import Link from "next/link";

const UserProfile = () => {
  const userImageConstData: UserImageProps = {
    bgImage: "/login-bg-img.jpg",
    coverImage: "/albums.png",
    bgAltText: "userProfilePhoto",
    coverImageAltText: "UserCoverPhoto",
  };

  const className = `h-[20vh] sm:h-[20vh] md:h-[25vh]`;

  const userData = {
    noOfFollowers: "500 Followers",
    name: "Jayaram Jakka",
  };
  const buttonProps = {
    name: `My profile`, // Text to display on the button
    className: ` bg-blue-500 text-white font-medium rounded-md 
                  hover:bg-hover-primary-bg focus:outline-none focus:ring-2 focus:ring-blue-400 
                  disabled:opacity-50 disabled:cursor-not-allowed mb-3`, // Additional styling classes
    type: ButtonType.button, // Button type
    disabled: false, // Optional: Disabled state
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-card p-2 rounded-md">
      <UserImagecard
        userImageProps={userImageConstData}
        className={className}
      />
      <p className="mt-4">{userData?.name}</p>
      <div className="flex gap-4 items-center">
        <UserFollowersImagescard />
        <p className="text-sm">{userData?.noOfFollowers}</p>
      </div>
      <Link href={"/dashboard/profile/fddsf"}>
        <Button buttonProps={buttonProps} />
      </Link>
    </div>
  );
};

export default UserProfile;
