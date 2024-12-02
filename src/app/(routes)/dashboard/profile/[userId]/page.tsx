import DashboardFeed from "@/app/components/DashboardFeed";
import LeftNavbar from "@/app/components/LeftNavbar";
import RightNavbar from "@/app/components/RightNavbar";
import ProfileDetailsCard from "@/app/components/user/ProfileDetailsCard";

export default async function Profile({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params)?.userId;
  return (
    <div className="w-full flex gap-x-8 p-4 bg-background text-foreground">
      <aside className="hidden xl:block xl:w-[20%]">
        <LeftNavbar type="profile" />
      </aside>
      <main className="w-full lg:w-[70%] xl:w-1/2">
        <div className="flex flex-col gap-4">
          <ProfileDetailsCard />
          <DashboardFeed />
        </div>
      </main>
      <aside className="hidden lg:block lg:w-[30%]">
        <RightNavbar userId={userId} />
      </aside>
    </div>
  );
}
