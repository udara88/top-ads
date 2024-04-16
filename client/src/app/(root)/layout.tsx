import Footer from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
         <main className="flex h-screen flex-col">
         <NavBar/>
        <div className="flex-1" >{children}</div>
        <Toaster />
          <Footer/>
        </main>
     
    );
  }
  