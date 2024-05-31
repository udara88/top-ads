
import {customFetch,customFetchPrivate, handleApiError} from '.'
import { signInProps, signUpFormProps, User } from '../types';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

export const createUser = async (formData:signUpFormProps) => {
    try {
      const { data } = await customFetch.post<string>("/users/signup", formData);
      

      return {data,error:null}
    } catch (error) {
      return handleApiError(error);
    }
  };

  export const signIn = async(email:string,password:string)=>{
    const payLoad = {
      email,
      password
    }
    try {
      
      const {data} = await customFetchPrivate.post<signInProps>("/users/signin",payLoad)
      
      return {data,error:null}
    } catch (error) {
       return handleApiError(error)
    }
  }

  export const verifyUser = async (email:string,code:string)=>{
    try {
      const {data} = await customFetch.get(`/auth/verify?code=${code}&email=${email}`)
      return {data,error:""}
    } catch (error) {
      return handleApiError(error);
    }
  }

  export const getUser = async(email:string)=>{
    const axiosPrivate = useAxiosPrivate();
    try {
      const {data} = await axiosPrivate.get<User>(`/users/getuser?email=${email}`)
      return {data,error:""}
    } catch (error) {
      return handleApiError(error);
    }
  }

  export const getAceestoken = async()=>{
    const axiosPrivate = useAxiosPrivate();
    try {
      const {data} = await axiosPrivate.get("/refresh")
      return {data,error:""}
      
    } catch (error) {
      return handleApiError(error);
    }
  }

