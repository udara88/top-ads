import Footer from "../../components/shared/Footer";
import NavBar from "../../components/shared/NavBar";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
         <main className="flex h-screen flex-col">
         <NavBar/>
        <div className="flex-1" >{children}</div>
          <Footer/>
        </main>
     
    );
  }
  