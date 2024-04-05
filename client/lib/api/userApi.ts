import {customFetch, handleApiError} from '../api'

 type  signUpFormProps = {
  email:string;
  username:string;
  password:string;
  
 }

export const createUser = async (formData:signUpFormProps) => {
    try {
      const { data } = await customFetch.post("/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data };
    } catch (error) {
      return handleApiError(error);
    }
  };