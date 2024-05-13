"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { formFields } from "../../../../../constants";
import Element from "@/components/shared/Element";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { generateSchemaFromFields, validatorMap } from "@/lib/utils";
import {FileUploader} from "@/components/shared/FileUploader";
import { useState } from "react";

const CreateAd = () => {
  console.log('post render')
  const [files, setFiles] = useState<File[]>([])
  const searchParams = useSearchParams();
  const subCategoryId = searchParams.get("subcategoryid");
  const formObj = formFields.find(
    (item) => item.subCategoryId === Number(subCategoryId)
  );
  const validateFields = formObj?.fields
    .filter((item) => item.required === true)
    .map((field) => field.fieldid);
  const fieldArray: any = validateFields?.map((item: string) => {
    const itemstr = item as keyof typeof validatorMap;
    return {
      name: item,
      type: validatorMap[itemstr],
    };
  });
  
  const dynamicSchema = generateSchemaFromFields(fieldArray);
  const form = useForm<z.infer<typeof dynamicSchema>>({
    resolver: zodResolver(dynamicSchema),
    defaultValues: {
      brand: "",
      desc: "",
      price: "",
      images:null
    },
  });

  async function onSubmit(values: z.infer<typeof dynamicSchema>) {}


  return (
    <div className="max-container min-h-screen bg-white ">
      <h1 className="pb-4 font-bold text-center pt-4">Create your advertisements</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-2 px-4 max-w-[800px]  mx-auto  "
        >
          <div className="flex flex-col gap-5  ">
            {formObj?.fields.filter(item=>item.fieldid !== 'images').map((item: any) => {
              return (
                <FormField
                  control={form.control}
                  name={item.fieldid}
                  render={({ field }) => (
                    <FormItem className="w-full  mt-6 ">
                      <FormLabel>{item.fieldlabel}</FormLabel>
                      <FormControl>
                        <Element
                          fieldtype={item.fieldtype}
                          fieldplaceholder={item.fieldplaceholder}
                          fielddata={item.fielddata}
                          field={field}

                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}

            <hr />

            <div className="mt-6">
              <label className="text-sm font-medium">Add photos</label>
              
              <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <FileUploader 
                      onFieldChange={field.onChange}
                      files= {files}
                      setFiles={setFiles}
                      
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className={`${
                form.formState.isSubmitting ? "bg-primary/15" : "bg-primary"
              } text-white col-span-2 mt-4 mb-2`}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateAd;
