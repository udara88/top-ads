"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import envelop from "../../../../public/assets/images/envelop.svg";
import { useEffect, useState } from "react";
import { verifyUser } from "../../../lib/api/userApi";
import correct from '../../../../public/assets/images/corrrect.svg'

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";
  const email = searchParams.get("email") || "";
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      const { data, error } = await verifyUser(email, code);
      if (data) {
        setIsVerified(true);
        setMessage(data);
      } else {
        setIsVerified(false);
        setMessage(error);
      }
    };
    verifyEmail();
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
