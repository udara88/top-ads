import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dispatch, SetStateAction } from "react";
import Avatar from "./Avatar";

type toogleMenuProps = {
  toogleMenu: boolean;
  setToogleMenu: Dispatch<SetStateAction<boolean>>;
  imageUrl?: string;
};

const ToogleMenu = ({
  toogleMenu,
  setToogleMenu,
  imageUrl,
}: toogleMenuProps) => {
  return (
    <>
      <Avatar setToogleMenu={setToogleMenu} toogleMenu={toogleMenu} />
      <DropdownMenu open={toogleMenu} onOpenChange={setToogleMenu}>
        <DropdownMenuTrigger></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>My Account</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ToogleMenu;
