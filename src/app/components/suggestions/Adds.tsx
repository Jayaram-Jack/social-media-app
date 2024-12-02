import Image from "next/image";
import Button from "../ui/Button";
import { ButtonType } from "@/app/types/ui/button.config";

const Adds = ({ size }: { size: "sm" | "md" | "lg" }) => {
  const buttonProps = {
    name: `Learn More`, // Text to display on the button
    className: `bg-muted text-secondary-text py-2 px-4 rounded-md w-full mt-4
                  hover:bg-hover-bg focus:outline-none`, // Additional styling classes
    type: ButtonType.button, // Button type
    disabled: false, // Optional: Disabled state
  };

  return (
    <div
      className={`flex flex-col ${
        size === "sm" ? "gap-2" : "gap-4"
      }  p-4 rounded-md bg-card`}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-secondary-text text-sm">Sponser Ads</h4>
        <Image
          src="/more.png"
          alt="settings"
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </div>
      <div
        className={`w-full relative ${
          size === "sm" ? "h-[20vh]" : size === "md" ? "h-[30vh]" : "h-[35vh]"
        }`}
      >
        <Image
          src="/login-bg-img.jpg"
          alt="adsImg"
          fill={true}
          className={`rounded-lg object-cover`}
        />
      </div>
      <div className={`flex flex-col ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <figure className="flex gap-4">
          <Image
            width={20}
            height={20}
            src="/addimage.png"
            alt="storie-img"
            className="w-5 h-5"
          />
          <figcaption className="text-primary text-sm">Add Name</figcaption>
        </figure>
        <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at
          dolor ullam totam vel rem vitae cum, aspernatur, ex ea officiis id.
          Dolores ratione debitis, sit tempore nemo enim architecto?
        </p>
      </div>
      <Button buttonProps={buttonProps} />
    </div>
  );
};

export default Adds;
