import UserInformation from "./user/UserInformation";
import UserMedia from "./user/UserMedia";
import Adds from "./suggestions/Adds";
import BirthdaySuggestions from "./suggestions/BirthdaySuggestions";
import FriendRequests from "./suggestions/FriendRequests";

const RightNavbar = ({ userId }: { userId?: string }) => {
  return (
    <aside>
      <div className="flex flex-col gap-y-4">
        {userId ? (
          <>
            <UserInformation />
            <UserMedia />
          </>
        ) : null}
        <FriendRequests />
        <BirthdaySuggestions />
        <Adds size="lg" />
      </div>
    </aside>
  );
};

export default RightNavbar;
