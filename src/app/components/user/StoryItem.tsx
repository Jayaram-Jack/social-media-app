"use client";
import { Story } from "@/app/types/ui/button.config";
import Image from "next/image";

interface StoryListProps {
  storyData: Story;
}

const StoryItem = ({ storyData }: StoryListProps) => {
  const handleStory = (storyData: Story) => {
    console.log("the storyData is: ", storyData);
  };
  return (
    <>
      <figure className="cursor-pointer" onClick={() => handleStory(storyData)}>
        <Image
          width={94}
          height={94}
          src={storyData?.imageSrc}
          alt={storyData?.altText}
          className={`w-16 rounded-full ring-2 p-1 overflow-hidden  ${storyData?.className}`}
        />
        <figcaption className="pt-1 text-xs w-16 text-center whitespace-nowrap overflow-hidden text-ellipsis">
          {storyData?.caption}
        </figcaption>
      </figure>
    </>
  );
};

export default StoryItem;
