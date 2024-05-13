"use client";

import { useCallback, Dispatch, SetStateAction } from "react";

import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";

type FileUploaderProps = {
  onFieldChange: (url: any) => void;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
};


export function FileUploader({
  onFieldChange,
  files,
  setFiles,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
   
    if(acceptedFiles.length > 0){
        setFiles((prev)=> [...prev,...acceptedFiles]);

        onFieldChange(acceptedFiles[0]);
    }
    
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  console.log("file upload render");

  return (
    <>
      <div className="flex gap-2">
        {files?.length > 0 &&
          files?.map((file: any) => {
            return ( 
              <Image
                src={convertFileToUrl(file)}
                width={0}
                height={0}
                alt="post image"
                className="w-20 h-auto object-cover object-center"
              />
             
            );
          })}
      </div>
      <div
        {...getRootProps()}
        className="items-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
      >
        <input {...getInputProps()} className="cursor-pointer" />
        <div className="flex flex-col items-center py-5 text-grey-500">
          <img
            src="/assets/icons/upload.svg"
            width={77}
            height={77}
            alt="file upload"
          />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full">
            Select from computer
          </Button>
        </div>
      </div>
    </>
  );
}
