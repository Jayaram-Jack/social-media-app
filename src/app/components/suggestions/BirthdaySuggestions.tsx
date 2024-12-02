import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const BirthdaySuggestions = () => {
  const buttonProps = {
    name: `celebrate`, // Text to display on the button
    className: `bg-primary text-primary-foreground rounded-lg
                  hover:bg-hover-primary-bg
                  disabled:opacity-50 disabled:cursor-not-allowed`,
  };
  return (
    <div className="flex flex-col gap-4 rounded-md p-4 bg-card">
      <h4 className="font-semibold">Birthdays</h4>
      {/* FriendsBirthdayComponent */}
      <div>
        {/* FriendBirthdayCard */}
        <div className="flex justify-between flex-wrap">
          <div className="flex gap-4 items-center">
            <Image
              src={"/albums.png"}
              alt={"UserImg"}
              width={24}
              height={24}
              className={`w-8 h-8 rounded-full object-cover`}
            />
            <span>User 1</span>
          </div>
          <Button buttonProps={buttonProps} />
        </div>
      </div>
      {/* ShowAllFriendsBirthday component */}
      <div className="flex items-center gap-4 bg-muted rounded-md p-4">
        <Image
          src="/gift.png"
          alt="gift"
          width={24}
          height={24}
          className="w-8 h-8"
        />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="font-semibold text-secondary-text">
            Upcoming birthdays
          </span>
          <span className="text-secondary-text">
            see other 16 have Upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BirthdaySuggestions;
