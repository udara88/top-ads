import { type ClassValue, clsx } from "clsx"
import { z } from 'zod';
import { twMerge } from "tailwind-merge"

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateSchemaFromFields = (fields: { name: string; type: z.ZodTypeAny }[]) => {
  return z.object({
    ...fields.reduce((acc:any, field:any) => {
      acc[field.name] = field.type;
      return acc;
    }, {}),
  });
};

export const validatorMap = {
  brand: z.string().min(2,{
    message:'brand is required'
   }),
   desc: z.string().min(1,{
    message:'description is required'
   }).max(5000,{
    message:'no more than 5000 characters'
   }),
   price: z.coerce.number()
   .int()
   .gt(0)
   .lt(9999999999),
   images: z.any().refine(file=>  file !== null,"Images are required")
    .refine((file) => {  return  file?.size <= MAX_FILE_SIZE}, `Max image size is 5MB.`)
   .refine(
     (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
     "Only .jpg, .jpeg, .png and .webp formats are supported."
   )
   
   
};

export const convertFileToUrl = (file: File) => file &&  URL.createObjectURL(file)
