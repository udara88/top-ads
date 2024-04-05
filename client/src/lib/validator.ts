import * as z from "zod"
export const signupFormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
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