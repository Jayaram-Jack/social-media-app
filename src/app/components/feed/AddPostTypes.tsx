"use client";
import { Story } from "@/app/types/ui/button.config";
import Image from "next/image";

interface PostTypeConfig {
  postType: Story;
}

const AddPostTypes = ({ postType }: PostTypeConfig) => {
  const handlePost = (postType: Story) => {
    console.log("clicked on add post types: ", postType);
  };
  return (
    <>
      <div
        className="cursor-pointer flex gap-x-1 items-center hover:bg-hover-bg px-2 py-1 rounded-md hover:text-secondary-foreground hover:transition-all"
        onClick={() => handlePost(postType)}
      >
        <Image
          width={20}
          height={20}
          src={postType?.imageSrc}
          alt={postType?.altText}
          className={`w-5 h-5 ${postType?.className}`}
        />
        <span>{postType?.caption}</span>
      </div>
    </>
  );
};

export default AddPostTypes;
