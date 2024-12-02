import { postTypesData } from "@/app/types/ui/button.config";
import Image from "next/image";
import AddPostTypes from "./AddPostTypes";

const AddPostCard = () => {
  return (
    <div className="flex shadow-sm rounded-md gap-4 p-2 bg-card">
      <Image
        width={94}
        height={94}
        src="/albums.png"
        alt="storie-img"
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col gap-y-2 flex-1">
        <div className="flex gap-x-2">
          <textarea
            placeholder="Share your thoughts..."
            className="flex-1 rounded-lg bg-muted flex-shrink overflow-scroll hide-scrollbar py-1 px-2 outline-none"
          ></textarea>
          <Image
            width={20}
            height={20}
            src="/emoji.png"
            alt="emoji"
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        <div className="flex gap-x-4 flex-wrap text-hover-secondary-bg">
          {postTypesData?.map((post) => (
            <AddPostTypes key={post?.altText} postType={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddPostCard;
