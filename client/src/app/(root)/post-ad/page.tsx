"use client";
import Image from "next/image";
import Car from "../../../../public/assets/icons/car.svg";
import Job from "../../../../public/assets/icons/job.svg";
import Look from "../../../../public/assets/icons/look.svg";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import DialogBox from "@/components/shared/DialogBox";
import { useState } from "react";
import DialogCategoryList from "@/components/post/DialogCategoryList";

const CreatePost = () => {
  const [open, setopen] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="max-w-[1024px] mx-auto bg-white min-h-[450px] mb-8">
      <div className="flex flex-col  items-center   px-4 ">
        <h3 className="font-bold text-gray-700 py-4 text-center px-2">
          Welcome {user?.firstname} {user?.lastname} Let's post an ad.{" "}
        </h3>
        <p className="text-gray-400 pb-4">Choose any option below</p>
        <div className="flex  w-full max-md:flex-col items-center  justify-center gap-4   ">
          <div className=" flex flex-col w-full gap-2   rounded-md border-2 p-4 border-gray-400 ">
            <div className="flex gap-4 items-center">
              <Image src={Car} width={40} height={40} alt="car image" />
              <h3 className=" text-gray-700 font-bold text-center ">
                Sell something
              </h3>
            </div>
            <hr></hr>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-gray-400 font-extralight " onClick={() => setopen(true)}>
                Sell an item or,propery or service
              </Link>
              <Link href="#" className="text-gray-400 font-extralight ">
                Offer a property a rent
              </Link>
            </div>
          </div>

          <div className=" flex flex-col w-full gap-2   rounded-md border-2 p-4 border-gray-400 ">
            <div className="flex gap-4 items-center">
              <Image src={Job} width={40} height={40} alt="car image" />
              <h3 className=" text-gray-700 font-bold text-center ">
                Post a job vacancy
              </h3>
            </div>
            <hr></hr>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-gray-400 font-extralight ">
                Post job in srilanka
              </Link>
              <Link href="#" className="text-gray-400 font-extralight ">
                Post job in overseasr
              </Link>
            </div>
          </div>

          <div className=" flex flex-col w-full gap-2   rounded-md border-2 p-4 border-gray-400 ">
            <div className="flex gap-4 items-center">
              <Image src={Look} width={40} height={40} alt="car image" />
              <h3 className=" text-gray-700 font-bold text-center ">
                Look for something
              </h3>
            </div>
            <hr></hr>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-gray-400 font-extralight ">
                Look for property for rent
              </Link>
              <Link href="#" className="text-gray-400 font-extralight ">
                Look for somehting to buy
              </Link>
            </div>
          </div>
        </div>

        <div className="flex  mt-8 max-md:flex-col gap-4">
          <Link href="#" className="link pr-2">
            know your posting allowances{" "}
          </Link>

          <Link href="#" className="link ">
            see our posting rules
          </Link>
        </div>
      </div>

      <DialogBox open={open} setopen={setopen}>
       <DialogCategoryList/>      
      </DialogBox>
    </div>

  );
};

export default CreatePost;
