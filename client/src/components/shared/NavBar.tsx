"use client"
import Link from "next/link";
import { navlinks } from "../../../constants";
import { hamburger } from "../../../public/assets/icons";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import SignUp from "../user/Signup";
import { useEffect, useState } from "react";
import AlertMessage from "./AlertMessage";
import DialogBox from "./DialogBox";
import { User } from "@/lib/types";
import ToogleMenu from "./ToogleMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


const NavBar = () => {
  const [open, setopen] = useState(false)
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [toogleMenu, setToogleMenu] = useState(false)
  const {user,isAuthenticated,loading,error} = useSelector((state:RootState)=> state.user)

  return (
    <header className="w-full px-4 py-4 bg-primary relative">
       
      <nav className="max-container  flex justify-between items-center gap-4  text-white " >
        <h1 className="text-xl text-white font-semibold">TopAds.lk</h1>
        <ul className="max-lg:hidden">
          {navlinks.map((link) => (
          
              <Link key={link.id} href={link.href} className="p-4 font-semibold  ">
                {link.label}
              </Link>
            
          ))}
        </ul>
        <ul className="flex flex-col justify-center max-lg:hidden font-semibold ">
           {!isAuthenticated ?  <Link key={5} href="#signin" onClick={()=>setopen(true)}>Sign In</Link>: <ToogleMenu  toogleMenu={toogleMenu} setToogleMenu={setToogleMenu} /> }
         </ul>
       
        <div className="hidden max-lg:block">
          <Sheet key="left">
            <SheetTrigger>
              <Image
                src={hamburger}
                alt="icon-navbar"
                width={25}
                height={25}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent side="left" className="">
              <SheetHeader>
                <SheetTitle className="sm:text-2xl text-xl text-primary ">
                  TopAds.lk
                </SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col justify-start">
                    {navlinks.map((link,index) => (
                     
                        <Link   key={index} href={link.href} className="p-4 font-semibold  ">
                          {link.label}
                        </Link>
                      
                    ))}
                    
                     <Link key={10} href="#signin" className="btn mt-6" onClick={()=>setopen(true)}>Sign In</Link>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
     
      <DialogBox  open={open} setopen={setopen} >
          <SignUp setopen={setopen} setShowMessage={setShowMessage} setShowErrorMessage={setShowErrorMessage} setMessage={setMessage}  />
      </DialogBox>
      {showMessage && (
        <AlertMessage type="success" title="Success" description={message} />
      )}
      {showErrorMessage && (
        <AlertMessage type="error" title="Error" description={message} />
      )}
    </header>
  );
};

export default NavBar;
