import { error } from 'console';
import {customFetch, handleApiError} from '.'
import { signUpFormProps } from '../types';



export const createUser = async (formData:signUpFormProps) => {
    try {
      const { data } = await customFetch.post("/users/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      

      return {data,error:""}
    } catch (error) {
      return handleApiError(error);
    }
  };

  export const verifyUser = async (email:string,code:string)=>{
    try {
      const {data} = await customFetch.get(`/auth/verify?code=${code}&email=${email}`)
      return {data,error:""}
    } catch (error) {
      return handleApiError(error);
    }
  }