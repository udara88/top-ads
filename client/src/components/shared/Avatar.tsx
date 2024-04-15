import Image from "next/image"
import { google } from "../../../public/assets/icons"
import { Dispatch, SetStateAction } from "react";

type AvatarProp = {
  setToogleMenu:Dispatch<SetStateAction<boolean>>;
    imageUrl?:string;
    toogleMenu:boolean;
    
}

const Avatar = ({imageUrl,setToogleMenu,toogleMenu}:AvatarProp) => {
  return (
        <Image 
        src={imageUrl || google}
        alt="avatar"
        width={35}
        height={35}
       
        onClick={()=> setToogleMenu(!toogleMenu) }
        />
  )
}

export default Avatar