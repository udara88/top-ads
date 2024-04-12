"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import envelop from "../../../../public/assets/images/envelop.svg";
import { useEffect, useState } from "react";
import correct from '../../../../public/assets/images/corrrect.svg'

import { verifyUser } from "@/lib/api/userApi";

const VerifyEmail = () => {


  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";
  const email = searchParams.get("email") || "";
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  

  const verifyEmail = async () => {
      const {data,error} = await verifyUser(email,code)
        if(data){
          setIsVerified(true)
          setMessage(data)
        }
         if(error){
          setIsVerified(false)
          setMessage(error)
        }
  };

  useEffect(() => {
    if(!isVerified ){
      verifyEmail();
    }
    
  }, []);

  return (
    <div className="max-container flex justify-center flex-col gap-4  items-center min-h-screen">
      {isVerified ? (
        <>
          <Image src={envelop} width={200} height={30} alt="verify logo" />
          <h1 className="text-primary font-bold sm:text-5xl  text-3xl">
            Congratulation!
          </h1>
          <p className="text-2xl">{message}</p>
          <Link className="btn " href="/">
            Go back to sign in
          </Link>
        </>
      ) : (
        <>
        
          <Image src={correct} width={200} height={30} alt="correct logo" />
          <p className="text-2xl">{message}</p>
          <Link className="btn " href="/">
            Go back to sign in
          </Link>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
