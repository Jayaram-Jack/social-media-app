import DashboardFeed from "@/app/components/DashboardFeed";
import LeftNavbar from "@/app/components/LeftNavbar";
import RightNavbar from "@/app/components/RightNavbar";

const DashboardPage = () => {
  return (
    <div className="w-full flex gap-x-8 p-4 bg-background text-foreground">
      <aside className="hidden xl:block xl:w-[20%]">
        <LeftNavbar type="home" />
      </aside>
      <main className="w-full lg:w-[70%] xl:w-1/2">
        <DashboardFeed />
      </main>
      <aside className="hidden lg:block lg:w-[30%]">
        <RightNavbar />
      </aside>
    </div>
  );
};

export default DashboardPage;
