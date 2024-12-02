import Image from "next/image";

const AddCommentsToFeed = () => {
  return (
    <div className="flex gap-x-2 items-center my-4">
      <Image
        width={24}
        height={24}
        src="/albums.png"
        alt="userImg"
        className="w-10 h-10 rounded-md"
      />
      <div className="relative w-full flex items-center justify-between rounded-md bg-muted">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full px-4 py-2 flex-1 rounded-md bg-inherit outline-none overflow-y-scroll hide-scrollbar"
        />
        <Image
          width={16}
          height={16}
          src="/emoji.png"
          alt="emoji-img"
          className="w-7 h-7 inline relative right-2  cursor-pointer p-1 hover:bg-hover-bg rounded-full"
        />
      </div>
    </div>
  );
};

export default AddCommentsToFeed;
