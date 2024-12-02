import UserProfile from "./user/UserProfile";
import Adds from "./suggestions/Adds";
import UserNavbar from "./UserNavbar";

const LeftNavbar = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-y-8">
        {type === "home" && <UserProfile />}
        <UserNavbar />
        <Adds size="sm" />
      </div>
    </div>
  );
};

export default LeftNavbar;
