"use client"
import { getAccessTokenAsyc } from '@/redux/features/user/userSlice'
import { useAppDispatch } from "@/redux/store";

 const useRefreshToken  =  () => {
  const dispatch = useAppDispatch();
  const refresh = ()=>{
    
  const data =  dispatch(getAccessTokenAsyc());
  return data
  }
 return refresh
  
}

export default useRefreshToken;