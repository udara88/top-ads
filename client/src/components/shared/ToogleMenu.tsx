
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dispatch, SetStateAction } from "react";
import Avatar from "./Avatar";
import { useAppDispatch } from "@/hooks/useTypedSelector";
import {logout } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";

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
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logOut = ()=>{
    dispatch(logout())
    router.push('/')
  }
 

  return (
    <>
      <Avatar imageUrl={imageUrl} setToogleMenu={setToogleMenu} toogleMenu={toogleMenu}  />
      <DropdownMenu open={toogleMenu} onOpenChange={setToogleMenu}>
        <DropdownMenuTrigger></DropdownMenuTrigger>
        <DropdownMenuContent >
          <DropdownMenuItem className="cursor-pointer">My Account</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" onClick={logOut}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ToogleMenu;
