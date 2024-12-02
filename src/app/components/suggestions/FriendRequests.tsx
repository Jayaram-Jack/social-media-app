import LinkComponent from "../ui/LinkComponent";
import FriendRequestCard from "./FriendRequestCard";

const FriendRequests = () => {
  const seeAllLinkData = {
    routeUrl: "/",
    target: "_blank",
    title: "Freind requests",
    className: "text-primary text-xs",
    linkName: "See all",
  };
  return (
    <div className="flex flex-col gap-4  p-4 rounded-md bg-card">
      <div className="font-medium flex justify-between items-center">
        <h4 className="text-foreground">Friend Requests</h4>
        <LinkComponent linkProps={seeAllLinkData} />
      </div>
      <FriendRequestCard />
      <FriendRequestCard />
      <FriendRequestCard />
    </div>
  );
};

export default FriendRequests;
