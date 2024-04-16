"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation,faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import { useAppDispatch } from "@/hooks/useTypedSelector";
import { clearAllMessage } from "@/redux/features/user/userSlice";
type AlertMessageProp = {
  type: "success" | "error";
  title?: string;
  description: string | null;
};

const AlertMessage = ({ type, title, description }: AlertMessageProp) => {
const dispatch = useAppDispatch()

  const [show, setshow] = useState(true);

  useEffect(() => {
   
    const timeId = setTimeout(() => {
      setshow(false);
      dispatch(clearAllMessage())
    }, 3000);

    return () => {
      
      window.clearTimeout(timeId );
      
    }

  },[]);

  if (!show) {
    
    return null;
  }

  return (
    <div className="absolute top-20 right-1  ">
      <Alert
        variant={`${type === "success" ? "default" : "destructive"}`}
        className={`w-[400px] min-h-24 border-2 ${type === "success" ? " border-primary " : "border-red-600"} bg-white `}
      >  
       {type === "success" ?  <FontAwesomeIcon icon={faCircleCheck} className={`h-4 w-4 text-red-600 `} /> 
       :<FontAwesomeIcon icon={faCircleExclamation} className={`h-4 w-4 text-red-600 `} />}
        <AlertTitle className={`${type === "success" ? "text-primary " : "text-red-600"}`}>{title}</AlertTitle>
        <AlertDescription className={`${type === "success" ? "text-primary " : "text-red-600"}`}>{description}</AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertMessage;
