import Image from "next/image";
import Link from "next/link";

const UserMedia = ({ userId }: { userId?: string }) => {
  console.log("userId is: ", userId);
  return (
    <article className="bg-card rounded-md shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">User Media</h2>
        <Link href="#" className="text-primary text-sm">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {/* {mediaThumbnails.map((src, index) => ( */}
        <Image
          //   key={index}
          src="/login-bg-img.jpg"
          alt={`User media`}
          //   alt={`User media ${index + 1}`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
        <Image
          src="/login-bg-img.jpg"
          alt={`User media`}
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-24"
        />
      </div>
    </article>
  );
};

export default UserMedia;
