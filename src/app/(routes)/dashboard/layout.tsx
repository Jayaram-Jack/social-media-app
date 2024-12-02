import Footer from "@/app/components/shared/Footer";
import Header from "@/app/components/shared/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 shadow-md">
        <Header />
      </header>
      <main className="w-full flex-1 px-4">{children}</main>
      <footer className="w-full z-20 bottom-0 left-0 right-0">
        <Footer />
      </footer>
    </div>
    // <div className="min-h-screen relative h-full pb-16">
    //   <header className="sticky top-0 z-10 shadow-md">
    //     <Header />
    //   </header>
    //   <main className="w-full">{children}</main>
    //   <footer className="w-full absolute bottom-0 left-0">
    //     <Footer />
    //   </footer>
    // </div>
  );
}
