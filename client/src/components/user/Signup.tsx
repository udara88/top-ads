"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signupFormSchema } from "../../lib/validator";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { google } from "../../../public/assets/icons";
import { useRouter } from "next/navigation";
import { User } from "@/lib/types";
import {signupAsync} from "@/redux/features/user/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

type SignupFormProp = {
  setopen: Dispatch<SetStateAction<boolean>>;
  setShowMessage:Dispatch<SetStateAction<boolean>>;
  setShowErrorMessage: Dispatch<SetStateAction<boolean>>
  setMessage:Dispatch<SetStateAction<string>>
  
};

const SignUp = ({ setopen,setShowMessage,setShowErrorMessage,setMessage }: SignupFormProp) => {
  const router = useRouter();
  const [signIn, setsignIn] = useState(true);
  const dispatch = useDispatch<AppDispatch>()
 
  
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
     
    },
  });
  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
     
     dispatch(signupAsync(values))
     setopen(false)
    
  }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="sm:text-xl text-lg text-primary">
          Welcome to TopAds.lk{" "}
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-8 overflow-auto min-h-7"
          >
            {!signIn && (
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email"
                        {...field}
                        className="input-field"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter username"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className={`${
                form.formState.isSubmitting
                  ? "bg-emerald-500/80"
                  : "bg-primary "
              } text-white`}
            >
              {form.formState.isSubmitting
                ? "Submitting..."
                : `${!signIn ? "Sign Up" : "Sign In"}`}
            </Button>
          </form>
        </Form>

        <div className="w-full flex justify-center gap-4 rounded-full border-2 border-gray-400 mt-4 p-4 ">
          <span>Google</span>
          <Image src={google} alt="google icon" width={25} height={25} />
        </div>
        {signIn ? (
          <p
            className="text-gray-400 text-sm text-center mt-4"
            onClick={() => setsignIn(!signIn)}
          >
            Don't you have an account ?{" "}
            <span className="text-blue-600 font-bold pl-3 cursor-pointer">
              Sign Up
            </span>{" "}
          </p>
        ) : (
          <p
            className="text-gray-400 text-sm text-center mt-4"
            onClick={() => setsignIn(!signIn)}
          >
            Already have an account ?{" "}
            <span className="text-blue-600 font-bold pl-3 cursor-pointer">
              Sign In
            </span>{" "}
          </p>
        )}
      </div>
    </>
  );
};

export default SignUp;
