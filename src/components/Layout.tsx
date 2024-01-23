// components/Layout.tsx
import Navbar from "./Navbar";
import Image from "next/image";
import bgImage from "public/assets/background.jpeg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Image
        src={bgImage}
        placeholder="blur"
        alt="background"
        className="fixed z-[-1] w-screen"
      />
      <Navbar />
      <div className="flex items-center justify-center py-8">{children}</div>
    </>
  );
}
