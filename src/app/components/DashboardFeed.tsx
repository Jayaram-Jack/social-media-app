import AddPost from "./feed/AddPost";
import Feed from "./feed/Feed";
import StoryList from "./user/StorieList";

const DashboardFeed = () => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <StoryList />
      <AddPost />
      <Feed />
      <Feed />
    </div>
  );
};

export default DashboardFeed;
