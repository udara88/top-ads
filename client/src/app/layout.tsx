import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";


const popins = Poppins(
  {
    subsets: ["latin"] ,
    weight:['400','500','600','700'],
    variable:'--font-poppins'
   }
  );

export const metadata: Metadata = {
  title: "Top ads",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <ReduxProvider>
        {children}
        </ReduxProvider>
        </body>
    </html>
  );
}
