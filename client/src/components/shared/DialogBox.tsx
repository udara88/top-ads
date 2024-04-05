import { Dispatch, ReactNode, SetStateAction } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type DialogProps = {
    open:boolean;
    setopen:Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}

const DialogBox = ({open,setopen,children}:DialogProps) => {
  return (
    <Dialog open={open}  onOpenChange={setopen}>
    <DialogTrigger asChild>
     
    </DialogTrigger>
    <DialogContent className="sm:max-w-[500px]">
       {children}
    </DialogContent>
  </Dialog>
  )
}

export default DialogBox