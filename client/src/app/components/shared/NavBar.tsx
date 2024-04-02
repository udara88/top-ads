import Link from "next/link";
import { navlinks } from "../../../../constants";
import { hamburger } from "../../../../public/assets/icons";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const NavBar = () => {
  return (
    <header className="w-full px-4 py-4 bg-primary">
      <nav className="max-container  flex justify-between items-center gap-4  text-white">
        <h1 className="text-xl text-white font-semibold">TopAds.lk</h1>
        <ul className="max-lg:hidden">
          {navlinks.map((link) => (
            <>
              <Link href={link.href} className="p-4 font-semibold  ">
                {link.label}
              </Link>
            </>
          ))}
        </ul>

        <Dialog>
          <DialogTrigger asChild>
            <ul className="max-lg:hidden font-semibold">
              
              <Button className="text-base" >Sign in</Button>
            </ul>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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
                    {navlinks.map((link) => (
                      <>
                        <Link href={link.href} className="p-4 font-semibold  ">
                          {link.label}
                        </Link>
                      </>
                    ))}
                  </ul>

                  <ul className="flex flex-col justify-start">
                    <Link href="/sign-in" className="p-4 font-semibold">
                      Sign in
                    </Link>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
