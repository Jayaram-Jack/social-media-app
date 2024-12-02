import UserImagecard from "../shared/UserImageCard";

const ProfileDetailsCard = () => {
  const userImageConstData = {
    bgImage: "/login-bg-img.jpg",
    coverImage: "/albums.png",
    bgAltText: "userProfilePhoto",
    coverImageAltText: "UserCoverPhoto",
  };

  const className = `h-[25vh] md:h-[30vh]`;
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-secondary rounded-md">
      <UserImagecard
        userImageProps={userImageConstData}
        className={className}
      />
      <p className="font-semibold mt-8"> Jayaram</p>
      <div className="flex gap-4 py-4 flex-wrap">
        <p className="flex flex-col">
          <span className="font-semibold">142</span>
          <span>Posts</span>
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">1k</span>
          <span>Followers</span>
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">1.2k</span>
          <span>Following</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileDetailsCard;
