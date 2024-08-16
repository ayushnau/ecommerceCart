import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { StoreProvider } from "store";
import { PersistGate } from "redux-persist/integration/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const store = useStore({ initialState: {} });
  // const { store } = initializeStore({});

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
