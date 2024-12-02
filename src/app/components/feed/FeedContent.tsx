import { FeedActionData } from "@/app/types/ui/button.config";
import ImageComponent from "../ui/ImageComponent";
import FeedActionButtons from "./FeedActionButtons";

const FeedContent = () => {
  const imageProps = {
    imageUrl: "/login-bg-img.jpg",
    altText: "postPic",
    fill: true,
    className: "object-cover rounded-md",
  };
  const FeedActionTypesData = FeedActionData;
  return (
    <div className="flex flex-col gap-y-2">
      <div className="w-full min-h-96 relative">
        <ImageComponent imageProps={imageProps} />
      </div>
      <p>
        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    molestias rem in sit cum perferendis illum dolorem, hic iusto odio
    mollitia alias ea, itaque eligendi quod reprehenderit enim cupiditate,
    soluta ad! Culpa quam cupiditate exercitationem ipsum autem magni
    quod, at blanditiis voluptas? Odit fugit nostrum recusandae inventore
    deserunt impedit praesentium reiciendis iste dolor! Amet, ad nostrum
    ullam vel optio necessitatibus sit alias porro dignissimos dolorem
    asperiores odit labore quis earum deleniti ratione? Praesentium
    consectetur non sint laboriosam nostrum, sunt earum quos culpa ipsa!
    Error, ducimus corporis at quam rem nam optio eius, non, praesentium
    natus quo ipsum debitis consequatur est a blanditiis ea quisquam
    eveniet doloremque deleniti distinctio! Voluptatem soluta animi enim
    facere minima ut itaque tempora facilis vitae distinctio. Praesentium
    minima enim nostrum ullam odit eaque, amet explicabo accusantium sed
    impedit pariatur voluptas sunt quasi ducimus consequuntur velit,
    voluptatum consectetur! Soluta incidunt ea reprehenderit reiciendis,
    sapiente nesciunt nam`}
      </p>
      <div className="flex justify-between items-center my-4 flex-wrap gap-2">
        {FeedActionTypesData?.map((actionType) => (
          <FeedActionButtons
            imageProps={actionType?.imageProps}
            actionType={actionType?.actionTypeData}
            key={actionType?.actionTypeData?.actionType}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedContent;
