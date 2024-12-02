import Image from "next/image";

const UserFollowersImagescard = () => {
  const count = 4;
  const ImagesData = {
    imageUrl: "/albums.png",
    altText: "followe-img",
  };
  return (
    <div className="flex">
      {[...Array(count)].map((_, index) => (
        <Image
          key={count + "" + index}
          width={16}
          height={16}
          src={ImagesData?.imageUrl}
          alt={ImagesData?.altText}
          className="w-4 h-4 rounded-full"
        />
      ))}
    </div>
  );
};

export default UserFollowersImagescard;
