import {
  ActionTypeConfig,
  ImageTypeConfig,
} from "@/app/types/ui/button.config";
import ImageComponent from "../ui/ImageComponent";

interface ActionConfig {
  imageProps: ImageTypeConfig;
  actionType: ActionTypeConfig;
}

const FeedActionButtons = ({ imageProps, actionType }: ActionConfig) => {
  return (
    <>
      <button className="bg-slate-100 text-gray-300 rounded-lg cursor-text flex gap-x-2 items-center p-2 justify-center">
        <ImageComponent imageProps={imageProps} />
        <span className={`${actionType?.dividerClassName}`}>
          {actionType?.divider ?? "|"}
        </span>
        <span className={`${actionType?.actionCountClassName}`}>
          {actionType?.actionCount}
          <span
            className={`hidden md:inline pl-1 ${actionType?.actionTypeClassName}`}
          >
            {actionType?.actionType}
          </span>
        </span>
      </button>
    </>
  );
};

export default FeedActionButtons;
