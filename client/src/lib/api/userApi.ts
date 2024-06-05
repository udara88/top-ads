
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
   
    try {
      const {data} = await customFetchPrivate.get<User>(`/users/getuser?email=${email}`)
      return {data,error:""}
    } catch (error) {
      return handleApiError(error);
    }
  }

  export const getAceestoken = async()=>{
 
  
    try {
      console.log('acctokdofpsfdsf')
      const {data} = await customFetchPrivate.get("/refresh")

      console.log("data",data)
      
      return {data,error:""}
      
    } catch (error) {
      console.log("error",error)
      return handleApiError(error);
    }
  }

