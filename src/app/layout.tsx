import type { Metadata } from "next";
import "./globals.css";
// import { Poppins } from "next/font/google";
import { ThemeProvider } from "./context/ThemeProvider";
// import { useTheme } from "./hooks/useTheme";

// const poppins = Poppins({
//   subsets: ["latin"], // Load subsets based on your needs
//   weight: ["400", "600"], // Specify the weights you want
// });

export const metadata: Metadata = {
  title:
    "Connectify - Share Moments, Connect with Friends | Social Media Platform",
  description:
    "Share your life's moments, connect with friends, and explore a vibrant community. Experience real-time photo sharing, stories, and meaningful interactions in a modern social space.",
  keywords:
    "social media, photo sharing, social network, connect friends, share moments, stories, community platform",
  openGraph: {
    title: "Connectify - Share Moments, Connect with Friends",
    description:
      "Share your life's moments, connect with friends, and explore a vibrant community. Join Connectify today!",
    type: "website",
    locale: "en_US",
    siteName: "Connectify",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { theme } = useTheme();
  return (
    <html lang="en">
      <body className={``}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
