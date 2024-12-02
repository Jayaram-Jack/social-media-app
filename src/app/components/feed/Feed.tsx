import AddCommentsToFeed from "./AddCommentsToFeed";
import FeedContent from "./FeedContent";
import FeedHeader from "./FeedHeader";
import PreviewFeedComments from "./PreviewFeedComments";

const Feed = () => {
  const figureImageCaptionData = {
    imageUrl: "/albums.png",
    altText: "profilePic",
    className: `w-10 h-10 rounded-full`,
    width: 40,
    height: 40,
  };
  const figureCaptionData = {
    captionName: "Jayaram",
    className: "",
  };
  const imageProps = {
    imageUrl: "/more.png",
    altText: "settings",
    className: `w-8 h-8 rounded-full cursor-pointer hover:bg-hover-bg p-1`,
    width: 40,
    height: 40,
  };
  return (
    <div className="flex flex-col p-4 gap-y-2 rounded-md shadow-sm bg-card">
      <FeedHeader
        figureCaptionConfig={figureCaptionData}
        figureImageConfig={figureImageCaptionData}
        imageConfig={imageProps}
      />
      <FeedContent />
      <AddCommentsToFeed />
      <PreviewFeedComments />
    </div>
  );
};

export default Feed;
