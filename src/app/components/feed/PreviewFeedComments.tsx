import { FeedActionData } from "@/app/types/ui/button.config";
import Image from "next/image";
import FeedActionButtons from "./FeedActionButtons";

const PreviewFeedComments = () => {
  const feedAction = FeedActionData[0];
  return (
    <div className="flex gap-x-2">
      <Image
        width={24}
        height={24}
        src="/albums.png"
        alt="UserImg"
        className="w-5 h-5 rounded-md"
      />
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between">
          <p>Sandy</p>
          <Image
            width={20}
            height={20}
            src="/more.png"
            alt="storie-img"
            className="w-4 h-4"
          />
        </div>
        <p>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, autem
          cupiditate? Sequi magni quis ab, similique facilis laboriosam dolores
          laborum distinctio, cum aperiam obcaecati nulla, culpa nostrum! Illum
          at sit debitis sapiente sed nesciunt aperiam nam voluptatem tenetur ex
          nobis voluptatum earum facere placeat, dolorum, ullam iure veniam?`}
        </p>
        <div className="flex gap-x-2">
          <FeedActionButtons
            imageProps={feedAction?.imageProps}
            actionType={feedAction?.actionTypeData}
          />
          <input
            type="text"
            placeholder="Reply"
            className="px-4 py-2 rounded-md outline-none bg-muted"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewFeedComments;
