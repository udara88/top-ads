"use client";
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

import SignUp from "../user/Signup";
import {  useState } from "react";
import AlertMessage from "./AlertMessage";
import DialogBox from "./DialogBox";
import ToogleMenu from "./ToogleMenu";
import Logo from "../../../public/assets/images/logo.png";
import { useAppSelector } from "@/hooks/useTypedSelector";

const NavBar = () => {
  const [open, setopen] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [toogleMenu, setToogleMenu] = useState(false);
  const {user} = useAppSelector((state)=> state.user)



  return (
    <header className="w-full px-4 py-1  relative">
      <nav className="max-container  flex justify-between items-center gap-4   ">
        <div>
          <Image
            src={Logo}
            alt="topads-logo"
            className="object-contain object-center"
            width={130}
            height={29}
          />
        </div>
        <ul className="max-lg:hidden">
          {navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="px-4 py-2 font-semibold  "
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <ul className="flex flex-col justify-center max-lg:hidden font-semibold ">
          {!user?.isAuthenticated ? <Link key={5} href="#signin" onClick={() => setopen(true)}>
              Sign In
            </Link>: <ToogleMenu toogleMenu={toogleMenu} setToogleMenu={setToogleMenu} imageUrl={user?.imageUrl}/> }
            
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
                  <div className="w-full flex justify-center items-center">
                  <Image
                    src={Logo}
                    alt="topads-logo"
                    className="object-contain object-center"
                    width={90}
                    height={29}
                  />
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col justify-start">
                    {navlinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="p-4 font-semibold  "
                      >
                        {link.label}
                      </Link>
                    ))}

                    <Link
                      key={10}
                      href="#signin"
                      className="btn mt-6"
                      onClick={() => setopen(true)}
                    >
                      Sign In
                    </Link>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <DialogBox open={open} setopen={setopen}>
        <SignUp
          setopen={setopen}
          setShowMessage={setShowMessage}
          setShowErrorMessage={setShowErrorMessage}
          setMessage={setMessage}
        />
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
