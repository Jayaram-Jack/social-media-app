import { imageButtonPropsData } from "@/app/types/ui/button.config";
import ImageComponent from "../ui/ImageComponent";
import ImageButton from "../ui/ImageButton";

const FriendRequestCard = () => {
  const buttonProps = {
    name: `Accept`, // Text to display on the button
  };
  const imageButtonsData = imageButtonPropsData;
  const imageData = {
    imageUrl: "/albums.png",
    altText: "UserImg",
    width: 24,
    height: 24,
    className: "w-8 h-8 rounded-full object-cover",
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <ImageComponent imageProps={imageData} />
        <span>Jayaram</span>
      </div>
      <div className="flex gap-3 items-center">
        {imageButtonsData?.map((imagedata) => (
          <ImageButton
            buttonProps={buttonProps}
            imageProps={imagedata}
            key={imagedata?.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendRequestCard;
