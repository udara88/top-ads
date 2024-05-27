import { error } from 'console';
import {customFetch, handleApiError} from '.'
import { signInProps, signUpFormProps, User } from '../types';




export const createUser = async (formData:signUpFormProps) => {
    try {
      const { data } = await customFetch.post<string>("/users/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      

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
      
      const {data} = await customFetch.post<signInProps>("/users/signin",payLoad,{
        headers:{
          "Content-Type":"application/json",
          
        },
       
      })
      
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
      const {data} = await customFetch.get<User>(`/users/getuser?email=${email}`)
      return {data,error:""}
    } catch (error) {
      return handleApiError(error);
    }
  }

  export const getAceestoken = async()=>{
    try {
      const {data} = await customFetch.get("/refresh")
      return {data,error:""}
      
    } catch (error) {
      return handleApiError(error);
    }
  }

