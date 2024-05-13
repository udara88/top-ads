import * as z from "zod"
export const signupFormSchema = z.object({
    firstname: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    mobilenumber: z.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Invalid mobile number!'),

    password: z.string().min(8).max(32).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/,{
           message:'Not a valid password'
        }
      )
      ,
      email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("This is not a valid email.")

      
  })

  export const signinFormSchema = z.object({
    
    password: z.string().min(8).max(32).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/,{
           message:'Not a valid password'
        }
      )
      ,
      email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("This is not a valid email.")

      
  })



  