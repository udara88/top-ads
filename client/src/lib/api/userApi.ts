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