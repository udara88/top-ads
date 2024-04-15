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
import { signupFormSchema,signinFormSchema } from "../../lib/validator";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { google } from "../../../public/assets/icons";
import Logo from "../../../public/assets/images/logo.png";
import { createUser } from "@/lib/api/userApi";
import { useAppDispatch, useAppSelector } from "@/hooks/useTypedSelector";
import { signInAsync } from "@/redux/features/user/userSlice";

type SignupFormProp = {
  setopen: Dispatch<SetStateAction<boolean>>;
  setShowMessage: Dispatch<SetStateAction<boolean>>;
  setShowErrorMessage: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
};

const SignUp = ({
  setopen,
  setShowMessage,
  setShowErrorMessage,
  setMessage,
}: SignupFormProp) => {
  const [signIn, setsignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const dispatch =  useAppDispatch();

  const formParam :any = !signIn ? signupFormSchema : signinFormSchema
  
  const form = useForm<z.infer<typeof formParam>>({
    resolver: zodResolver(formParam),
    defaultValues: {
      firstname: "",
      lastname: "",
      mobilenumber: "",
      email: "",
      password: "",
    },
  });


  async function onSubmit(values: z.infer<typeof formParam>) {
    setLoading(true);
    if(!signIn){
      const { data, error } = await createUser(values);
      if (data) {
        setLoading(false);
        setShowMessage(true);
        setMessage(`Verification email was successfully sent to ${values.email}`);
  
      }
  
      if (error) {
        setLoading(false);
        setShowErrorMessage(true);
        setMessage(error);
      }
    }else{
      const {email,password} = values
       setLoading(true)
      dispatch(signInAsync({email,password}))
      setLoading(false);
    }
   
    setopen(false);
  }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="sm:text-xl text-lg text-primary">
          <div className="w-full flex justify-center items-center">
            <Image
              src={Logo}
              alt="topads-logo"
              className="object-contain object-center"
              width={110}
              height={29}
            />
          </div>
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`grid ${
              !signIn ? "grid-cols-2 " : "grid-cols-1"
            } gap-2 mt-4 overflow-auto `}
          >
            {!signIn && (
              <>
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="w-full mb-2">
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter firstname"
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
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="w-full mb-2">
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter lastname"
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
                  name="mobilenumber"
                  render={({ field }) => (
                    <FormItem className="w-full mb-2">
                      <FormLabel>Mobile number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter mobile number"
                          {...field}
                          className="input-field"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full mb-2">
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full col-span-2 mb-2">
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
                form.formState.isSubmitting ? "bg-primary-500/80" : "bg-primary"
              } text-white col-span-2 mt-4`}
            >
              {loading ? "Submitting..." : `${!signIn ? "Sign Up" : "Sign In"}`}
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
