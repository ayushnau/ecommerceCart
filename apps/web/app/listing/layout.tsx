import type { Metadata } from "next";
import { Navbar, Footer } from "components";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce Shopping cart",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F1F3F6] flex flex-col min-h-screen overflow-y-auto relative">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div className="max-w-8xl mx-auto ">{children}</div>
      <Footer />
    </div>
  );
}

