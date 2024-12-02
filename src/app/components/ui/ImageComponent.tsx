import { ImageTypeConfig } from "@/app/types/ui/button.config";
import Image from "next/image";

interface ImageTypeProps {
  imageProps: ImageTypeConfig;
}

const ImageComponent = ({ imageProps }: ImageTypeProps) => {
  return (
    <>
      <Image
        src={imageProps?.imageUrl}
        alt={imageProps?.altText}
        fill={imageProps?.fill ?? false}
        width={imageProps?.fill ? undefined : imageProps?.width || 24}
        height={imageProps?.fill ? undefined : imageProps?.height || 24}
        className={`${imageProps?.className}`}
      />
    </>
  );
};

export default ImageComponent;
