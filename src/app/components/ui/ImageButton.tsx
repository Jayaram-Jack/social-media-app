import { ButtonConfig, ImageTypeConfig } from "@/app/types/ui/button.config";
import Image from "next/image";

interface ButtonImageProps {
  buttonProps: ButtonConfig;
  imageProps: ImageTypeConfig;
}

const ImageButton = ({ buttonProps, imageProps }: ButtonImageProps) => {
  return (
    <button
      type={buttonProps?.type}
      onClick={buttonProps?.onClick}
      disabled={buttonProps?.disabled}
      className={`${buttonProps?.className}`}
    >
      {imageProps?.fill === true ? (
        <Image
          src={imageProps?.imageUrl}
          alt={imageProps?.altText}
          fill={imageProps?.fill ?? false}
          className={`${imageProps?.className}`}
        />
      ) : (
        <Image
          src={imageProps?.imageUrl}
          alt={imageProps?.altText}
          width={imageProps?.width}
          height={imageProps?.height}
          className={`${imageProps?.className}`}
        />
      )}
    </button>
  );
};

export default ImageButton;
