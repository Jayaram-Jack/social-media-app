import { CaptionConfig, ImageTypeConfig } from "@/app/types/ui/button.config";
import ImageComponent from "../ui/ImageComponent";

interface HeaderConfig {
  figureImageConfig: ImageTypeConfig;
  figureCaptionConfig: CaptionConfig;
  imageConfig: ImageTypeConfig;
}

const FeedHeader = ({
  figureImageConfig,
  figureCaptionConfig,
  imageConfig,
}: HeaderConfig) => {
  return (
    <div className="flex justify-between items-center">
      <figure className="flex gap-x-4 items-center">
        <ImageComponent imageProps={figureImageConfig} />
        <figcaption className={`${figureCaptionConfig?.className}`}>
          {figureCaptionConfig?.captionName}
        </figcaption>
      </figure>
      <ImageComponent imageProps={imageConfig} />
    </div>
  );
};

export default FeedHeader;
