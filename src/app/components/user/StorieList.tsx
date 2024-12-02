import { storiesData } from "@/app/types/ui/button.config";
import StoryItem from "./StoryItem";

const StoryList = () => {
  return (
    <div className="flex overflow-x-scroll space-x-4 w-full p-2 hide-scrollbar rounded-lg bg-card">
      {storiesData?.map((story) => (
        <StoryItem key={story?.altText} storyData={story} />
      ))}
    </div>
  );
};

export default StoryList;
