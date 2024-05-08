import { type ClassValue, clsx } from "clsx"
import { z } from 'zod';
import { twMerge } from "tailwind-merge"

// interface Field {
//   name: string;
//   type: z.ZodTypeAny;
 
// }


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
   .lt(9999999999)
};
