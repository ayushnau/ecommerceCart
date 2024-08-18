import { Inter } from "next/font/google";
import { StoreProvider } from "store";
import { FireStoreWrapper } from "components"; // Adjust the path as necessary
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <FireStoreWrapper>{children}</FireStoreWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
